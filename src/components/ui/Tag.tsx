interface TagProps {
  children: React.ReactNode;
}

export function Tag({ children }: TagProps) {
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-medium leading-tight"
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-primary)',
        border: '1px solid var(--color-border)',
      }}
    >
      {children}
    </span>
  );
}
