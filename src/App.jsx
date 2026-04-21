import { useMemo } from 'react';
import { navItems } from './data/content';
import { useActiveSection } from './hooks/useActiveSection';
import Sidebar from './components/Sidebar';
import MouseGlow from './components/MouseGlow';
import VisitorCounter from './components/VisitorCounter';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="relative min-h-screen">
      <MouseGlow />
      <VisitorCounter />
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar activeSection={activeSection} />
          <main className="lg:w-[52%] lg:pt-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
