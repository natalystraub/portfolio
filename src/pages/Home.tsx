import { Hero } from '../components/Hero/Hero';

const SECTIONS = ['projetos', 'experiencia', 'tecnologias', 'educacao', 'sobre', 'contato'];

export function Home() {
  return (
    <main id="topo" className="pt-[63px]">
      <Hero />
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
