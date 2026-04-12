export interface SkillCategory {
  category: string;
  level: 'proficient' | 'familiar';
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Languages',
    level: 'proficient',
    skills: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    level: 'proficient',
    skills: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
  },
  {
    category: 'Tools & Platforms',
    level: 'proficient',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    category: 'Cloud & Infrastructure',
    level: 'familiar',
    skills: ['AWS', 'Docker', 'Vercel', 'PostgreSQL'],
  },
  {
    category: 'Practices',
    level: 'familiar',
    skills: ['REST APIs', 'GraphQL', 'CI/CD', 'Agile'],
  },
];
