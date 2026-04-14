export interface Achievement {
  id: string;
  title: string;
  date: string;
  description: string;
  category: 'Award' | 'Scholarship' | 'Certification';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  link?: string;
}
