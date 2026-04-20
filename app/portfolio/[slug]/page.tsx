import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/src/data/projects';
import { Tag } from '@/src/components/ui/Tag';
import { ZoomableImage } from '@/src/components/ui/ZoomableImage';

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
  const idx = projects.findIndex((p) => p.slug === slug);
  const project = projects[idx];

  if (!project) notFound();

  const prevProject = idx > 0 ? projects[idx - 1] : null;
  const nextProject = idx < projects.length - 1 ? projects[idx + 1] : null;

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
      if (block.startsWith('C: ')) {
        // Parse consecutive C: / S: pairs into challenge+solution cards
        const lines = block.split('\n').filter(Boolean);
        const pairs: { challenge: string; solution: string }[] = [];
        for (let k = 0; k < lines.length; k++) {
          if (lines[k].startsWith('C: ')) {
            const challenge = lines[k].replace(/^C: /, '');
            const solution = lines[k + 1]?.startsWith('S: ')
              ? lines[++k].replace(/^S: /, '')
              : '';
            pairs.push({ challenge, solution });
          }
        }
        return (
          <div key={i} className="flex flex-col gap-4 mb-6">
            {pairs.map((pair, j) => (
              <div
                key={j}
                style={{
                  borderLeft: '2px solid var(--color-border, #e0e0e0)',
                  paddingLeft: '1rem',
                }}
              >
                <div className="mb-1">
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.6875rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      color: 'var(--color-secondary)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    Challenge
                  </span>
                  <p style={{ color: 'var(--color-primary)', fontSize: '1.0625rem', lineHeight: 1.5, margin: 0 }}>
                    {pair.challenge}
                  </p>
                </div>
                {pair.solution && (
                  <div style={{ marginTop: '0.5rem' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: '0.6875rem',
                        fontWeight: 600,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent)',
                        marginBottom: '0.2rem',
                      }}
                    >
                      Solution
                    </span>
                    <p style={{ color: 'var(--color-primary)', fontSize: '1.0625rem', lineHeight: 1.5, margin: 0 }}>
                      {pair.solution}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
      if (block.startsWith('![')) {
        const match = block.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
        if (match) {
          const imgSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${match[2]}`;
          return (
            <ZoomableImage key={i} src={imgSrc} alt={match[1]} width={1400} height={600} />
          );
        }
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
    <>
      {/* ── Side navigation arrows ── */}
      {prevProject && (
        <Link
          href={`/portfolio/${prevProject.slug}`}
          aria-label={`Previous project: ${prevProject.title}`}
          className="glass-arrow"
          style={{
            position: 'fixed',
            left: 'max(0.75rem, calc(45% - 26.5rem))',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.75rem',
            height: '2.75rem',
            borderRadius: '50%',
            textDecoration: 'none',
            transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--color-primary)', transition: 'transform 0.2s ease' }}
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
      )}

      {nextProject && (
        <Link
          href={`/portfolio/${nextProject.slug}`}
          aria-label={`Next project: ${nextProject.title}`}
          className="glass-arrow"
          style={{
            position: 'fixed',
            right: 'max(0.75rem, calc(45% - 26.5rem))',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2.75rem',
            height: '2.75rem',
            borderRadius: '50%',
            textDecoration: 'none',
            transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--color-primary)', transition: 'transform 0.2s ease' }}
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      )}

    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Back link */}
      <Link
        href="/portfolio"
        className="glass-back-link inline-flex items-center gap-2 text-sm mb-10"
        style={{ textDecoration: 'none', color: 'var(--color-primary)' }}
      >
        <span aria-hidden="true">←</span> Back to Portfolio
      </Link>

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
      </header>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {/* Description */}
      <div className="mb-12">{renderDescription(project.description)}</div>
    </article>
    </>
  );
}
