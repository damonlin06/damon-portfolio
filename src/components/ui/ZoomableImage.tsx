'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ZoomableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export function ZoomableImage({ src, alt, width, height }: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  return (
    <>
      <div
        className="relative w-full rounded-2xl overflow-hidden my-6 cursor-zoom-in"
        style={{ lineHeight: 0 }}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') setIsOpen(true);
        }}
        aria-label={`Zoom image: ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto"
          style={{ borderRadius: '1rem', display: 'block' }}
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0,0,0,0.88)', animation: 'zoomOverlayIn 0.2s ease' }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`Zoomed view: ${alt}`}
        >
          <button
            className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 rounded-full text-white text-xl leading-none transition-opacity hover:opacity-75"
            style={{ background: 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer' }}
            onClick={close}
            aria-label="Close zoom"
          >
            ✕
          </button>
          <div
            style={{ animation: 'zoomImageIn 0.25s ease', maxWidth: '90vw', maxHeight: '90vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1400}
              height={900}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                width: 'auto',
                height: 'auto',
                borderRadius: '0.75rem',
                display: 'block',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
