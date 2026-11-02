export type ProjectMockup = 'landing' | 'api' | 'email';

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
  links: ProjectLink[];
  mockup: ProjectMockup;
  url: string;
  reversed?: boolean;
};
