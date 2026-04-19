'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ThemeToggle } from '@/src/components/ThemeToggle';

const navLinks = [
  { href: '/resume', label: 'Resume' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/skills', label: 'Skills' },
  { href: '/contact', label: 'Contact' },
] as const;

export function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, opacity: 0, transitionDuration: '0ms' });
  const containerRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLLIElement>>(new Map());
  const isFirstRender = useRef(true);

  // Slide the glass indicator to the active nav link
  useEffect(() => {
    const activeLink = navLinks.find(
      ({ href }) => pathname === href || pathname.startsWith(href + '/')
    );
    if (activeLink && containerRef.current) {
      const li = linkRefs.current.get(activeLink.href);
      if (li && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const liRect = li.getBoundingClientRect();
        const duration = isFirstRender.current ? '0ms' : '300ms';
        isFirstRender.current = false;
        setIndicatorStyle({
          width: liRect.width,
          left: liRect.left - containerRect.left,
          opacity: 1,
          transitionDuration: duration,
        });
      }
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
    }
  }, [pathname]);

  return (
    <header
      className="fixed inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
      style={{ top: 'var(--nav-top)' }}
    >
      {/* Glass pill nav */}
      <nav
        className="glass-nav flex items-center gap-2 px-3 animate-nav-slide-in pointer-events-auto"
        style={{ height: 'var(--nav-height)' }}
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-sm px-3 py-1.5 rounded-full transition-opacity hover:opacity-80"
          style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
        >
          Damon
        </Link>

        {/* Divider */}
        <div
          className="hidden md:block w-px h-4 mx-1 shrink-0"
          style={{ backgroundColor: 'var(--glass-border)' }}
        />

        {/* Desktop nav links with sliding indicator */}
        <div ref={containerRef} className="relative hidden md:flex items-center">
          {/* Sliding glass indicator */}
          <span
            aria-hidden="true"
            className="glass-indicator absolute top-1/2 -translate-y-1/2 h-[34px] rounded-full pointer-events-none"
            style={{
              width: indicatorStyle.width,
              left: indicatorStyle.left,
              opacity: indicatorStyle.opacity,
              transition: `width ${indicatorStyle.transitionDuration} cubic-bezier(0.34,1.56,0.64,1), left ${indicatorStyle.transitionDuration} cubic-bezier(0.34,1.56,0.64,1), opacity 0.2s ease`,
            }}
          />

          <ul className="relative z-10 flex items-center list-none m-0 p-0">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/');
              return (
                <li
                  key={href}
                  ref={(el) => {
                    if (el) linkRefs.current.set(href, el);
                    else linkRefs.current.delete(href);
                  }}
                >
                  <Link
                    href={href}
                    aria-current={isActive ? 'page' : undefined}
                    className="text-sm px-4 py-2 rounded-full block transition-colors duration-200"
                    style={{
                      color: isActive ? 'var(--color-primary)' : 'var(--color-secondary)',
                      fontWeight: isActive ? 500 : 400,
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

        {/* Divider */}
        <div
          className="hidden md:block w-px h-4 mx-1 shrink-0"
          style={{ backgroundColor: 'var(--glass-border)' }}
        />

        {/* Right controls */}
        <div className="flex items-center gap-1">
          <ThemeToggle />

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            style={{ color: 'var(--color-primary)' }}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — positioned below the pill */}
      {menuOpen && (
        <div
          className="glass absolute left-4 right-4 rounded-2xl p-4 pointer-events-auto md:hidden"
          style={{ top: 'calc(var(--nav-height) + var(--nav-top) + 8px)' }}
        >
          <ul className="flex flex-col gap-1 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(href + '/');
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className="text-sm block px-4 py-3 rounded-xl transition-colors"
                    style={{
                      color: isActive ? 'var(--color-accent)' : 'var(--color-primary)',
                      fontWeight: isActive ? 500 : 400,
                      textDecoration: 'none',
                      backgroundColor: isActive ? 'var(--glass-bg-hover)' : 'transparent',
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

