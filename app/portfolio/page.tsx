import type { Metadata } from 'next';
import { projects } from '@/src/data/projects';
import { Card } from '@/src/components/ui/Card';

export const metadata: Metadata = {
  title: 'Portfolio — Damon Lin',
};

export default function PortfolioPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
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
          Portfolio
        </h1>
        <p className="mt-3" style={{ color: 'var(--color-secondary)', fontSize: '1.0625rem' }}>
          A selection of projects I&apos;ve built.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
