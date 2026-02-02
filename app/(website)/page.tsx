import Crafted from '@/components/Crafted';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import LoadingSplash from '@/components/LoadingSplash';
import MoreProjects from '@/components/MoreProjects';
import ProjectSection from '@/components/ProjectSection';
import ScrollToTop from '@/components/ScrollToTop';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prasenjit Das || Portfolio',
  description:
    'From delivering postal services to delivering code – Crafting solutions with JavaScript & TypeScript.',
};

export default function Home() {
  return (
    <LoadingSplash>
      <main className="min-h-screen overflow-hidden">
        <HeroSection />
        <Crafted />
        <ProjectSection />
        <MoreProjects />
        <Footer />
        <ScrollToTop />
      </main>
    </LoadingSplash>
  );
}
