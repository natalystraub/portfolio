import { ProjectCard } from './ProjectCard';
import { PROJECTS } from './projects-content';

export function Projects() {
  return (
    <section id="projetos" className="px-5 py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10 flex flex-wrap items-baseline gap-4">
          <h2 className="m-0 font-(--font-display) text-[clamp(28px,4vw,48px)] leading-none font-bold tracking-[-0.03em] text-(--ink)">
            Projetos
          </h2>
          <small className="font-(--font-mono) text-xs text-(--muted)">// trabalhos selecionados</small>
        </div>
        <div className="flex flex-col gap-[22px]">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
