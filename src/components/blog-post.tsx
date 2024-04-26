"use client"
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

type Props = {
  slug: string,
  title: string,
  publishedAt : string,
}
interface Coordinate {
  x: number
  y: number
}
const BlogPost = ({slug,title,publishedAt}:Props) => {
  return (
    <li className="relative -mx-1.5"
    >
    <Link
      href={`/blog/${slug}`}
      title={title}
      className="block p-1.5 h-full w-full rounded-md transition-all focus-within:bg-neutral-100 hover:bg-neutral-100 dark:focus-within:bg-neutral-900 dark:hover:bg-neutral-900 outline-none focus:ring-1 focus:ring-neutral-300 dark:focus:ring-neutral-500 text-sm"
    >
      <article className="flex flex-col-reverse sm:flex-row sm:items-baseline sm:gap-3">
        <time
          className="opacity-60 sm:w-24 text-nowrap"
          dateTime={formatDate(publishedAt)}
          aria-label={`Written ${publishedAt}`}
        >
          {formatDate(publishedAt)}
        </time>

        <div className="grid flex-1 grid-flow-col items-baseline justify-between gap-10 md:items-center">
          <header className="font-medium text-sm">{title}</header>
        </div>
      </article>
    </Link>
  </li>)
}

export default BlogPost