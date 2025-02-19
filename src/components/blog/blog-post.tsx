import { getViewsCount } from '@/app/blog/_action';
import ViewCounter from '@/components/blog/views-counter';
import { cn, formatDate } from '@/lib/utils';
import Link from 'next/link';
import { Suspense } from 'react';

type Props = {
  slug: string;
  title: string;
  publishedAt: string;
  minimum?: boolean;
};
const Views = async ({ slug }: { slug: string }) => {
  let views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
};

const BlogPost = async ({ slug, title, publishedAt }: Props) => {
  return (
    <li className='relative -mx-1.5 lg:hover:!opacity-100 lg:group-hover/card:opacity-50 transition-opacity'>
      <Link
        href={`/blog/${slug}`}
        className={cn(
          'block h-full w-full rounded-md  text-sm outline-none transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-200 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus:ring-neutral-500',
          'p-3.5'
        )}
      >
        <article className='w-full flex flex-wrap lg:flex-nowrap lg:items-baseline lg:gap-5'>
          <time
            className='order-3 lg:order-1 text-nowrap opacity-60 lg:w-24 before:px-1 before:content-["•"] flex justify-center items-center lg:before:hidden'
            dateTime={formatDate(publishedAt)}
            aria-label={`Written ${publishedAt}`}
          >
            {formatDate(publishedAt)}
          </time>
          <header className='order-1 lg:order-2 w-full lg:w-auto text-sm font-medium lg:flex-1 mb-1 lg:mb-0'>
            {title}
          </header>
          <Suspense
            fallback={
              <span className='order-2 lg:order-3 before:pr-1 before:content-["•"] flex justify-center items-center lg:before:hidden'>
                0 view
              </span>
            }
          >
            <p className='order-2 lg:order-3 before:pr-1 before:content-["•"] flex justify-center items-center lg:before:hidden'>
              <Views slug={slug} />
            </p>
          </Suspense>
        </article>
      </Link>
    </li>
  );
};

export default BlogPost;
