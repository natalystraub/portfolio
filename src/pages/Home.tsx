import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Education } from '../components/Education/Education';
import { Experience } from '../components/Experience/Experience';
import { Hero } from '../components/Hero/Hero';
import { Projects } from '../components/Projects/Projects';
import { TechMarquee } from '../components/TechMarquee/TechMarquee';
import { TechStack } from '../components/TechStack/TechStack';

export function Home() {
  return (
    <main id="topo" className="pt-[63px]">
      <Hero />
      <TechMarquee />
      <Projects />
      <Experience />
      <TechStack />
      <Education />
      <About />
      <Contact />
    </main>
  );
}
