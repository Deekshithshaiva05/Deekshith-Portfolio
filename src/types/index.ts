export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  details?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: 'programming' | 'frameworks' | 'tools' | 'soft' | 'other';
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  startYear: number;
  endYear?: number;
  current?: boolean;
  gpa?: string;
  achievements?: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  description: string[];
  technologies?: string[];
}

export interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}