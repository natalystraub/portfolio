import { useTypewriter } from '../../hooks/useTypewriter';
import { Button } from '../../ui/Button';
import { HERO_CTA_LINKS, HERO_LEAD, HERO_ROLE_PREFIX, HERO_ROLE_WORDS } from './hero-content';
import { HeroName } from './HeroName';

export function Hero() {
  const role = useTypewriter(HERO_ROLE_WORDS);

  return (
    <div className="mx-auto flex max-w-[1160px] flex-col px-5 py-12 sm:py-16 lg:min-h-[600px] lg:justify-center lg:py-24">
      <HeroName />
      <p className="m-0 mb-3.5 font-(--font-display) text-[clamp(17px,2vw,24px)] font-medium tracking-[-0.02em] text-(--ink)">
        {HERO_ROLE_PREFIX}{' '}
        <b className="border-r-[3px] border-(--ice) pr-1 font-bold text-(--ice) motion-safe:animate-[caret_1s_steps(1)_infinite]">
          {role}
        </b>
      </p>
      <p className="m-0 mb-7 max-w-[52ch] text-[16.5px] text-(--muted)">{HERO_LEAD}</p>
      <div className="flex flex-wrap gap-3">
        {HERO_CTA_LINKS.map((cta) => (
          <Button key={cta.label} href={cta.href} download={cta.download} variant={cta.variant}>
            {cta.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
