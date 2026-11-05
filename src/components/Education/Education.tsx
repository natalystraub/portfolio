import { useLanguage } from '../../hooks/useLanguage';
import { EDUCATION } from './education-content';
import { EducationCard } from './EducationCard';

export function Education() {
  const { lang } = useLanguage();

  return (
    <section id="educacao" className="px-5 py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10 flex flex-wrap items-baseline gap-4">
          <h2 className="m-0 font-(family-name:--font-display) text-[clamp(28px,4vw,48px)] leading-none font-bold tracking-[-0.03em] text-(--ink)">
            {lang === 'pt' ? 'Educação' : 'Education'}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {EDUCATION.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
