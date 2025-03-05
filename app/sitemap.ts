import { siteConfig } from '@/config/site.config';

export default async function sitemap() {
  const routes = siteConfig.pages.map((route) => ({
    url: `${siteConfig.url}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  return [...routes];
}
