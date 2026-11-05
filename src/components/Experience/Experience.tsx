import { useLanguage } from '../../hooks/useLanguage';
import { useScrollTimeline } from '../../hooks/useScrollTimeline';
import { EXPERIENCE } from './experience-content';
import { TimelineEntry } from './TimelineEntry';

export function Experience() {
  const { lang } = useLanguage();
  const { wrapRef, fillHeight, activeCount, registerEntry } = useScrollTimeline();

  return (
    <section id="experiencia" className="px-5 py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10 flex flex-wrap items-baseline gap-4">
          <h2 className="m-0 font-(family-name:--font-display) text-[clamp(28px,4vw,48px)] leading-none font-bold tracking-[-0.03em] text-(--ink)">
            {lang === 'pt' ? 'Experiência' : 'Experience'}
          </h2>
        </div>
        <div ref={wrapRef} className="relative mx-auto max-w-[900px]">
          <div className="absolute top-0 bottom-0 left-[14px] w-0.5 bg-(--line) lg:left-1/2 lg:-translate-x-1/2" />
          <div
            className="absolute top-0 left-[14px] w-0.5 bg-gradient-to-b from-(--blue) to-(--violet) shadow-[0_0_14px_var(--blue)] lg:left-1/2 lg:-translate-x-1/2"
            style={{ height: fillHeight }}
          />
          {EXPERIENCE.map((entry, index) => (
            <TimelineEntry
              key={entry.id}
              entry={entry}
              index={index}
              isActive={index < activeCount}
              registerRef={registerEntry(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
