import type { MockMessage, MockStreamer, MockTask } from '../../types/project';

export const INITIAL_TASKS: MockTask[] = [
  {
    id: 1,
    titlePt: 'Estudar programação',
    titleEn: 'Study programming',
    descriptionPt: 'Desenvolver projetos em React',
    descriptionEn: 'Build projects with React',
    isCompleted: true,
  },
  {
    id: 2,
    titlePt: 'Estudar inglês',
    titleEn: 'Study English',
    descriptionPt: 'Assistir vídeos totalmente em inglês',
    descriptionEn: 'Watch videos entirely in English',
    isCompleted: false,
  },
  {
    id: 3,
    titlePt: 'Exercícios da faculdade',
    titleEn: 'College assignments',
    descriptionPt: 'Estudar para as provas',
    descriptionEn: 'Prepare for the exams',
    isCompleted: false,
  },
];

export const STREAMERS: MockStreamer[] = [
  { username: 'knight_moves', isLive: true },
  { username: 'endgame_ana', isLive: false },
  { username: 'rook_and_roll', isLive: true },
  { username: 'blitz_queen', isLive: false },
  { username: 'pawnstorm', isLive: false },
  { username: 'castle_long', isLive: true },
  { username: 'zugzwang_tv', isLive: false },
  { username: 'sicilian_dev', isLive: true },
  { username: 'fianchetto', isLive: false },
  { username: 'gambit_girl', isLive: false },
  { username: 'checkmate_br', isLive: true },
  { username: 'tempo_lab', isLive: false },
];

export const STREAMERS_PAGE_SIZE = 6;

export const INITIAL_MESSAGES: MockMessage[] = [
  { id: 1, sender: 'bot', textPt: 'Olá! Como posso ajudar?', textEn: 'Hi! How can I help?' },
  { id: 2, sender: 'user', textPt: 'Quero testar uma conversa.', textEn: 'I want to try out a conversation.' },
  { id: 3, sender: 'bot', textPt: 'Fique à vontade, é só alternar quem escreve.', textEn: 'Go ahead, just switch who is typing.' },
];
