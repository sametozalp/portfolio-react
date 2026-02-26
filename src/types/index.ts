export interface Social {
  id?: number;
  type: 'GITHUB' | 'LINKEDIN' | 'X' | 'INSTAGRAM';
  url: string;
}

export interface Skill {
  id?: number;
  name: string;
}

export interface Project {
  id?: number;
  title: string;
  summary: string;
  description: string;
  features: string[];
  images: string[];
  projectDate: string;
  techStack: string[];
  liveDemoUrl?: string;
  sourceCodeUrl?: string;
}

export interface Experience {
  id?: number;
  positionName: string;
  description: string;
  company: string;
  startDate: string;
  endDate?: string;
}

export interface Education {
  id?: number;
  major: string;
  description: string;
  school: string;
  startDate: string;
  endDate?: string;
}

export interface Entrance {
  id?: number;
  title: string;
  fullName: string;
  description: string;
}

export interface Copyright {
  id?: number;
  description: string;
  year: number;
}

export interface Contact {
  id?: number;
  title: string;
  description: string;
  myEmail: string;
}

export interface About {
  id?: number;
  skills: string[];
  description: string;
  title: string;
  profileImageUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
