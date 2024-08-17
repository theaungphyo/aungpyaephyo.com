import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import Provider from '@/components/provider';
import { cn } from '@/lib/utils';
import '@/styles/app.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aungpyaephyo.com'),
  title: {
    default: 'Aung Pyae Phyo',
    template: '%s | Aung Pyae Phyo',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Aung Pyae Phyo',
    description: 'Developer, writer, and creator.',
    url: 'https://www.aungpyaephyo.com',
    siteName: 'Aung Pyae Phyo',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Aung Pyae Phyo',
    card: 'summary_large_image',
  },
  verification: {
    google: '2V6fAI1xHZSNoMAr4vucaI7TjftUZGhAlcGWu0MHMDw',
  },
};

const jetbrains_mono = localFont({
  src: './mono.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(jetbrains_mono.className)}
    >
      <body
        suppressHydrationWarning
        className={cn(
          'bg-white/50 text-neutral-800 antialiased dark:bg-[#0D0D0D] dark:text-neutral-200 tracking-tight'
        )}
      >
        <SpeedInsights />
        <Analytics mode={'production'} />
        <Provider>
          <main
            className={cn(
              'flex min-h-dvh w-full  flex-col items-center justify-center '
            )}
          >
            <Navigation />
            <section className='flex w-full flex-1 flex-col max-w-screen-md mx-auto px-4'>
              {children}
            </section>
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
