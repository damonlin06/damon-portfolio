import type { Metadata } from 'next';
import { work } from '@/src/data/resume/work';
import { education } from '@/src/data/resume/education';

export const metadata: Metadata = {
  title: 'Resume — Damon Lin',
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Page header */}
      <header className="mb-16">
        <h1
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--color-primary)',
          }}
        >
          Damon Lin
        </h1>
        <p className="mt-2" style={{ color: 'var(--color-secondary)', fontSize: '1.0625rem' }}>
          Software Engineer
        </p>
      </header>

      {/* Work Experience */}
      <section className="mb-16">
        <h2
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.14,
            color: 'var(--color-primary)',
            marginBottom: '2rem',
          }}
        >
          Work Experience
        </h2>

        <div className="flex flex-col gap-10">
          {work.map((entry, i) => (
            <article
              key={i}
              className="pl-6 border-l-2"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <div>
                  <h3
                    style={{
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                    }}
                  >
                    {entry.role}
                  </h3>
                  <p style={{ color: 'var(--color-secondary)', fontSize: '0.9375rem' }}>
                    {entry.company} · {entry.location}
                  </p>
                </div>
                <span
                  style={{
                    color: 'var(--color-secondary)',
                    fontSize: '0.875rem',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {entry.startDate} – {entry.endDate}
                </span>
              </div>

              <ul className="mt-3 flex flex-col gap-2 list-disc list-outside pl-4">
                {entry.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    style={{
                      color: 'var(--color-primary)',
                      fontSize: '1.0625rem',
                      lineHeight: 1.47,
                    }}
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '1.75rem',
            fontWeight: 600,
            lineHeight: 1.14,
            color: 'var(--color-primary)',
            marginBottom: '2rem',
          }}
        >
          Education
        </h2>

        <div className="flex flex-col gap-8">
          {education.map((entry, i) => (
            <article
              key={i}
              className="pl-6 border-l-2"
              style={{ borderColor: 'var(--color-border)' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3
                    style={{
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      color: 'var(--color-primary)',
                    }}
                  >
                    {entry.degree} in {entry.field}
                  </h3>
                  <p style={{ color: 'var(--color-secondary)', fontSize: '0.9375rem' }}>
                    {entry.institution}
                  </p>
                </div>
                <span style={{ color: 'var(--color-secondary)', fontSize: '0.875rem' }}>
                  Class of {entry.graduationYear}
                </span>
              </div>
              {entry.gpa && (
                <p
                  className="mt-1"
                  style={{ color: 'var(--color-secondary)', fontSize: '0.875rem' }}
                >
                  GPA: {entry.gpa}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
