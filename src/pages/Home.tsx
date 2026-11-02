import { Experience } from '../components/Experience/Experience';
import { Hero } from '../components/Hero/Hero';
import { Projects } from '../components/Projects/Projects';
import { TechMarquee } from '../components/TechMarquee/TechMarquee';
import { TechStack } from '../components/TechStack/TechStack';

const SECTIONS = ['educacao', 'sobre', 'contato'];

export function Home() {
  return (
    <main id="topo" className="pt-[63px]">
      <Hero />
      <TechMarquee />
      <Projects />
      <Experience />
      <TechStack />
      {SECTIONS.map((id) => (
        <section key={id} id={id} className="min-h-screen border-t border-(--line) px-5 py-16">
          <div className="mx-auto max-w-[1160px]">
            <h2 className="m-0 font-(--font-display) text-3xl font-bold capitalize tracking-[-0.02em] text-(--ink)">
              {id}
            </h2>
          </div>
        </section>
      ))}
    </main>
  );
}
