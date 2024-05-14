'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';

type SectionProps = {
  heading: string;
  headingAlignment?: 'right' | 'left';
  children: ReactNode;
  invert?: boolean;
};

export default function Section({
  heading,
  headingAlignment,
  children,
  invert = false,
}: SectionProps) {
  return (
    <section className='col-reverse flex flex-col gap-2 md:flex-row md:gap-9'>
      <h2
        className={clsx(
          'shrink-0 md:w-32',
          headingAlignment === 'right' && 'md:text-right',
          invert
            ? 'text-primary font-medium'
            : 'text-[#656565] dark:text-neutral-300'
        )}
      >
        {heading}
      </h2>
      {children}
    </section>
  );
}
