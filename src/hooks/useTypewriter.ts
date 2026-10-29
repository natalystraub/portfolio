import { useEffect, useState } from 'react';

const TYPE_DELAY = 110;
const DELETE_DELAY = 55;
const HOLD_DELAY = 1500;
const NEXT_WORD_DELAY = 300;

export function useTypewriter(words: string[]) {
  const [text, setText] = useState(() => words[0] ?? '');

  useEffect(() => {
    if (words.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    function tick() {
      const word = words[wordIndex];
      setText(word.slice(0, charIndex));

      if (!isDeleting && charIndex < word.length) {
        charIndex++;
        timeoutId = setTimeout(tick, TYPE_DELAY);
      } else if (!isDeleting) {
        isDeleting = true;
        timeoutId = setTimeout(tick, HOLD_DELAY);
      } else if (charIndex > 0) {
        charIndex--;
        timeoutId = setTimeout(tick, DELETE_DELAY);
      } else {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutId = setTimeout(tick, NEXT_WORD_DELAY);
      }
    }

    timeoutId = setTimeout(tick, TYPE_DELAY);
    return () => clearTimeout(timeoutId);
  }, [words]);

  return text;
}
