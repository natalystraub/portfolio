import { ABOUT } from './about-content';
import { IdentityCard } from './IdentityCard';

export function About() {
  return (
    <section id="sobre" className="px-5 py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10 flex flex-wrap items-baseline gap-4">
          <h2 className="m-0 font-(--font-display) text-[clamp(28px,4vw,48px)] leading-none font-bold tracking-[-0.03em] text-(--ink)">
            Sobre
          </h2>
          <small className="font-(--font-mono) text-xs text-(--muted)">// quem sou</small>
        </div>
        <div className="grid grid-cols-1 items-start gap-[30px] lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-12">
          <IdentityCard initials={ABOUT.initials} name={ABOUT.name} role={ABOUT.role} stats={ABOUT.stats} />
          <div>
            {ABOUT.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? 'm-0 mb-4 max-w-[60ch] font-(--font-display) text-[clamp(19px,2.1vw,25px)] font-medium leading-[1.3] tracking-[-0.015em] text-(--ink)'
                    : 'm-0 mb-4 max-w-[60ch] text-[16.5px] leading-[1.6] text-(--muted)'
                }
              >
                {paragraph}
              </p>
            ))}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {ABOUT.pills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-(--line) bg-(--card) px-3.5 py-1.5 text-[13.5px] text-(--ink)"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
