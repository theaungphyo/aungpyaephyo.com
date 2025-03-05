import { siteConfig } from '@/config/site.config';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // Allows flexible page-specific titles
  },
  description:
    'Aung Pyae Phyo - Developer, engineer, and creator specializing in modern web technologies.',
  keywords: [
    'Aung Pyae Phyo',
    'aungpyaephyo',
    'aungpyaephyo.com',
    'Aung Phyo',
    'Aung Pyae',
    'Kyaukse tech',
    'Aung Pyae Phyo git',
    'Kyaukse engineer',
    'frontend developer',
    'backend developer',
    'Kyaukse software engineer',
    'Aung Pyae Phyo',
  ],
  openGraph: {
    title: siteConfig.name,
    description:
      'Developer, engineer, and creator specializing in modern web technologies.',
    url: siteConfig.url,
    siteName: siteConfig.name,
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
    card: 'summary_large_image',
    title: siteConfig.name,
    description:
      'Developer, engineer, and creator specializing in modern web technologies.',
  },
  verification: {
    google: '2V6fAI1xHZSNoMAr4vucaI7TjftUZGhAlcGWu0MHMDw', // Google verification meta tag value
    yandex: 'YOUR_YANDAX_VERIFICATION_CODE', // Add Yandax verification if required
  },
};
