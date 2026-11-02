import { useLanguage } from '../../hooks/useLanguage';
import { useSpotlight } from '../../hooks/useSpotlight';
import type { Project } from '../../types/project';
import { BrowserWindow } from '../../ui/BrowserWindow';
import { ApiMockup } from './ApiMockup';
import { EmailMockup } from './EmailMockup';
import { LandingMockup } from './LandingMockup';

type ProjectCardProps = {
  project: Project;
};

const MOCKUPS = {
  landing: LandingMockup,
  api: ApiMockup,
  email: EmailMockup,
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { lang } = useLanguage();
  const { ref, onMouseMove } = useSpotlight<HTMLElement>();
  const Mockup = MOCKUPS[project.mockup];
  const isPt = lang === 'pt';

  return (
    <article
      ref={ref}
      onMouseMove={onMouseMove}
      className={`relative grid items-center gap-6 overflow-hidden rounded-[20px] border border-(--line) bg-(--card) p-6 backdrop-blur-[10px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[20px] before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,0%),var(--glow),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 lg:gap-10 lg:p-8 ${
        project.reversed
          ? 'lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]'
          : 'lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]'
      }`}
    >
      <div className={`relative flex flex-col ${project.reversed ? 'lg:order-2' : ''}`}>
        <div className="mb-4 flex flex-wrap items-center gap-2.5">
          <span className="rounded-md border border-(--line) px-2.5 py-1 font-(family-name:--font-mono) text-[12.5px] font-medium text-(--ice)">
            {isPt ? project.tagPt : project.tagEn}
          </span>
          <span className="font-(family-name:--font-mono) text-[13px] text-(--muted)">
            {isPt ? project.yearPt : project.yearEn}
          </span>
        </div>
        <h3 className="m-0 mb-3.5 font-(family-name:--font-display) text-[clamp(22px,2.6vw,32px)] font-bold tracking-[-0.025em] text-(--ink) leading-[1.1]">
          {isPt ? project.titlePt : project.titleEn}
        </h3>
        <p className="m-0 mb-3.5 max-w-[48ch] text-[15px] text-(--muted)">
          {isPt ? project.descriptionPt : project.descriptionEn}
        </p>
        <ul className="m-0 mb-5 list-none p-0 text-sm">
          {(isPt ? project.highlightsPt : project.highlightsEn).map((item) => (
            <li
              key={item}
              className="relative mb-1.5 pl-[22px] text-(--ink) before:absolute before:top-[11px] before:left-0 before:h-0.5 before:w-2.5 before:bg-(--blue) before:content-['']"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          {project.links.map((link, index) => (
            <a
              key={link.labelPt}
              href={link.href}
              className={`rounded-lg border px-[15px] py-2 text-[13.5px] font-semibold no-underline transition-colors hover:border-(--blue) ${
                index === 0 ? 'border-(--ink) bg-(--ink) text-(--bg)' : 'border-(--line) text-(--ink)'
              }`}
            >
              {isPt ? link.labelPt : link.labelEn}
            </a>
          ))}
        </div>
      </div>
      <div className={`relative [perspective:1100px] ${project.reversed ? 'lg:order-1' : ''}`}>
        <BrowserWindow url={project.url}>
          <Mockup />
        </BrowserWindow>
      </div>
    </article>
  );
}
