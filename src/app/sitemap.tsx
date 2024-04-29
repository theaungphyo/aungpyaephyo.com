import { getBlogPosts } from '@/db/blog';

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://aungpyaephyo.vercel.app//blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ['', '/work', '/blog', '/project'].map((route) => ({
    url: `https://aungpyaephyo.vercel.app/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
