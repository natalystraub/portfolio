import { useRef, type MouseEvent } from 'react';

export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  function onMouseMove(event: MouseEvent<T>) {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    element.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    element.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }

  return { ref, onMouseMove };
}
