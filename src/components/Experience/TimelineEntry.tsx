import { useSpotlight } from '../../hooks/useSpotlight';
import type { ExperienceEntry } from '../../types/experience';

type TimelineEntryProps = {
  entry: ExperienceEntry;
  index: number;
  isActive: boolean;
  registerRef: (el: HTMLElement | null) => void;
};

export function TimelineEntry({ entry, index, isActive, registerRef }: TimelineEntryProps) {
  const { ref: spotRef, onMouseMove } = useSpotlight<HTMLDivElement>();
  const isOdd = index % 2 === 0;

  function setRefs(el: HTMLDivElement | null) {
    spotRef.current = el;
    registerRef(el);
  }

  return (
    <div
      ref={setRefs}
      onMouseMove={onMouseMove}
      className={`relative mb-[34px] ml-10 w-auto rounded-[20px] border border-(--line) bg-(--card) px-[22px] py-5 backdrop-blur-[10px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[20px] before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,0%),var(--glow),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 lg:w-[calc(50%-40px)] ${
        isOdd ? 'lg:ml-0' : 'lg:ml-[calc(50%+40px)]'
      }`}
    >
      <span
        className={`absolute -left-[34px] top-[30px] h-4 w-4 rounded-full border-[3px] bg-(--bg) transition-[border-color,box-shadow] duration-300 ${
          isOdd ? 'lg:-right-12' : 'lg:-left-12'
        } ${isActive ? 'border-(--blue) shadow-[0_0_0_6px_var(--glow)]' : 'border-(--line)'}`}
      />
      <div className="relative font-(family-name:--font-mono) text-[13px] text-(--muted)">{entry.period}</div>
      <h4 className="relative m-0 mt-1.5 mb-2 font-(family-name:--font-display) text-[17px] font-semibold tracking-[-0.01em] text-(--ink)">
        {entry.title}
      </h4>
      <p className="relative m-0 text-[14.5px] text-(--muted)">{entry.description}</p>
      <span className="relative mt-3.5 inline-block rounded-md border border-(--line) px-2.5 py-1 font-(family-name:--font-mono) text-[12.5px] font-medium text-(--ice)">
        {entry.tag}
      </span>
    </div>
  );
}
