import { useRef, useState } from 'react';

const RESET_DELAY = 2200;

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), RESET_DELAY);
    } catch {
      // clipboard API unavailable; nothing to show
    }
  }

  return { copied, copy };
}
