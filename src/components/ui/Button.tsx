import Link from 'next/link';
import type { ReactNode, CSSProperties } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    backgroundColor: 'var(--color-accent)',
    color: '#ffffff',
    padding: '8px 20px',
    borderRadius: '980px',
    fontSize: '17px',
    fontWeight: 400,
    lineHeight: 1,
    border: '1px solid transparent',
    boxShadow: '0 2px 16px rgba(41, 151, 255, 0.35), inset 0 1px 0 rgba(255,255,255,0.15)',
  },
  secondary: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-bg)',
    padding: '8px 20px',
    borderRadius: '980px',
    fontSize: '17px',
    fontWeight: 400,
    border: '1px solid transparent',
  },
  ghost: {
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(20px) saturate(180%)',
    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
    color: 'var(--color-primary)',
    padding: '8px 20px',
    borderRadius: '980px',
    fontSize: '17px',
    fontWeight: 400,
    border: '1px solid var(--glass-border)',
    boxShadow: 'inset 0 1px 0 var(--glass-highlight)',
  },
};

const baseClass =
  'inline-flex items-center justify-center transition-all duration-200 cursor-pointer';

export function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
  disabled,
}: ButtonProps) {
  const allClass = `${baseClass} hover:opacity-85 hover:scale-[1.02] active:scale-[0.98] ${className}`;
  const style = variantStyles[variant];

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return (
        <a href={href} className={allClass} style={style} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={allClass} style={style} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${allClass} disabled:opacity-50`}
      style={style}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
