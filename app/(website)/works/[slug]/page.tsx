import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import SlugAbout from '@/components/SlugAbout';
import SlugNextPrevProjects from '@/components/SlugNextPrevProjects';
import SlugProjects from '@/components/SlugProjects';
import SlugSection from '@/components/SlugSection';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { Projects } from '@/types/projects';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const PROJECT_QUERY = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  number,
  category,
  image,
  slugHeroImage,
  about,
  platform,
  technologies,
  projectImages,
  deployedLink,
  githubRepo
}`;

const ALL_SLUGS_QUERY = `*[_type == "project"] | order(order asc){
  _id,
  title,
  "slug": slug.current,
  category,
  image,
  slugHeroImage
}`;

async function getProject(slug: string): Promise<Projects | null> {
  try {
    const sanityProject = await client.fetch(PROJECT_QUERY, { slug });

    if (sanityProject) {
      return {
        id: sanityProject._id,
        slug: sanityProject.slug,
        number: sanityProject.number ?? '',
        title: sanityProject.title ?? '',
        category: sanityProject.category ?? '',
        image: sanityProject.image
          ? urlFor(sanityProject.image).width(800).url()
          : '/project.jpg',
        slug_hero_image: sanityProject.slugHeroImage
          ? urlFor(sanityProject.slugHeroImage).width(1920).url()
          : '/project.jpg',
        about: sanityProject.about ?? '',
        platform: sanityProject.platform ?? '',
        technologies: sanityProject.technologies ?? [],
        project_images: sanityProject.projectImages
          ? sanityProject.projectImages.map((img: { asset?: object }) =>
              urlFor(img).width(1200).url()
            )
          : ['/project.jpg'],
        liveUrl: sanityProject.deployedLink ?? undefined,
        repoUrl: sanityProject.githubRepo ?? undefined,
      };
    }
  } catch (err) {
    console.error('Sanity fetch failed:', err);
  }

  return null;
}

async function getAllProjects(): Promise<Projects[]> {
  try {
    const sanityProjects = await client.fetch(ALL_SLUGS_QUERY);
    return sanityProjects.map(
      (
        p: {
          _id: string;
          slug: string;
          title?: string;
          category?: string;
          image?: object;
          slugHeroImage?: object;
        },
        index: number
      ) => ({
        id: p._id,
        slug: p.slug,
        number: String(index + 1).padStart(2, '0'),
        title: p.title ?? '',
        category: p.category ?? '',
        image: p.image ? urlFor(p.image).width(800).url() : '/project.jpg',
        slug_hero_image: p.slugHeroImage
          ? urlFor(p.slugHeroImage).width(1920).url()
          : '/project.jpg',
      })
    );
  } catch (err) {
    console.error('Failed to fetch all projects from Sanity:', err);
    return [];
  }
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = await getProject(resolvedParams.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'This project does not exist.',
    };
  }

  return {
    title: `Prasenjit Das || ${project.title}`,
    description: `Learn more about ${project.title} in the ${project.category} category.`,
    openGraph: {
      title: project.title,
      description: `Explore details about ${project.title}.`,
      images: [
        {
          url: project.slug_hero_image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

const WorksSlugPage = async (props: ProjectPageProps) => {
  const params = await props.params;
  const [project, allProjects] = await Promise.all([
    getProject(params.slug),
    getAllProjects(),
  ]);

  if (!project) {
    notFound();
    return null;
  }

  return (
    <main className="min-h-screen bg-ghost-white relative">
      <SlugSection project={project} />
      <SlugAbout project={project} />
      <SlugProjects project={project} />
      <SlugNextPrevProjects project={project} projects={allProjects} />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default WorksSlugPage;

export async function generateStaticParams() {
  try {
    const sanityProjects = await client.fetch(
      `*[_type == "project"]{ "slug": slug.current }`
    );
    return sanityProjects.map((p: { slug: string }) => ({ slug: p.slug }));
  } catch (err) {
    console.error('Failed to generate static params from Sanity:', err);
    return [];
  }
}
