export interface ContactLink {
  label: string;
  href: string;
  display: string;
}

export interface ContactData {
  email: ContactLink;
  links: ContactLink[];
}

export const contact: ContactData = {
  email: {
    label: 'Email',
    href: 'mailto:damonlin06@gmail.com',
    display: 'damonlin06@gmail.com',
  },
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/damon-lin-profile/',
      display: 'linkedin.com/in/damon-lin-profile',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/damonlin06',
      display: 'github.com/damonlin06',
    },
  ],
};
