export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  date: string; // ISO year-month, e.g. "2025-11"
}

export const projects: Project[] = [
  {
    slug: 'project-one',
    title: 'Project One',
    shortDescription:
      'A brief description of project one and what problem it solves.',
    description: `## Overview

This is the full description of Project One. Replace this with real project details.

## Key Features

- Feature one that makes this project stand out
- Feature two showcasing technical depth
- Feature three demonstrating impact

## Tech Stack

Built with Next.js, TypeScript, and Tailwind CSS.`,
    thumbnail: '',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/damonlin06',
    date: '2025-11',
  },
  {
    slug: 'project-two',
    title: 'Project Two',
    shortDescription:
      'A brief description of project two and the impact it had.',
    description: `## Overview

This is the full description of Project Two. Replace this with real project details.

## Key Features

- Feature one
- Feature two
- Feature three

## Tech Stack

Built with React, Node.js, and PostgreSQL.`,
    thumbnail: '',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    repoUrl: 'https://github.com/damonlin06',
    date: '2025-06',
  },
  {
    slug: 'project-three',
    title: 'Project Three',
    shortDescription: 'A brief description of project three.',
    description: `## Overview

This is the full description of Project Three. Replace this with real project details.

## Key Features

- Feature one
- Feature two

## Tech Stack

Built with Python, FastAPI, and Docker.`,
    thumbnail: '',
    tags: ['Python', 'FastAPI', 'Docker'],
    date: '2024-12',
  },
];
