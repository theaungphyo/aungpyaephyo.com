import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import moment from 'moment'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"]
});
export const generateMetaData = () => {
  return {
    metadataBase: new URL('https://aungpyaephyo.vercel.app'),
    title: {
      default: 'Aung Pyae Phyo',
      template: '%s | Aung Pyae Phyo',
    },
    description: 'Developer, writer, and creator.',
    openGraph: {
      title: 'Aung Pyae Phyo',
      description: 'Developer, writer, and creator.',
      url: 'https://aungpyaephyo.vercel.app',
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
    // verification: {
    //   google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    //   yandex: '14d2e73487fa6c71',
    // },
} as Metadata;
};
export const formatDate = (date : string)=> moment(date).format('ll')

export const blurDataImage = "data:image/webp;base64,UklGRvQCAABXRUJQVlA4WAoAAAAgAAAAOQAAOQAASUNDUMgBAAAAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADZWUDggBgEAAJALAJ0BKjoAOgA+bTCSRiQjIaEwFgkAgA2JQBWHOBs/zMoLISaWACRRJkfyBI4Lxdd/xd03yJpIGFTUqOQGP4xGt8WUYj9jng+v+2wjcftkQSQUlbocxVkWWLjln0a0IfovTZIAAP70062J9GjrH7g8QW5d3F+LQ8rXmHN3okrCe1/lyHE1N4J7O4QOlbIkk3Z32UNX6AwqF01B+DCejpwmvHfxAntOE/kxlbpt/hamu8MLs/k+nwpMp4g1BIvX+zQnii+y1Kl3Frd5sNA18WL4mwthjxSBIjPSiiMNEjmgFriUlUlYCmgWI0KnfUFVrqpG5rSDeBN77cUw84dmPu7Q3pMAAAA="