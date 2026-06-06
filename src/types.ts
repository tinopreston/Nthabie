export interface StatCard {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ProfileTile {
  id: string;
  title: string;
  teaser: string;
  iconName: string;
  category: string;
  content: string;
  highlights?: string[];
  meta?: {
    role?: string;
    company?: string;
    period?: string;
    location?: string;
  };
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  strengths?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100 percentage
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  institution?: string;
  achievement?: string;
  date?: string;
  description: string;
  skills: string[];
  imagePlaceholderText: string;
  gradient: string;
}

export interface JourneyMilestone {
  id: string;
  title: string;
  description: string;
  year?: string;
}
