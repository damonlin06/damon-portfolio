export interface SkillCategory {
  category: string;
  level: 'proficient' | 'familiar';
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Programming Languages & Frameworks',
    level: 'proficient',
    skills: ['Python', 'SQL', 'Apache Spark (PySpark, Spark SQL)', 'dbt'],
  },
  {
    category: 'Data Warehousing & Databases',
    level: 'proficient',
    skills: ['Redshift', 'BigQuery', 'Databricks (Unity Catalog, Delta Lake)', 'PostgreSQL', 'MySQL'],
  },
  {
    category: 'Cloud Platforms',
    level: 'proficient',
    skills: ['AWS (Redshift, EMR, S3, Glue, Athena, ECR, MWAA, Lambda)', 'GCP (BigQuery, Cloud Storage, Datastore)'],
  },
  {
    category: 'DevOps & Orchestration',
    level: 'proficient',
    skills: ['CI/CD (GitHub Actions, Jenkins)', 'Git', 'Docker', 'Apache Airflow'],
  },
  {
    category: 'Data Quality & Governance',
    level: 'proficient',
    skills: ['Great Expectations', 'dbt tests'],
  },
];
