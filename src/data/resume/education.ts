export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  graduationYear: string;
  gpa?: string;
}

export const education: EducationEntry[] = [
  {
    institution: 'City University of Hong Kong',
    degree: 'MSc',
    field: 'Multimedia Information Technology',
    graduationYear: '2017 – 2018',
  },
  {
    institution: 'Guangdong University of Technology',
    degree: 'BSc',
    field: 'Information Management & Information Systems',
    graduationYear: '2012 – 2016',
  },
];
