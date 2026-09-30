export interface LearningProgressEntry {
  title: string;
  progress: number;
}

/* Placeholder values (0-100) — edit these to match real progress.
   Titles must match learning.json exactly; unmatched items fall back to 0. */
export const LEARNING_PROGRESS: LearningProgressEntry[] = [
  { title: 'Python Certifications (FreeCodeCamp & PCAP Preparation)', progress: 55 },
  { title: 'AWS Cloud Fundamentals', progress: 30 },
  { title: 'System design basics', progress: 65 }
];

export function getLearningProgress(title: string): number {
  return LEARNING_PROGRESS.find((entry) => entry.title === title)?.progress ?? 0;
}
