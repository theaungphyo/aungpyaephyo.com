import { getViewsCount, increment } from '@/app/blog/_action';
import FeaturedImage from '@/components/blog/featured-image';
import { MdxViewer } from '@/components/blog/mdx-viewer';
import ShareLinks from '@/components/blog/share-link';
import ViewCounter from '@/components/blog/views-counter';
import { getBlogPosts } from '@/db/blog';
import { blurDataImage, formatDate } from '@/lib/utils';
import '@/styles/prose.css';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense, cache } from 'react';
import { appConfig } from '../../../../app.config';
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
    ? `${appConfig.url}/${image}`
    : `${appConfig.url}/og?title=${title}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${appConfig.url}/blog/${post.slug}`,
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
  const canonicalUrl = `${appConfig.url}/blog/${slug}`;

  if (!blog) notFound();
  return (
    <section>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: blog.metadata.title,
            datePublished: blog.metadata.publishedAt,
            dateModified: blog.metadata.publishedAt,
            description: blog.metadata.description,
            image: blog.metadata.image
              ? `${appConfig.url}${blog.metadata.image}`
              : `${appConfig.url}/og?title=${blog.metadata.title}`,
            url: `${appConfig.url}/blog/${blog.slug}`,
            author: {
              '@type': 'Person',
              name: appConfig.name,
            },
          }),
        }}
      />
      {blog.metadata.image && (
        <FeaturedImage image={blog.metadata.image} lqpiImage={blurDataImage} />
      )}
      <header className='mb-6 pb-4 font-mono'>
        <h1 className='mb-2 text-2xl tracking-tighter font-extrabold'>
          {blog.metadata.title}
        </h1>
        <nav>
          <time className='text-sm opacity-70' dateTime='2021-05-03 22:00'>
            {formatDate(blog.metadata.publishedAt)}
          </time>
          <span className='text-sm opacity-70 before:px-1 before:content-["•"]'>
            <Suspense fallback={<p className='px-2' />}>
              <Views slug={slug} />
            </Suspense>
          </span>
        </nav>
      </header>
      <article className='prose relative max-w-full dark:prose-invert prose-headings:scroll-mt-16 prose-headings:font-extrabold prose-headings:my-9 prose-img:rounded-lg  prose-quoteless prose-stone'>
        <MdxViewer source={blog.content} />
      </article>
      <ShareLinks
        canonicalUrl={canonicalUrl}
        slug={slug}
        title={blog.metadata.title}
      />
    </section>
  );
};
const incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  incrementViews(slug).then();
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}

export default Page;
