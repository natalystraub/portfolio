import type { HeroCtaLink } from '../../types/hero';

export const HERO_NAME_ROWS = ['NÁTALY', 'STRAUB'];

export const HERO_ROLE_PREFIX = 'Desenvolvedora';

export const HERO_ROLE_WORDS = ['Front-End', 'React', 'TypeScript'];

export const HERO_LEAD = 'Crio sites e landing pages rápidas, responsivas e fáceis de encontrar no Google.';

export const HERO_CTA_LINKS: HeroCtaLink[] = [
  { label: 'Ver projetos', href: '#projetos', variant: 'primary' },
  {
    label: 'Baixar currículo',
    href: '/nataly-straub-curriculo.pdf',
    variant: 'secondary',
    download: true,
  },
];
