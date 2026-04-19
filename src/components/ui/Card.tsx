import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/src/data/projects';
import { Tag } from './Tag';

interface CardProps {
  project: Project;
}

export function Card({ project }: CardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="glass-card group block rounded-2xl overflow-hidden"
      style={{ textDecoration: 'none' }}
    >
      {/* 16:9 thumbnail */}
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        {project.thumbnail ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${project.thumbnail}`}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ backgroundColor: 'var(--glass-bg)' }}
          >
            <span className="text-xs" style={{ color: 'var(--color-secondary)' }}>
              No image
            </span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3
          className="font-semibold leading-tight mb-2 transition-colors group-hover:text-[var(--color-accent)]"
          style={{
            fontSize: '1.3125rem',
            color: 'var(--color-primary)',
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
          }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed line-clamp-2 mb-4"
          style={{ color: 'var(--color-secondary)' }}
        >
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

