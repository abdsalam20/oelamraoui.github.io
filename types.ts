export type Section = 'home' | 'about' | 'publications' | 'talks' | 'participations' | 'contact';

export type ThemeName = 'light' | 'dark';

export type Language = 'en' | 'fr';

export type LocalizedString = {
  [key in Language]: string;
};

export interface Theme {
  name: ThemeName;
  background: string;
  card: string;
  cardHover: string;
  textHeader: string;
  textBody: string;
  textMuted: string;
  textLink: string;
  textLinkActive: string;
  textLinkHover: string;
  primaryBg: string;
  primaryBgHover: string;
  divider: string;
  accent: string;
  accentText: string;
  navBg: string;
  navBorder: string;
  navText: string;
  buttonActiveBg: string;
  buttonActiveText: string;
  buttonInactiveBg: string;
  buttonInactiveText: string;
  buttonInactiveHoverBg: string;
  homeGradient: string;
}

export enum PublicationStatus {
  Published = 'Published',
  Accepted = 'Accepted',
  Submitted = 'Submitted',
  InPreparation = 'In Preparation',
}

export interface Publication {
  icon: string;
  title: LocalizedString;
  authors: string[];
  journal?: LocalizedString;
  year?: number;
  doi?: string;
  link?: string;
  status: PublicationStatus;
}

export interface Talk {
  title: LocalizedString;
  authors?: string[];
  event: LocalizedString;
  venue: LocalizedString;
  date: string;
  thumbnail?: string;
}

export interface Participation {
  icon: string;
  title: LocalizedString;
  event?: LocalizedString;
  date: string;
  location: LocalizedString;
  description?: LocalizedString;
}

export interface AcademicProfile {
  name: string;
  url: string;
  icon: string;
}

export interface EducationItem {
  dates: string;
  degree: LocalizedString;
  institution: LocalizedString;
  details?: LocalizedString;
}

export interface WorkItem {
  dates: string;
  role: LocalizedString;
  institution: LocalizedString;
  details: LocalizedString;
}