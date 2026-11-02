export type AboutStat = {
  labelPt: string;
  labelEn: string;
  valuePt: string;
  valueEn: string;
};

export type AboutPill = {
  pt: string;
  en: string;
};

export type AboutContent = {
  initials: string;
  name: string;
  rolePt: string;
  roleEn: string;
  stats: AboutStat[];
  paragraphsPt: string[];
  paragraphsEn: string[];
  pills: AboutPill[];
};
