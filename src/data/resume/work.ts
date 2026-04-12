export interface WorkEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  location: string;
  bullets: string[];
}

export const work: WorkEntry[] = [
  {
    company: 'Company Name',
    role: 'Software Engineer',
    startDate: 'Jan 2024',
    endDate: 'Present',
    location: 'San Francisco, CA',
    bullets: [
      'Led development of a key product feature that improved user retention by 20%.',
      'Collaborated with cross-functional teams to define and ship new APIs.',
      'Mentored junior engineers and conducted code reviews.',
    ],
  },
  {
    company: 'Previous Company',
    role: 'Software Engineer Intern',
    startDate: 'Jun 2023',
    endDate: 'Dec 2023',
    location: 'Remote',
    bullets: [
      'Built and deployed microservices handling 1M+ daily requests.',
      'Reduced page load time by 35% through performance optimization.',
    ],
  },
];
