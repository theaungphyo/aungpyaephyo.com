import Navigation from '@/components/navigation';
import Provider from '@/components/provider';
import { cn, generateMetaData } from '@/lib/utils';
import '@/styles/app.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { Metadata } from 'next';
import { ReactNode } from 'react';
export const metadata: Metadata = generateMetaData();

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={cn(GeistSans.variable, GeistMono.variable)}
    >
      <body
        suppressHydrationWarning
        className={cn(
          'bg-white/50 text-neutral-800 antialiased dark:bg-[rgb(5,5,5)] dark:text-neutral-200 transition-colors'
        )}
      >
        <SpeedInsights />
        <Analytics mode={'production'} />
        <Provider>
          <main
            className={cn(
              'mx-auto flex min-h-screen w-full max-w-screen-md flex-col items-center justify-center px-4 pb-9'
            )}
          >
            <Navigation />
            <section className='flex w-full flex-1 flex-col '>
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  );
}
