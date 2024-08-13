import { clsx, type ClassValue } from 'clsx';
import moment from 'moment';
import { Metadata } from 'next';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateMetaData = () => {
  const siteUrl = 'https://aungpyaephyo.com';
  return {
    authors: [{ name: 'Aung Pyae Phyo', url: siteUrl }],
    category: 'developer',
    creator: 'Aung Pyae Phyo',
    description: 'Developer, writer, and creator.',
    icons: {
      apple: '/apple-touch-icon.png',
      icon: '/android-chrome.png',
      shortcut: '/favicon.ico',
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
      'Aung Pyae Phyo',
      'Aung Pyae Phyo',
      'aungpyaephyo.com',
      'kyaukse',
    ],
    manifest: '/favicons/site.webmanifest',
    openGraph: {
      description: 'Developer, writer, and creator.',
      images: [
        {
          alt: 'Aung Pyae Phyo',
          height: 1080,
          url: `${siteUrl}/og-bg.png`,
          width: 1920,
        },
      ],
      locale: 'en-US',
      siteName: 'Aung Pyae Phyo',
      title: 'Aung Pyae Phyo',
      type: 'website',
      url: `${siteUrl}`,
    },
    publisher: 'Aung Pyae Phyo',
    metadataBase: new URL(`${siteUrl}`),
    title: {
      default: 'Aung Pyae Phyo',
      template: '%s | Aung Pyae Phyo',
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
      site: '@typle_x',
    },
    verification: {
      google: '2V6fAI1xHZSNoMAr4vucaI7TjftUZGhAlcGWu0MHMDw',
      // yandex: '14d2e73487fa6c71',
    },
  } as Metadata;
};
export const formatDate = (date: string) => moment(date).format('DD MMM YYYY');

export const blurDataImage =
  'data:image/webp;base64,UklGRvQCAABXRUJQVlA4WAoAAAAgAAAAOQAAOQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBgEAAJALAJ0BKjoAOgA+bTCSRiQjIaEwFgkAgA2JQBWHOBs/zMoLISaWACRRJkfyBI4Lxdd/xd03yJpIGFTUqOQGP4xGt8WUYj9jng+v+2wjcftkQSQUlbocxVkWWLjln0a0IfovTZIAAP70062J9GjrH7g8QW5d3F+LQ8rXmHN3okrCe1/lyHE1N4J7O4QOlbIkk3Z32UNX6AwqF01B+DCejpwmvHfxAntOE/kxlbpt/hamu8MLs/k+nwpMp4g1BIvX+zQnii+y1Kl3Frd5sNA18WL4mwthjxSBIjPSiiMNEjmgFriUlUlYCmgWI0KnfUFVrqpG5rSDeBN77cUw84dmPu7Q3pMAAAA=';
