import type { Project } from '../../types/project';

export const PROJECTS: Project[] = [
  {
    id: 'landing-pages',
    tag: 'Exemplo',
    year: 'troque pelo seu projeto real',
    title: 'Landing pages responsivas',
    description:
      'Sites e landing pages que carregam rápido e funcionam bem em celular, tablet e desktop, com HTML semântico e metadados bem cuidados para o Google entender a página.',
    highlights: [
      'Performance de carregamento e experiência do usuário',
      'SEO técnico e semântica de código',
    ],
    links: [
      { label: 'Ver demo', href: '#' },
      { label: 'Ver código', href: '#' },
    ],
    mockup: 'landing',
    url: 'cliente.exemplo.com',
  },
  {
    id: 'api-rest',
    tag: 'Exemplo',
    year: 'troque pelo seu projeto real',
    title: 'Integração com APIs REST',
    description:
      'Aplicações front-end que conversam com APIs REST, mantendo a comunicação entre front-end e back-end eficiente e consistente.',
    highlights: [
      'JavaScript e TypeScript no dia a dia',
      'Crescendo para o back-end com Node.js',
    ],
    links: [
      { label: 'Ver demo', href: '#' },
      { label: 'Ver código', href: '#' },
    ],
    mockup: 'api',
    url: 'app.exemplo.com',
    reversed: true,
  },
  {
    id: 'email-campaigns',
    tag: 'Exemplo',
    year: 'troque pelo seu projeto real',
    title: 'Campanhas de e-mail',
    description:
      'Campanhas de e-mail marketing e disparo automatizado para clientes, com foco em engajamento e comunicação direta com o público.',
    highlights: [
      'HTML pensado para clientes de e-mail',
      'Suporte e manutenção de sites em produção',
    ],
    links: [{ label: 'Ver exemplo', href: '#' }],
    mockup: 'email',
    url: 'caixa de entrada',
  },
];
