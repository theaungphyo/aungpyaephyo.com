import { metadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import { ThemeProvider } from 'next-themes';
import { JetBrains_Mono } from 'next/font/google';
import { unstable_ViewTransition as ViewTransition } from 'react';
import './globals.css';

const Jetbrains_font = JetBrains_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--jetbrains-mono',
});

export async function generateMetadata() {
  return metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          Jetbrains_font.className,
          'h-full antialiased relative bg-background',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="absolute inset-0 grid-pattern -z-20 pointer-events-none"></div>
          <ViewTransition>{children}</ViewTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
