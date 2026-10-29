import type { ButtonVariant } from './button';

export type HeroCtaLink = {
  label: string;
  href: string;
  variant: ButtonVariant;
  download?: boolean;
};
