import { getBlogPosts } from '@/db/blog';

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://aungpyaephyo.vercel.app//blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/work', '/blog', '/project'].map((route) => ({
    url: `https://aungpyaephyo.vercel.app/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
