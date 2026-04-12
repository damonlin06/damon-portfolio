import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { contact } from '@/src/data/contact';

export const metadata: Metadata = {
  title: 'Contact — Damon Lin',
};

function EmailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

const iconMap: Record<string, ReactNode> = {
  LinkedIn: <LinkedInIcon />,
  GitHub: <GitHubIcon />,
};

export default function ContactPage() {
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
          Contact
        </h1>
        <p className="mt-3" style={{ color: 'var(--color-secondary)', fontSize: '1.0625rem' }}>
          Get in touch — I&apos;d love to hear from you.
        </p>
      </header>

      <div className="flex flex-col gap-4">
        {/* Email */}
        <a
          href={contact.email.href}
          className="flex items-center gap-4 p-6 rounded-2xl transition-transform hover:-translate-y-0.5"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            textDecoration: 'none',
          }}
        >
          <span style={{ color: 'var(--color-accent)' }}>
            <EmailIcon />
          </span>
          <div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-secondary)', marginBottom: '2px' }}>
              {contact.email.label}
            </p>
            <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: 'var(--color-primary)' }}>
              {contact.email.display}
            </p>
          </div>
        </a>

        {/* Social links */}
        {contact.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label} (opens in new tab)`}
            className="flex items-center gap-4 p-6 rounded-2xl transition-transform hover:-translate-y-0.5"
            style={{
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              textDecoration: 'none',
            }}
          >
            <span style={{ color: 'var(--color-accent)' }}>{iconMap[link.label]}</span>
            <div>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-secondary)', marginBottom: '2px' }}>
                {link.label}
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 500, color: 'var(--color-primary)' }}>
                {link.display}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
