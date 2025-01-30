import Footer from '@/components/footer';
import GoogleAnalytics from '@/components/google-analytics';
import Navigation from '@/components/navigation';
import Provider from '@/components/provider';
import UmamiAnalytics from '@/components/umami-analytics';
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
    template: `%s | ${appConfig.name}`, // Allows flexible page-specific titles
  },
  description:
    'Aung Pyae Phyo - Developer, engineer, and creator specializing in modern web technologies.',
  keywords: [
    'Aung Pyae Phyo',
    'aungpyaephyo',
    'aungpyaephyo.com',
    'Aung Phyo',
    'developer portfolio',
    'engineer blog',
    'Kyaukse developer',
    'software engineering',
    'web development',
    'tech enthusiast',
    'full-stack developer',
    'Next.js',
    'React.js',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'GraphQL',
    'AWS',
    'software architecture',
    'modern technologies',
    'Kyaukse tech',
    'Aung Pyae Phyo blog',
    'Kyaukse engineer',
    'frontend developer',
    'backend developer',
    'cloud computing',
    'web performance optimization',
    'web design',
    'UI/UX design',
    'developer blog',
    'programming tutorials',
    'JavaScript frameworks',
    'TypeScript best practices',
    'serverless architecture',
    'responsive web design',
    'progressive web apps',
    'developer resources',
    'Kyaukse software engineer',
    'SEO for developers',
    'technology trends',
    'coding tutorials',
    'personal branding for developers',
    'open source contributions',
    'technical writing',
    'Aung Pyae Phyo',
    'full-stack developer',
    'web developer portfolio',
    'software engineer',
    'Next.js expert',
    'React.js developer',
    'TypeScript best practices',
    'Node.js developer',
    'GraphQL API',
    'MongoDB optimization',
    'AWS cloud solutions',
    'web performance optimization',
    'SEO for developers',
    'UI/UX design principles',
    'frontend best practices',
    'backend architecture',
    'Kyaukse software engineer',
    'open-source contributor',
    'progressive web apps (PWA)',
    'serverless architecture',
    'developer tutorials',
    'technical blog',
    'coding best practices',
  ],
  openGraph: {
    title: appConfig.name,
    description:
      'Developer, engineer, and creator specializing in modern web technologies.',
    url: appConfig.url,
    siteName: appConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${appConfig.url}/og-image.png`, // Replace with the actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Aung Pyae Phyo - Developer & Engineer',
      },
    ],
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
    card: 'summary_large_image',
    title: appConfig.name,
    description:
      'Developer, engineer, and creator specializing in modern web technologies.',
    images: [`${appConfig.url}/twitter-card.png`], // Replace with actual Twitter card image URL
  },
  verification: {
    google: '2V6fAI1xHZSNoMAr4vucaI7TjftUZGhAlcGWu0MHMDw', // Google verification meta tag value
    yandex: 'YOUR_YANDAX_VERIFICATION_CODE', // Add Yandax verification if required
  },
  alternates: {
    canonical: appConfig.url, // Canonical URL for SEO consistency
    languages: {
      'en-US': appConfig.url,
      'my-MM': `${appConfig.url}/mm`, // Example for additional language (Myanmar)
    },
  },
};

const Jetbrains_mono = localFont({
  src: './mono.woff2',
  display: 'swap',
  variable: '--font-jetbrains-mono',
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
        <UmamiAnalytics />
        <VercelAnalytics mode={'production'} />
        <SpeedInsights />
      </body>
    </html>
  );
}
