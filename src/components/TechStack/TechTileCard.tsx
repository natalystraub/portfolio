import { useLanguage } from '../../hooks/useLanguage';
import { useSpotlight } from '../../hooks/useSpotlight';
import type { TechTile } from '../../types/tech';

type TechTileCardProps = {
  tile: TechTile;
};

export function TechTileCard({ tile }: TechTileCardProps) {
  const { lang } = useLanguage();
  const { ref, onMouseMove } = useSpotlight<HTMLDivElement>();
  const isPt = lang === 'pt';

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative flex min-h-[96px] flex-col justify-between overflow-hidden rounded-[20px] border border-(--line) bg-(--card) px-[18px] py-5 backdrop-blur-[10px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[20px] before:bg-[radial-gradient(380px_circle_at_var(--mx,50%)_var(--my,0%),var(--glow),transparent_65%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
    >
      <span className="relative font-(family-name:--font-mono) text-xs font-medium text-(--muted)">
        {isPt ? tile.categoryPt : tile.categoryEn}
      </span>
      <h4 className="relative m-0 font-(family-name:--font-display) text-lg font-semibold tracking-[-0.015em] text-(--ink)">
        {isPt ? tile.titlePt : tile.titleEn}
      </h4>
    </div>
  );
}
