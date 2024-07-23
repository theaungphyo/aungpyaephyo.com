import FeaturedImage from '@/components/blog/featured-image';
import { MdxViewer } from '@/components/blog/mdx-viewer';
import ShareLinks from '@/components/blog/share-link';
import { getBlogPosts } from '@/db/blog';
import { blurDataImage, formatDate } from '@/lib/utils';
import moment from 'moment';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}
export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let { title, publishedAt: publishedTime, description, image } = post.metadata;
  let ogImage = image
    ? `https://aungpyaephyo.vercel.app${image}`
    : `https://aungpyaephyo.vercel.app/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `https://aungpyaephyo.vercel.app/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
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
  const canonicalUrl = `https://aungpyaephyo.vercel.app/blog/${slug}`;

  if (!blog) notFound();
  return (
    <div>
      {blog.metadata.image && (
        <FeaturedImage
          image={blog.metadata.image}
          lqpiImage={blurDataImage}
          title={blog.metadata.title}
        />
      )}
      <header className='mb-6 pb-4'>
        <h1 className='mb-2 text-4xl font-extrabold'>{blog.metadata.title}</h1>
        <time className='text-sm opacity-70' dateTime='2021-05-03 22:00'>
          {formatDate(blog.metadata.publishedAt)}
        </time>
        <span className='text-sm opacity-70 before:px-1 before:content-["•"]'>
          {moment(blog.metadata.publishedAt, 'YYYYMMDD').fromNow()}
        </span>
      </header>
      <article className='tracking-wide prose prose-slate relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-headings:font-semibold prose-img:rounded-lg prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl '>
        <MdxViewer source={blog.content} />
      </article>
      <ShareLinks
        canonicalUrl={canonicalUrl}
        slug={slug}
        title={blog.metadata.title}
      />
    </div>
  );
};

export default Page;
