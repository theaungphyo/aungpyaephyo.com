import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    host: 'https://aungpyaephyo.vercel.app',
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: 'https://aungpyaephyo.vercel.app/sitemap.xml',
  };
}
