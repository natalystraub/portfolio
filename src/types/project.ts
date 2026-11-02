export type ProjectMockup = 'landing' | 'api' | 'email';

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  tag: string;
  year: string;
  title: string;
  description: string;
  highlights: string[];
  links: ProjectLink[];
  mockup: ProjectMockup;
  url: string;
  reversed?: boolean;
};
