export interface CaseStudy {
  slug: string;
  title: string;
  projectRef: string; // display label linking back to the project
  projectSlug: string; // slug of the related project
  tags: string[];
  description: string;
  date: string; // ISO year-month, e.g. "2025-11"
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'finance-performance-dbt-pipeline',
    title: 'Finance Performance dbt Pipeline',
    projectRef: 'Finance Performance dbt Pipeline',
    projectSlug: 'project-one',
    tags: ['dbt', 'Databricks', 'Tableau', 'SQL', 'Data Engineering', 'Data Modeling'],
    date: '2025-11',
    description: `## Problem Statement

The Hong Kong and Taiwan finance teams were relying on fragmented data sources and manual reconciliation processes to produce daily performance reports. Financial data came from multiple channels, which made it difficult to maintain a consistent single source of truth. This created delays, repeated validation work, and inconsistent KPI definitions across teams.

## Analysis Techniques Used

- Data Lineage Mapping — Source-to-target mapping to understand how data flowed from each finance channel into the reporting layer.
- Data profiling and quality checks to identify missing values, duplicates, schema inconsistencies, and reconciliation gaps.
- KPI definition alignment with finance stakeholders to ensure consistent business logic across Hong Kong and Taiwan teams.
- Medallion architecture design to separate raw ingestion, cleaned transformations, and reporting-ready marts.
- Incremental model design in dbt to improve scalability and reduce processing time.

## Visualizations or Dashboards Created

The pipeline fed a Tableau reporting layer designed for daily finance performance tracking. The dashboards typically included:

- Daily turnover, piloting, commitment and ambition data
- YOY performance tracking and comparison
- Support region, store, seller type and other aggregation filters

![Finance Performance Dashboard](/images/projects/finance_performance_dashboard.png)

> **Note:** The dashboard above uses mocked data for confidentiality purposes. The structure, metrics, and layout reflect the actual implementation, but all figures shown are illustrative only.

## Insights Gained and Decisions Influenced

- Reduced data fragmentation by consolidating multi-channel finance data into a single governed model.
- Eliminated manual reconciliation by automating transformations and validation workflows.
- Enabled faster daily reporting for finance teams and store leaders, supporting more timely decision-making on piloting.`,
  },
];
