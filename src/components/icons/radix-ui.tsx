import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';
const RadixUI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='#ffff'
    style={{
      marginRight: 3,
    }}
    viewBox='4 0 17 25'
    width='1em'
    height='1em'
    {...props}
    className={cn('fill-black dark:fill-white', props.className)}
  >
    <path d='M12 25a8 8 0 1 1 0-16v16zM12 0H4v8h8V0zM17 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z' />
  </svg>
);
export default RadixUI;
