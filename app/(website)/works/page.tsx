import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WorksCodepen from '@/components/WorksCodepen';
import WorksGithub from '@/components/WorksGithub';
import WorksProject from '@/components/WorksProject';
import WorksSection from '@/components/WorksSection';
import { getBestPens } from '@/lib/codepen';
import { getGithubData } from '@/lib/github';

export const metadata = {
  title: 'Prasenjit Das || Works',
  description:
    'From delivering postal services to delivering code – Crafting solutions with JavaScript & TypeScript.',
};

// Ensure the page is dynamic since it fetches data that might change
export const dynamic = 'force-dynamic';

const WorksPage = async () => {
  const { repos } = await getGithubData({ includeLanguages: false });
  const pens = await getBestPens();

  return (
    <main className="min-h-screen overflow-hidden">
      <WorksSection />
      <WorksProject />
      <WorksGithub repos={repos} />
      <WorksCodepen pens={pens} />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default WorksPage;
