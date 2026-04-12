import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/src/components/NavBar";
import { Footer } from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Damon Lin — Portfolio",
  description: "Software engineer portfolio of Damon Lin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* Inline script: set data-theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem('theme'),d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',t||(d?'dark':'light'));}catch(e){}`,
          }}
        />
        {/* Skip to main content — keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
          style={{ backgroundColor: 'var(--color-accent)', color: '#fff' }}
        >
          Skip to main content
        </a>
        <NavBar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

