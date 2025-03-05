import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  slug: string;
  title: string;
  publishedAt: string;
};

const PostCard = async ({ slug, title, publishedAt }: Props) => {
  return (
    <li className="relative">
      <Link
        href={slug}
        className={cn(
          'cursor-pointer block h-full w-full rounded-md  text-sm outline-none transition-all py-2',
        )}
      >
        <article className="w-full flex flex-wrap lg:flex-nowrap lg:items-baseline lg:gap-5">
          <time
            className="order-3 lg:order-1 text-nowrap opacity-60 lg:w-24 flex justify-start items-center lg:before:hidden"
            dateTime={new Date(publishedAt).toLocaleDateString()}
            aria-label={`Written ${publishedAt}`}
          >
            {new Date(publishedAt).toLocaleDateString()}
          </time>
          <header className="order-1 lg:order-2 w-full lg:w-auto text-sm font-medium lg:flex-1 mb-1 lg:mb-0">
            {title}
          </header>
        </article>
      </Link>
    </li>
  );
};

export default PostCard;
