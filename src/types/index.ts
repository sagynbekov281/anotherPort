export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  year: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
