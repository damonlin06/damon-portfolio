export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
  gpa?: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'University Name',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    graduationYear: '2023',
    gpa: '3.8',
  },
];
