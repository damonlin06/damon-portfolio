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
    padding: '8px 15px',
    borderRadius: '8px',
    fontSize: '17px',
    fontWeight: 400,
    lineHeight: 1,
    border: '1px solid transparent',
  },
  secondary: {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-bg)',
    padding: '8px 15px',
    borderRadius: '8px',
    fontSize: '17px',
    fontWeight: 400,
    border: '1px solid transparent',
  },
  ghost: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    padding: '8px 15px',
    borderRadius: '980px',
    fontSize: '17px',
    fontWeight: 400,
    border: '1px solid rgba(255,255,255,0.6)',
  },
};

const baseClass =
  'inline-flex items-center justify-center transition-opacity cursor-pointer';

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
  const allClass = `${baseClass} hover:opacity-85 ${className}`;
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
