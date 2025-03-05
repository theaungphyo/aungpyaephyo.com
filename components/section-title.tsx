import { cn } from '@/lib/utils';
import Link from 'next/link';

type Props = {
  title: string;
  href?: string;
  viewAll?: boolean;
};

const SectionTitle = (props: Props) => {
  if (props.href) {
    return (
      <Link
        className={cn(
          props.viewAll ? 'flex' : 'inline-flex',
          'group my-6 cursor-pointer items-center justify-between gap-3',
        )}
        href={props.href}
      >
        <h2 className="text-lg font-bold underline-offset-4 group-hover:underline">
          {props.title}
        </h2>

        {props.viewAll && (
          <span className="cursor-pointer rounded-lg border bg-white px-2 py-[3px] text-center text-xs dark:border-neutral-700 dark:bg-neutral-900">
            View all →
          </span>
        )}
      </Link>
    );
  }

  return <h2 className="my-6 block text-lg font-bold">{props.title}</h2>;
};

export default SectionTitle;
