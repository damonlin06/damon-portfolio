'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from '@/src/components/ThemeToggle';

const navLinks = [
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/case-study', label: 'Case Study' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
] as const;

export function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors"
      style={{
        height: 'var(--nav-height)',
        backgroundColor: 'var(--nav-bg-glass)',
        borderColor: 'var(--color-border)',
      }}
    >
      {/* Full-width wrapper for edge-to-edge logo and toggle */}
      <div className="relative h-full flex items-center px-6" role="navigation" aria-label="Primary navigation">
        {/* Logo — flush left */}
        <Link
          href="/"
          className="font-bold text-base tracking-tight transition-opacity hover:opacity-80"
          style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
        >
          Damon
        </Link>

        {/* Desktop nav links — absolutely centered in the full header */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + '/');
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className="text-base font-semibold transition-colors hover:opacity-100"
                  style={{
                    color: isActive ? 'var(--color-accent)' : 'var(--color-primary)',
                    opacity: isActive ? 1 : 0.8,
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right controls — flush right via ml-auto */}
        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            style={{ color: 'var(--color-primary)' }}
          >
            {menuOpen ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-bg)',
          }}
        >
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/');
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className="text-sm block transition-opacity"
                    style={{
                      color: isActive ? 'var(--color-accent)' : 'var(--color-primary)',
                      fontWeight: isActive ? 600 : 400,
                      textDecoration: 'none',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
