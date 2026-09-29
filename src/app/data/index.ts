import type { Profile, Project, SkillCategory, ExperienceItem, LearningFocus, CuratedQuestion } from './models';

import profileJson from './profile.json';
import projectsJson from './projects.json';
import skillsJson from './skills.json';
import experienceJson from './experience.json';
import learningJson from './learning.json';
import questionsJson from './questions.json';

export const PROFILE = profileJson as unknown as Profile;
export const PROJECTS = projectsJson as unknown as Project[];
export const SKILLS = skillsJson as unknown as SkillCategory[];
export const EXPERIENCE = experienceJson as unknown as ExperienceItem[];
export const LEARNING = learningJson as unknown as LearningFocus[];
export const QUESTIONS = (questionsJson as unknown as { questions: CuratedQuestion[] }).questions;

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getExperience(slug: string): ExperienceItem | undefined {
  return EXPERIENCE.find((e) => e.slug === slug);
}

export function getQuestion(id: string): CuratedQuestion | undefined {
  return QUESTIONS.find((q) => q.id === id);
}

export const QUESTION_CATEGORIES: { key: string; label: string }[] = [
  { key: 'general', label: 'General' },
  { key: 'projects', label: 'Projects' },
  { key: 'experience', label: 'Experience' },
  { key: 'skills', label: 'Skills' }
];