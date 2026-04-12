import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/src/data/projects';
import { Button } from '@/src/components/ui/Button';
import { Tag } from '@/src/components/ui/Tag';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project ? `${project.title} — Damon Lin` : 'Project — Damon Lin',
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const formattedDate = new Date(project.date + '-01').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });

  // Simple markdown-like renderer for the description field
  const renderDescription = (text: string) =>
    text.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return (
          <h2
            key={i}
            style={{
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            }}
          >
            {block.replace('## ', '')}
          </h2>
        );
      }
      if (block.startsWith('- ')) {
        const items = block.split('\n').filter((l) => l.startsWith('- '));
        return (
          <ul key={i} className="list-disc list-outside pl-5 flex flex-col gap-1 mb-4">
            {items.map((item, j) => (
              <li key={j} style={{ color: 'var(--color-primary)', fontSize: '1.0625rem', lineHeight: 1.47 }}>
                {item.replace('- ', '')}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p
          key={i}
          className="mb-4"
          style={{ color: 'var(--color-primary)', fontSize: '1.0625rem', lineHeight: 1.6 }}
        >
          {block}
        </p>
      );
    });

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Back link */}
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-1 text-sm mb-10 transition-opacity hover:opacity-75"
        style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
      >
        <span aria-hidden="true">←</span> Back to Portfolio
      </Link>

      {/* Hero image */}
      {project.thumbnail && (
        <div
          className="relative w-full rounded-2xl overflow-hidden mb-10"
          style={{ paddingTop: '56.25%' }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Header */}
      <header className="mb-8">
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
          {project.title}
        </h1>
        <p
          className="mt-2"
          style={{ color: 'var(--color-secondary)', fontSize: '0.875rem' }}
        >
          {formattedDate}
        </p>
      </header>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {/* Description */}
      <div className="mb-12">{renderDescription(project.description)}</div>

      {/* Links */}
      {(project.liveUrl ?? project.repoUrl) && (
        <div className="flex flex-wrap gap-4">
          {project.liveUrl && (
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              View Live
            </Button>
          )}
          {project.repoUrl && (
            <Button
              href={project.repoUrl}
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
