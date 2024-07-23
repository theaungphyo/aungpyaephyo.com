import { MdxViewer } from '@/components/blog/mdx-viewer';
import { getBlogPosts } from '@/db/blog';
import { formatDate } from '@/lib/utils';
import moment from 'moment';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}
export async function generateMetadata({ params: { slug } }: Props) {
  return {
    title: getBlogPosts().find((b) => b.slug === slug)?.metadata.title,
  };
}
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
const Page = ({ params: { slug } }: Props) => {
  const blog = getBlogPosts().find((b) => b.slug === slug);
  if (!blog) notFound();
  return (
    <div>
      <header className='mb-6 pb-4'>
        <h1 className='mb-2 text-4xl font-extrabold'>{blog.metadata.title}</h1>
        <time className='text-sm opacity-70' dateTime='2021-05-03 22:00'>
          {formatDate(blog.metadata.publishedAt)}
        </time>
        <span className='text-sm opacity-70 before:px-1 before:content-["•"]'>
          {moment(blog.metadata.publishedAt, 'YYYYMMDD').fromNow()}
        </span>
      </header>
      <article className='tracking-wide prose relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-headings:font-semibold prose-img:rounded-lg'>
        <MdxViewer source={blog.content} />
      </article>
    </div>
  );
};

export default Page;
