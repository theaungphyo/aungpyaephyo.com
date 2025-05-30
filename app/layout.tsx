import { metadata } from '@/lib/metadata';
import { cn } from '@/lib/utils';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeProvider } from 'next-themes';
import { JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
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
          'antialiased relative bg-background',
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="absolute inset-0 -z-20 pointer-events-none"></div>
          <ViewTransition>{children}</ViewTransition>
        </ThemeProvider>
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        />
        <Script id="" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              });
          `}
        </Script>
        <Script
          async
          src={'https://cloud.umami.is/script.js'}
          data-website-id={process.env.UMAMI_WEBSITE_ID}
        />
        <VercelAnalytics mode={'production'} />
        <SpeedInsights />
      </body>
    </html>
  );
}
