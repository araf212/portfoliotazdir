export type Theme = 'dark' | 'light';

export interface SportCardData {
  id: string;
  name: string;
  isPrimary: boolean;
  tagline: string;
  description: string;
  icon: string;
  accentColor: string;
  keyAspects: string[];
}

export interface EducationItem {
  institution: string;
  department?: string;
  qualification: string;
  yearOrExpected: string;
  status: 'In Progress' | 'Completed';
  location: string;
  description: string;
}

export interface AthleticSkillCategory {
  category: string;
  sport: string;
  badge: string;
  skills: {
    name: string;
    focus: string;
    type: 'Mental' | 'Tactical' | 'Physical' | 'Technical';
  }[];
}

export interface PersonalValue {
  title: string;
  description: string;
  iconName: string;
  highlight: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
