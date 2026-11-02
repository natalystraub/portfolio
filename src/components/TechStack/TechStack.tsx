import { TECH_STACK } from './tech-stack-content';
import { TechTileCard } from './TechTileCard';

export function TechStack() {
  return (
    <section id="tecnologias" className="px-5 py-16 lg:py-[88px]">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-10 flex flex-wrap items-baseline gap-4">
          <h2 className="m-0 font-(family-name:--font-display) text-[clamp(28px,4vw,48px)] leading-none font-bold tracking-[-0.03em] text-(--ink)">
            Tecnologias
          </h2>
          <small className="font-(family-name:--font-mono) text-xs text-(--muted)">// o que eu uso</small>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {TECH_STACK.map((tile) => (
            <TechTileCard key={tile.id} tile={tile} />
          ))}
        </div>
      </div>
    </section>
  );
}
