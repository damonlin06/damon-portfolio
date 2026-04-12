import type { Metadata } from 'next';
import { skills } from '@/src/data/skills';
import { Tag } from '@/src/components/ui/Tag';

export const metadata: Metadata = {
  title: 'Skills — Damon Lin',
};

export default function SkillsPage() {
  const proficient = skills.filter((s) => s.level === 'proficient');
  const familiar = skills.filter((s) => s.level === 'familiar');

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-14">
        <h1
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 600,
            lineHeight: 1.1,
            color: 'var(--color-primary)',
          }}
        >
          Skills
        </h1>
        <p className="mt-3" style={{ color: 'var(--color-secondary)', fontSize: '1.0625rem' }}>
          Technologies and tools I work with.
        </p>
      </header>

      {/* Proficient */}
      <section className="mb-14">
        <h2
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-secondary)',
            marginBottom: '1.5rem',
          }}
        >
          Proficient
        </h2>
        <div className="flex flex-col gap-8">
          {proficient.map(({ category, skills: items }) => (
            <div key={category}>
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Familiar */}
      <section>
        <h2
          style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--color-secondary)',
            marginBottom: '1.5rem',
          }}
        >
          Familiar
        </h2>
        <div className="flex flex-col gap-8">
          {familiar.map(({ category, skills: items }) => (
            <div key={category}>
              <h3
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'var(--color-primary)',
                  marginBottom: '0.75rem',
                }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
