export interface Link {
  name: string;
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
}

export interface Project {
  title: string;
  stack: string[];
  bullets: string[];
  links: Link[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
  details: string;
}

export interface Achievement {
  item: string;
  context: string;
}

export interface ResumeData {
  basics: {
    name: string;
    title: string;
    summary: string;
    location: string;
    email: string;
    phone: string;
    links: Link[];
  };
  experience: Experience[];
  projects: Project[];
  skills: SkillGroup[];
  education: Education[];
  certifications: string[];
  achievements: Achievement[];
  extra: string[];
}
