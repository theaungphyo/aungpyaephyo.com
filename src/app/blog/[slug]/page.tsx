import { getBlogPosts } from '@/db/blog';
import { MdxViewer } from '@/components/mdx-viewer';
import { formatDate } from '@/lib/utils';

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
  const blog = getBlogPosts().find((b) => b.slug === slug);
  if (!blog) return null;
  return (
    <div>
      <header className="mb-6 pb-4">
        <h1 className="mb-2 text-4xl font-extrabold">{blog.metadata.title}</h1>
        <time className="text-sm opacity-70" dateTime="2021-05-03 22:00">
          {formatDate(blog.metadata.publishedAt)}
        </time>
        {/*<span className="text-sm opacity-70 before:px-1 before:content-[&quot;•&quot;]">11 min read</span><span*/}
        {/*  className="text-sm opacity-70 before:px-1 before:content-[&quot;•&quot;]">5,142 views</span>*/}
      </header>
      <article className="prose prose-lg relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-headings:font-semibold prose-img:rounded-lg">
        <MdxViewer source={blog.content} />
      </article>
    </div>
  );
};

export default Page;
