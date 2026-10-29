import type { Language } from '../../types/navigation';
import { NAV_LINKS } from './nav-links';

type NavProps = {
  lang: Language;
  activeId: string;
  className?: string;
  onLinkClick?: () => void;
};

export function Nav({ lang, activeId, className = '', onLinkClick }: NavProps) {
  return (
    <nav aria-label="Principal" className={className}>
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={link.href}
          onClick={onLinkClick}
          className={`relative rounded-lg px-3 py-2 text-sm font-medium no-underline transition-colors hover:bg-(--line) hover:text-(--ink) ${
            activeId === link.id
              ? "text-(--ink) after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-(--blue) after:content-['']"
              : 'text-(--muted)'
          }`}
        >
          {lang === 'pt' ? link.labelPt : link.labelEn}
        </a>
      ))}
    </nav>
  );
}
