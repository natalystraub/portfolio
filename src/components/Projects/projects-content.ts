import type { Project } from '../../types/project';

export const PROJECTS: Project[] = [
  {
    id: 'task-manager',
    tagPt: 'React',
    tagEn: 'React',
    yearPt: '2026',
    yearEn: '2026',
    titlePt: 'Gerenciador de Tarefas',
    titleEn: 'Task Manager',
    descriptionPt:
      'Aplicação para organizar o dia a dia: crie tarefas com título e descrição, marque como concluídas, exclua e abra uma página de detalhes para cada uma.',
    descriptionEn:
      'An app to organize your day: create tasks with a title and description, mark them as done, delete them and open a details page for each one.',
    highlightsPt: [
      'Estado com useState e componentes reutilizáveis',
      'Rotas com React Router e dados via query params',
      'Validação de formulário e interface com Tailwind CSS',
    ],
    highlightsEn: [
      'State with useState and reusable components',
      'Routing with React Router and data passed via query params',
      'Form validation and a Tailwind CSS interface',
    ],
    stack: ['React', 'Tailwind CSS', 'React Router', 'Vite'],
    links: [
      { labelPt: 'Ver código', labelEn: 'Source code', href: 'https://github.com/natalystraub/task-manager-react' },
    ],
    mockup: 'tasks',
    url: 'natalystraub/task-manager-react',
  },
  {
    id: 'stream-filter',
    tagPt: 'React',
    tagEn: 'React',
    yearPt: '2026',
    yearEn: '2026',
    titlePt: 'Stream Filter',
    titleEn: 'Stream Filter',
    descriptionPt:
      'Vitrine de streamers de xadrez consumindo a API pública do Chess.com: mostra quem está ao vivo e leva direto para o canal na Twitch.',
    descriptionEn:
      'A showcase of chess streamers built on the public Chess.com API: it shows who is live and takes you straight to their Twitch channel.',
    highlightsPt: [
      'Consumo de API REST com fetch e async/await',
      'Estados de carregamento e erro tratados na interface',
      'Paginação progressiva com o botão "Ver mais"',
    ],
    highlightsEn: [
      'REST API consumption with fetch and async/await',
      'Loading and error states handled in the UI',
      'Progressive pagination with a "Load more" button',
    ],
    stack: ['React', 'CSS Modules', 'Fetch API', 'Vite'],
    links: [
      { labelPt: 'Ver código', labelEn: 'Source code', href: 'https://github.com/natalystraub/chess-stream-filter' },
    ],
    mockup: 'stream',
    url: 'natalystraub/chess-stream-filter',
    reversed: true,
  },
];
