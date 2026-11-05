import type { HeroCtaLink } from '../../types/hero';

export const HERO_NAME_ROWS = ['NÁTALY', 'STRAUB'];

export const HERO_ROLE_PREFIX_PT = 'Desenvolvedora';
export const HERO_ROLE_PREFIX_EN = 'Developer';

export const HERO_ROLE_WORDS = ['Software', 'React', 'TypeScript'];

export const HERO_LEAD_PT = 'Crio sites e landing pages rápidas, responsivas e fáceis de encontrar no Google.';
export const HERO_LEAD_EN = 'I build fast, responsive websites and landing pages that are easy to find on Google.';

export const HERO_CTA_LINKS: HeroCtaLink[] = [
  { labelPt: 'Ver projetos', labelEn: 'See my work', href: '#projetos', variant: 'primary' },
  {
    labelPt: 'Baixar currículo',
    labelEn: 'Download résumé',
    href: '/nataly-straub-curriculo.pdf',
    variant: 'secondary',
    download: true,
  },
];
