import type { Project } from '../../types/project';

export const PROJECTS: Project[] = [
  {
    id: 'landing-pages',
    tagPt: 'Exemplo',
    tagEn: 'Example',
    yearPt: 'troque pelo seu projeto real',
    yearEn: 'swap for your real project',
    titlePt: 'Landing pages responsivas',
    titleEn: 'Responsive landing pages',
    descriptionPt:
      'Sites e landing pages que carregam rápido e funcionam bem em celular, tablet e desktop, com HTML semântico e metadados bem cuidados para o Google entender a página.',
    descriptionEn:
      'Sites and landing pages that load quickly and work well on phones, tablets and desktops, with semantic HTML and careful metadata so search engines understand the page.',
    highlightsPt: ['Performance de carregamento e experiência do usuário', 'SEO técnico e semântica de código'],
    highlightsEn: ['Loading performance and user experience', 'Technical SEO and semantic code'],
    links: [
      { labelPt: 'Ver demo', labelEn: 'Live demo', href: '#' },
      { labelPt: 'Ver código', labelEn: 'Source code', href: '#' },
    ],
    mockup: 'landing',
    url: 'cliente.exemplo.com',
  },
  {
    id: 'api-rest',
    tagPt: 'Exemplo',
    tagEn: 'Example',
    yearPt: 'troque pelo seu projeto real',
    yearEn: 'swap for your real project',
    titlePt: 'Integração com APIs REST',
    titleEn: 'REST API integration',
    descriptionPt:
      'Aplicações front-end que conversam com APIs REST, mantendo a comunicação entre front-end e back-end eficiente e consistente.',
    descriptionEn:
      'Front-end applications that talk to REST APIs, keeping communication between front end and back end efficient and consistent.',
    highlightsPt: ['JavaScript e TypeScript no dia a dia', 'Crescendo para o back-end com Node.js'],
    highlightsEn: ['JavaScript and TypeScript every day', 'Growing into back end with Node.js'],
    links: [
      { labelPt: 'Ver demo', labelEn: 'Live demo', href: '#' },
      { labelPt: 'Ver código', labelEn: 'Source code', href: '#' },
    ],
    mockup: 'api',
    url: 'app.exemplo.com',
    reversed: true,
  },
  {
    id: 'email-campaigns',
    tagPt: 'Exemplo',
    tagEn: 'Example',
    yearPt: 'troque pelo seu projeto real',
    yearEn: 'swap for your real project',
    titlePt: 'Campanhas de e-mail',
    titleEn: 'Email campaigns',
    descriptionPt:
      'Campanhas de e-mail marketing e disparo automatizado para clientes, com foco em engajamento e comunicação direta com o público.',
    descriptionEn:
      'Email marketing campaigns and automated sends for clients, focused on engagement and direct communication with their audience.',
    highlightsPt: ['HTML pensado para clientes de e-mail', 'Suporte e manutenção de sites em produção'],
    highlightsEn: ['HTML built for email clients', 'Ongoing support and maintenance for live sites'],
    links: [{ labelPt: 'Ver exemplo', labelEn: 'See example', href: '#' }],
    mockup: 'email',
    url: 'caixa de entrada',
  },
];
