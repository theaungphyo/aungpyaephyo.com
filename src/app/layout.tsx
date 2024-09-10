import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/google-analytics';
import Navigation from '@/components/navigation';
import Provider from '@/components/provider';
import { cn } from '@/lib/utils';
import '@/styles/app.css';
import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
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
  keywords: [
    'aungpyaephyo',
    'aungpyaephyo.com',
    'aung pyae phyo',
    'aung phyo',
    'aung pyae phyo blog',
    'aung pyae phyo tech',
    'aung pyae phyo kyaukse',
    'aung pyae phyo kyaukse blog',
    'aung pyae phyo kyaukse tech',
    'software development',
    'web development',
    'design',
    'blog',
    'tech',
    'kyaukse',
    'nextjs',
    'react',
    'nestjs',
    'software engineering',
    'software architecture',
    'javascript',
    'typescript',
    'nodejs',
    'mongodb',
    'graphql',
    'aws',
  ],
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

const Jetbrains_mono = localFont({
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
      className={cn(Jetbrains_mono.className)}
    >
      <body
        suppressHydrationWarning
        className={cn(
          'bg-white/50 text-black antialiased dark:bg-[#111010]  dark:text-white  tracking-tight'
        )}
      >
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
        <GoogleAnalytics />
        <VercelAnalytics mode={'production'} />
        <SpeedInsights />
      </body>
    </html>
  );
}
