import { Button } from '@/src/components/ui/Button';

export default function HomePage() {
  return (
    <section
      className="flex-1 flex flex-col items-center justify-center text-center px-6 py-32"
      style={{
        backgroundColor: 'var(--color-bg)',
        color: 'var(--color-primary)',
        minHeight: 'calc(100vh - var(--nav-height))',
      }}
    >
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-5 animate-fade-in-up"
        style={{ color: 'var(--color-secondary)' }}
      >
        Data Engineer
      </p>

      <h1
        className="font-semibold mb-6 max-w-3xl animate-fade-in-up-delay-1"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
          lineHeight: 1.07,
          letterSpacing: '-0.28px',
          color: 'var(--color-primary)',
        }}
      >
        Damon Lin
      </h1>

      <p
        className="max-w-lg mb-10 animate-fade-in-up-delay-2"
        style={{
          fontSize: '1.0625rem',
          lineHeight: 1.47,
          letterSpacing: '-0.374px',
          color: 'var(--color-secondary)',
        }}
      >
        Building elegant, high-performance data solutions. Passionate about clean
        code, great user experiences, and solving meaningful problems.
      </p>

      <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up-delay-3">
        <Button href="/portfolio">View Portfolio</Button>
        <Button href="/contact" variant="ghost">
          Contact Me
        </Button>
      </div>
    </section>
  );
}
