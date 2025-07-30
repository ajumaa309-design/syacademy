import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/home/hero';
import { CourseTracks } from '@/components/home/course-tracks';
import { About } from '@/components/home/about';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CourseTracks />
        <About />
      </main>
      <Footer />
    </div>
  );
}
