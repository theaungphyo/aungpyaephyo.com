import { cn } from '@/lib/utils';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { unstable_ViewTransition as ViewTransition } from 'react';

export function NameTransition({
  className,
  isNavigate,
}: {
  className?: string;
  isNavigate?: boolean;
}) {
  return (
    <ViewTransition>
      <div
        className={cn(
          'w-full flex justify-between items-center  pt-9 ',
          className,
        )}
      >
        <Link
          href="/"
          className={cn(
            'group w-full flex items-center gap-2 font-medium cursor-pointer',
          )}
        >
          {isNavigate && (
            <ArrowLeft className="size-3 group-hover:-translate-x-2 transition-transform duration-500" />
          )}
          <span className="sr-only">Aung Pyae Phyo</span>
          <span
            aria-hidden="true"
            className="block overflow-hidden group relative"
          >
            <span className="inline-block transition-all duration-300 ease-in-out group-hover:-translate-y-full whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
              {'Aung Pyae Phyo'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block"
                  style={{ transitionDelay: `${index * 25}ms` }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </span>
            <span className="inline-block absolute left-0 top-0 transition-all duration-300 ease-in-out translate-y-full group-hover:translate-y-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
              {'Aung Pyae'.split('').map((letter, index) => (
                <span
                  key={index}
                  className="inline-block"
                  style={{ transitionDelay: `${index * 25}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </span>
        </Link>
      </div>
    </ViewTransition>
  );
}
