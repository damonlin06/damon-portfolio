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

C: Regional KPI Inconsistency — HK and TW finance teams had inconsistent KPI definitions, causing reporting discrepancies.
S: Facilitated cross-regional alignment meetings to standardize KPI definitions across both teams.
C: Fragmented Data Sources — Financial data came from multiple channels with disparate formats, making unified modeling difficult.
S: Engineered a standardized ingestion pipeline and unified schema layer to establish a single source of truth.

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
    title: 'BigQuery to Databricks Migration Automation',
    shortDescription:
      'Migrated over 100 production data pipelines from Google BigQuery (GCP) to Databricks dbt (AWS) to unify the data ecosystem for Decathlon Taiwan.',
    description: `## Project Goals

Migrate over 100 production data pipelines/scheduled queries from Google BigQuery (GCP) to Databricks dbt (AWS) to unify the data ecosystem for Decathlon Taiwan.

## Key Stakeholders

- United Data platform team
- Domain teams (finance, retail, supply chain)

## Role & Contributions

Project owner & Data engineer

- Created Anchor-Based Slicing framework to intelligently slice complex multi-table JOIN graphs while preserving referential integrity.
- Built an AI-powered pipeline using Gemini to parse legacy SQL and generate optimized dbt models.
- Implemented self-healing validation feedback loops to catch and fix migration errors automatically.

## Challenges & Solutions

C: Complex JOIN Graphs — Multi-table JOIN graphs caused referential integrity breaks during data sampling.
S: Built an Anchor-Based Slicing framework to trace and ensure consistent row selection across tables.
C: Manual SQL Conversion — Converting legacy BigQuery SQL to dbt was slow and error-prone.
S: Developed an AI pipeline with self-healing validation loops to auto-correct generated models.

## Architecture Diagram

![BigQuery to Databricks Migration Automation](/images/projects/bq_databricks_automation.png)

## Benefits & Value

- Reduced manual engineering effort significantly.
- Minimized data movement, saving cost and ensuring data accuracy.
- Unified all Taiwan-market pipelines onto a modern dbt and Delta Lake architecture.`,
    thumbnail: '/images/projects/bq_databricks_automation.png',
    tags: ['dbt', 'Databricks', 'BigQuery', 'SQL', 'Python', 'Gemini AI', 'Data Engineering'],
    date: '2025-06',
  },
  {
    slug: 'project-three',
    title: 'Membership Program Data Pipeline',
    shortDescription:
      'Compute membership points daily from transaction data and serve results to downstream customer-facing apps with high reliability across a hybrid AWS and GCP architecture.',
    description: `## Project Goals

Compute membership points daily from transaction data and serve results to downstream customer-facing apps with high reliability.

## Key Stakeholders

- Membership & CRM product team
- Frontend and backend developers
- Retail operation team

## Role & Contributions

Data engineer

- Designed the hybrid-cloud architecture spanning AWS (Redshift/S3/EMR) and GCP (GCS/Datastore).
- Built comprehensive unit and functional test suite.
- Implemented end-to-end pipeline scheduling, orchestration, and monitoring with Apache Airflow.

## Challenges & Solutions

C: Cross-Cloud Reliability — Cross-cloud data movement introduced reliability and consistency risks.
S: Designed a PySpark and Airflow solution backed by comprehensive unit and functional tests and data validation mechanisms to ensure reliable cross-cloud data movement.

## Architecture Diagram

![Membership Program Data Pipeline — Airflow DAG](/images/projects/membership_airflow_DAG.png)

## Benefits & Value

- Membership points calculated accurately and delivered daily.
- Enabled personalized marketing campaigns and improved member experience.`,
    thumbnail: '/images/projects/membership_airflow_DAG.png',
    tags: ['Apache Airflow', 'PySpark', 'AWS', 'GCP', 'Redshift', 'EMR', 'Data Engineering'],
    date: '2024-12',
  },
];
