export type ProjectMockup = 'tasks' | 'stream' | 'chat';

export type ProjectLink = {
  labelPt: string;
  labelEn: string;
  href: string;
};

export type Project = {
  id: string;
  tagPt: string;
  tagEn: string;
  yearPt: string;
  yearEn: string;
  titlePt: string;
  titleEn: string;
  descriptionPt: string;
  descriptionEn: string;
  highlightsPt: string[];
  highlightsEn: string[];
  stack: string[];
  links: ProjectLink[];
  mockup: ProjectMockup;
  url: string;
  reversed?: boolean;
};

export type MockTask = {
  id: number;
  titlePt: string;
  titleEn: string;
  descriptionPt?: string;
  descriptionEn?: string;
  isCompleted: boolean;
};

export type MockStreamer = {
  username: string;
  isLive: boolean;
};

export type MockMessage = {
  id: number;
  sender: 'user' | 'bot';
  textPt: string;
  textEn: string;
};
