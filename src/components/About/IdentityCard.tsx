import { useLanguage } from '../../hooks/useLanguage';
import { useSpotlight } from '../../hooks/useSpotlight';
import type { AboutStat } from '../../types/about';

type IdentityCardProps = {
  initials: string;
  name: string;
  rolePt: string;
  roleEn: string;
  stats: AboutStat[];
};

export function IdentityCard({ initials, name, rolePt, roleEn, stats }: IdentityCardProps) {
  const { lang } = useLanguage();
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();
  const isPt = lang === 'pt';

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden rounded-[20px] border border-(--line) bg-(--card) p-6 text-center backdrop-blur-[10px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[20px] before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,0%),var(--glow),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
    >
      <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full border-2 border-(--blue) bg-(--bg-2) font-(family-name:--font-display) text-[38px] font-bold tracking-[-0.03em] text-(--ink) shadow-[0_0_0_6px_var(--glow)]">
        {initials}
      </div>
      <h3 className="relative m-0 mb-0.5 font-(family-name:--font-display) text-[19px] text-(--ink)">{name}</h3>
      <p className="relative m-0 text-sm text-(--muted)">{isPt ? rolePt : roleEn}</p>
      <ul className="relative m-0 mt-4 list-none p-0 text-left text-sm">
        {stats.map((stat) => (
          <li key={stat.labelPt} className="flex justify-between border-t border-(--line) py-2.5 text-(--ink)">
            <span className="text-(--muted)">{isPt ? stat.labelPt : stat.labelEn}</span>
            {isPt ? stat.valuePt : stat.valueEn}
          </li>
        ))}
      </ul>
    </div>
  );
}
