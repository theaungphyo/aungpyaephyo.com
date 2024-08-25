import { getBlogPosts } from '@/db/blog';
import { appConfig } from '../../app.config';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${appConfig.url}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/about', '/blog', '/guestbook', '/project'].map(
    (route) => ({
      url: `${appConfig.url}/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogs];
}
