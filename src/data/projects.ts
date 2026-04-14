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
    title: 'Finance Performance dbt Pipeline',
    shortDescription:
      'Consolidated multi-channel financial data for Hong Kong and Taiwan, eliminating manual reconciliation and delivering a centralized, unified dashboard for finance and operations stakeholders.',
    description: `## Project Goals

Consolidate multi-channel financial data for Hong Kong and Taiwan, reduce manual reconciliation, and provide stakeholders with a centralized, unified dashboard.

## Key Stakeholders

- Finance: HK & TW Finance teams
- Operations: Store leaders, Ecommerce Leader

## Role & Contributions

Project owner & Data architect

- Collaborated with cross-functional data owners and end-users to define and document technical data requirements.
- Designed and implemented a 20+ model Medallion Architecture using dbt and Databricks.
- Delivered a Tableau-ready exposure layer model, enabling data analysts to efficiently build dashboards.

## Challenges & Solutions

Challenge 1 — Regional KPI Inconsistency: Facilitated cross-regional alignment meetings to standardize KPI definitions across HK and TW finance teams.

Challenge 2 — Fragmented Data Sources and Disparate Formats: Engineered a standardized ingestion pipeline and unified schema layer to establish a single source of truth for downstream modeling.

## Architecture Diagram

![Finance Performance dbt Pipeline — Medallion Architecture](/images/projects/finance_dbt_data_models.png)

## Benefits & Value

- Reduced manual reconciliation effort.
- Improved reporting consistency and accuracy across regional business units.
- Single source of truth for daily KPI reporting.`,
    thumbnail: '/images/projects/finance_dbt_data_models.png',
    tags: ['dbt', 'Databricks', 'Tableau', 'SQL', 'Data Engineering', 'Data Modeling'],
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
