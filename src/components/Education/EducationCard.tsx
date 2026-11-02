import { useSpotlight } from '../../hooks/useSpotlight';
import type { EducationEntry } from '../../types/education';

type EducationCardProps = {
  entry: EducationEntry;
};

export function EducationCard({ entry }: EducationCardProps) {
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-[20px] border border-(--line) bg-(--card) px-6 py-[22px] backdrop-blur-[10px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[20px] before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,0%),var(--glow),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
    >
      <div className="relative">
        <div className="font-(family-name:--font-mono) text-[12.5px] text-(--muted)">{entry.period}</div>
        <h4 className="m-0 mt-1.5 mb-1.5 font-(family-name:--font-display) text-lg font-semibold tracking-[-0.01em] text-(--ink)">
          {entry.title}
        </h4>
        {entry.text && <p className="m-0 text-[14.5px] text-(--muted)">{entry.text}</p>}
      </div>
      <span className="relative mt-3.5 inline-block w-fit rounded-md border border-(--line) px-2.5 py-1 font-(family-name:--font-mono) text-[12.5px] font-medium text-(--ice)">
        {entry.tag}
      </span>
    </div>
  );
}
