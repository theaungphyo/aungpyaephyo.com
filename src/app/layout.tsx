import Footer from '@/components/footer';
import Navigation from '@/components/navigation';
import Provider from '@/components/provider';
import { cn } from '@/lib/utils';
import '@/styles/app.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import { appConfig } from '../../app.config';

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.url),
  title: {
    default: appConfig.name,
    template: `%s | ${appConfig.name}`,
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: appConfig.name,
    description: 'Developer, writer, and creator.',
    url: appConfig.url,
    siteName: appConfig.name,
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
    title: appConfig.name,
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
          'bg-white/50 text-neutral-800 antialiased dark:bg-[rgb(5,5,5)]  dark:text-neutral-100 tracking-tight'
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
