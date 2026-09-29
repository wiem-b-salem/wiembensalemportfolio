export interface Profile {
  name: string;
  title: string;
  tagline: string;
  about: string;
  email: string;
  linkedin: string;
  github: string;
  cvUrl: string;
}

export interface ProjectDetails {
  role?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  keyTechnologies?: string[];
  challenges?: string;
  whatILearned?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  techStack: string[];
  features: string[];
  githubLink: string;
  details: ProjectDetails;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface AdditionalExperienceDetails {
  responsibilities: string[];
  technologies: string[];
  contributions: string;
}

export interface ExperienceItem {
  slug: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  details: AdditionalExperienceDetails;
}

export type LearningItemKind = 'technology' | 'certification';

export interface LearningFocus {
  title: string;
  kind: LearningItemKind;
  detail: string;
  linkUrl?: string;
  linkLabel?: string;
}

export type QuestionCategory = 'general' | 'projects' | 'experience' | 'skills';

export interface CuratedQuestion {
  id: string;
  question: string;
  category: QuestionCategory;
  answer: string;
  relatedSlug: string | null;
}

export interface QuestionsData {
  questions: CuratedQuestion[];
}