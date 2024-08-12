import { getViewsCount, increment } from '@/app/blog/_action';
import FeaturedImage from '@/components/blog/featured-image';
import { MdxViewer } from '@/components/blog/mdx-viewer';
import ShareLinks from '@/components/blog/share-link';
import ViewCounter from '@/components/blog/views-counter';
import { getBlogPosts } from '@/db/blog';
import { blurDataImage, formatDate } from '@/lib/utils';
import '@/styles/prose.css';
import moment from 'moment';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense, cache } from 'react';
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
  // let ogImage = image
  //   ? `https://aungpyaephyo.vercel.app${image}`
  //   : `https://aungpyaephyo.vercel.app/og?title=${title}`;

  let ogImage = `https://aungpyaephyo.vercel.app/og?title=${title}`;
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
  let posts = getBlogPosts();

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
      <FeaturedImage
        image={blog.metadata.image ?? '/og-bg.png'}
        lqpiImage={blurDataImage}
        title={blog.metadata.title}
      />
      <header className='mb-6 pb-4 font-mono'>
        <h1 className='mb-2 text-2xl lg:text-4xl font-extrabold'>
          {blog.metadata.title}
        </h1>
        <nav className='w-full flex items-center'>
          <time className='text-sm opacity-70' dateTime='2021-05-03 22:00'>
            {formatDate(blog.metadata.publishedAt)}
          </time>
          <span className='text-sm opacity-70 before:px-1 before:content-["•"]'>
            {moment(blog.metadata.publishedAt, 'YYYYMMDD').fromNow()}
          </span>
          <span className='text-sm opacity-70 before:px-1 before:content-["•"] flex items-center'>
            <Suspense fallback={<p className='px-2' />}>
              {/*<Views slug={slug} />*/}
            </Suspense>
          </span>
        </nav>
      </header>
      <article className='tracking-wider prose relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-headings:font-semibold prose-headings:my-9 prose-img:rounded-lg'>
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
let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  await incrementViews(slug);
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}
export default Page;
