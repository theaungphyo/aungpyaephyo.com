import { Metadata } from 'next';

export const generateMetaData = () => {
  const siteUrl = 'https://aungpyaephyo.com';
  const name = 'Aung Pyae Phyo';
  return {
    authors: [{ name: name, url: siteUrl }],
    category: 'developer',
    creator: name,
    description: 'Developer, writer, and creator.',
    icons: {
      apple: '/favicons/apple-touch-icon.png',
      icon: '/favicons/android-chrome.png',
      shortcut: '/favicons/favicon.ico',
    },
    keywords: [
      'Next.js',
      'React',
      'JavaScript',
      'TypeScript',
      'TailwindCSS',
      'Design',
      'Engineering',
      'Frontend',
      'Developer',
      'Software',
      'Engineer',
      name,
      'aungpyaephyo.com',
      'kyaukse',
    ],
    manifest: '/favicons/site.webmanifest',
    openGraph: {
      description: 'Developer, writer, and creator.',
      images: [
        {
          alt: name,
          height: 1080,
          url: `${siteUrl}/opengraph-image.png`,
          width: 1920,
        },
      ],
      locale: 'en-US',
      siteName: name,
      title: name,
      type: 'website',
      url: siteUrl,
    },
    publisher: name,
    metadataBase: new URL(siteUrl),
    title: {
      default: name,
      template: `%s | ${name}`,
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
      title: name,
      card: 'summary_large_image',
      site: '@typle_x',
    },
    verification: {
      google: '2V6fAI1xHZSNoMAr4vucaI7TjftUZGhAlcGWu0MHMDw',
    },
  } as Metadata;
};
