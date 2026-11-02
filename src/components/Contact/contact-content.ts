import type { ContactLink } from '../../types/contact';

export const CONTACT_EMAIL = 'naty.ramos636@gmail.com';

export const CONTACT_HEADING = {
  outlinePt: 'Vamos criar',
  outlineEn: "Let's build",
  filledPt: 'algo juntos?',
  filledEn: 'something?',
};

export const CONTACT_LINKS: ContactLink[] = [
  { labelPt: 'LinkedIn', labelEn: 'LinkedIn', href: 'https://www.linkedin.com/in/nataly-straub' },
  { labelPt: 'GitHub', labelEn: 'GitHub', href: 'https://github.com/natalystraub' },
  {
    labelPt: 'Currículo (PDF)',
    labelEn: 'Résumé (PDF)',
    href: '/nataly-straub-curriculo.pdf',
    download: true,
  },
];
