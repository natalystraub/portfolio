import { TECHNOLOGIES } from './tech-marquee-content';

export function TechMarquee() {
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <div
      aria-hidden="true"
      className="relative overflow-hidden border-y border-(--line) bg-(--card) backdrop-blur-[8px]"
    >
      <div className="flex w-max gap-6 py-3.5 motion-safe:animate-[marquee_38s_linear_infinite] sm:gap-10">
        {items.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="flex items-center font-(--font-display) text-sm font-semibold tracking-[-0.01em] whitespace-nowrap text-(--muted) sm:text-lg"
          >
            {tech}
            <i className="ml-6 inline-block h-2 w-2 rotate-45 rounded-sm bg-(--blue) sm:ml-10" />
          </span>
        ))}
      </div>
    </div>
  );
}
