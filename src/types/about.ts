export type AboutStat = {
  label: string;
  value: string;
};

export type AboutContent = {
  initials: string;
  name: string;
  role: string;
  stats: AboutStat[];
  paragraphs: string[];
  pills: string[];
};
