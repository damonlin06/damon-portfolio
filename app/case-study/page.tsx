import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies } from '@/src/data/caseStudies';
import { Tag } from '@/src/components/ui/Tag';
import { ZoomableImage } from '@/src/components/ui/ZoomableImage';

export const metadata: Metadata = {
  title: 'Case Study — Damon Lin',
};

// Simple markdown-like renderer (mirrors the project detail page)
function renderDescription(text: string) {
  return text.split('\n\n').map((block, i) => {
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
    if (block.startsWith('![')) {
      const match = block.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      if (match) {
        const imgSrc = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${match[2]}`;
        return (
          <ZoomableImage key={i} src={imgSrc} alt={match[1]} width={1400} height={600} />
        );
      }
    }
    if (block.startsWith('> ')) {
      const content = block.replace(/^> /, '');
      // Render **bold** markers within the blockquote
      const parts = content.split(/\*\*([^*]+)\*\*/g);
      return (
        <blockquote
          key={i}
          className="mb-4 pl-4 py-3 pr-4 rounded-lg"
          style={{
            borderLeft: '3px solid var(--color-accent)',
            backgroundColor: 'var(--color-surface)',
            color: 'var(--color-secondary)',
            fontSize: '0.9375rem',
            lineHeight: 1.6,
          }}
        >
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} style={{ color: 'var(--color-primary)' }}>{part}</strong> : part
          )}
        </blockquote>
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
}

export default function CaseStudyPage() {
  const caseStudy = caseStudies[0];

  return (
    <article className="max-w-3xl mx-auto px-6 py-20">
      {/* Header */}
      <header className="mb-4">
        <p
          className="text-sm font-medium mb-2"
          style={{ color: 'var(--color-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}
        >
          Case Study
        </p>
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
          {caseStudy.title}
        </h1>
        <p className="mt-3 text-sm" style={{ color: 'var(--color-secondary)' }}>
          Related project:{' '}
          <Link
            href={`/portfolio/${caseStudy.projectSlug}`}
            style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
            className="hover:underline"
          >
            {caseStudy.projectRef}
          </Link>
        </p>
      </header>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-10">
        {caseStudy.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      {/* Description */}
      <div className="mb-12">{renderDescription(caseStudy.description)}</div>
    </article>
  );
}
