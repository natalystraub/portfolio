import { useCallback, useEffect, useRef, useState } from 'react';

export function useScrollTimeline() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<Record<number, HTMLElement | null>>({});
  const [fillHeight, setFillHeight] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    function update() {
      const wrap = wrapRef.current;
      if (!wrap) return;

      const rect = wrap.getBoundingClientRect();
      const mid = window.innerHeight * 0.6;
      const fill = Math.min(Math.max(mid - rect.top, 0), rect.height);
      setFillHeight(fill);

      const entries = Object.values(entryRefs.current).filter((el): el is HTMLElement => el !== null);
      setActiveCount(entries.filter((el) => el.offsetTop < fill).length);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const registerEntry = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      entryRefs.current[index] = el;
    },
    [],
  );

  return { wrapRef, fillHeight, activeCount, registerEntry };
}
