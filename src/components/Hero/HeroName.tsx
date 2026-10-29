import { useEffect, useRef } from 'react';
import { HERO_NAME_ROWS } from './hero-content';

const PROXIMITY_RADIUS = 160;

export function HeroName() {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const letters = Array.from(container.querySelectorAll<HTMLSpanElement>('[data-letter]'));

    function handleMouseMove(event: MouseEvent) {
      for (const letter of letters) {
        const rect = letter.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);
        const distance = Math.hypot(dx, dy);
        const proximity = Math.max(0, 1 - distance / PROXIMITY_RADIUS);
        letter.style.setProperty('--p', proximity.toFixed(2));
      }
    }

    function handleMouseLeave() {
      for (const letter of letters) {
        letter.style.setProperty('--p', '0');
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <h1
      ref={containerRef}
      aria-label={HERO_NAME_ROWS.join(' ')}
      className="m-0 mb-[22px] whitespace-nowrap font-(--font-display) text-[clamp(24px,7.4vw,86px)] font-bold uppercase leading-[1] tracking-[-0.03em]"
    >
      {HERO_NAME_ROWS.map((row, rowIndex) => (
        <span key={row} aria-hidden="true" className={`inline-flex ${rowIndex > 0 ? 'ml-[0.3em]' : ''}`}>
          {row.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              data-letter
              className={rowIndex === 0 ? 'hero-letter hero-letter--fill' : 'hero-letter hero-letter--outline'}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}
