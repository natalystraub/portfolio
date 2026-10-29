import { useEffect, useState } from 'react';

export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    function handleScroll() {
      const threshold = window.innerHeight * 0.35;
      let current = '';
      for (const section of sections) {
        if (section.getBoundingClientRect().top < threshold) {
          current = section.id;
        }
      }
      setActiveId(current);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids]);

  return activeId;
}
