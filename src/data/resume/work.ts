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
    company: 'Decathlon',
    role: 'Data Engineer',
    startDate: 'Jan 2022',
    endDate: 'Present',
    location: 'Hong Kong',
    bullets: [
      'Finance Performance dbt Pipeline \& Tableau Dashboard: Built and maintained Tableau dashboards for daily KPI reporting across Hong Kong and Taiwan teams, translating business requirements into clear, actionable visualizations. Supported the dashboards with a scalable dbt-on-Databricks Medallion architecture that centralized multi-channel financial data, reduced fragmentation, and eliminated significant manual reconciliation work.',
      'BigQuery to Databricks Migration Automation: Architected and scaled an automated migration factory to convert 100+ Taiwan production pipelines from BigQuery (GCP) to Databricks dbt (AWS) across finance, retail, and supply chain domains. Engineered an Anchor-Based Slicing framework to preserve referential integrity across complex multi-table JOIN graphs, enabling deterministic data sampling and eliminating terabyte-scale data movement. Built an AI-powered migration system leveraging Gemini to parse legacy SQL, generate optimized dbt models, and self-heal through validation feedback loops, improving migration speed and scalability.',
      'Membership Program Data Pipeline: Architected a hybrid-cloud pipeline across AWS and GCP, processing daily transaction data from Redshift and S3 using PySpark on EMR to compute membership points, with results persisted to GCP Datastore for downstream applications. Achieved a 98% pipeline success rate and maintained over 80% unit and functional test coverage. Implemented scheduling, orchestration, and monitoring with Apache Airflow.',
      'Infrastructure & Pipeline Migration: Led end-to-end migrations to modernize legacy data infrastructure, migrating R pipelines to PySpark and dbt, and transitioning orchestration from Jenkins to Apache Airflow and Databricks, improving system reliability, scalability, and observability.',
      'Leadership & APAC Collaboration: Mentored junior Data Engineers in APAC regions, conducted technical interviews for data engineering candidates, and shared best practices to improve code modularity and pipeline performance.',
    ],
  },
  {
    company: 'PCCW Media Limited (Now TV)',
    role: 'Junior Data Engineer',
    startDate: 'Oct 2018',
    endDate: 'Dec 2021',
    location: 'Hong Kong',
    bullets: [
      'Data Pipelines (AWS / GCP): Designed and implemented scalable data ingestion pipelines integrating on-premises server logs with cloud-based data sources across AWS and GCP, enabling business intelligence capabilities for a major OTT media platform.',
      'Metadata Similarity Search API: Developed a Python-based REST API for metadata similarity search using Levenshtein distance, improving search accuracy and efficiency.',
    ],
  },
];
