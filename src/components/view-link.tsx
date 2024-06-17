'use client';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string;
  publishedAt: string;
  basePath: string;
};

const ViewLink = ({ slug, title, publishedAt, basePath }: Props) => {
  return (
    <li className='relative -mx-1.5'>
      <Link
        href={`/${basePath}/${slug}`}
        title={title}
        className='block h-full w-full rounded-md p-1.5 text-sm outline-none transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 focus:ring-1 focus:ring-neutral-300 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900 dark:focus:ring-neutral-500'
      >
        <article className='flex flex-col-reverse sm:flex-row sm:items-baseline sm:gap-5'>
          <time
            className='text-nowrap opacity-60 sm:w-24'
            dateTime={formatDate(publishedAt)}
            aria-label={`Written ${publishedAt}`}
          >
            {formatDate(publishedAt)}
          </time>

          <div>
            <header className='text-sm font-medium'>{title}</header>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default ViewLink;
