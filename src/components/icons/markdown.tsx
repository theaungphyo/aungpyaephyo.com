import { cn } from '@/lib/utils';
import type { SVGProps } from 'react';
const Markdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox='0 0 208 128'
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width='1em'
    height='1em'
    {...props}
    className={cn('stroke-black dark:stroke-white', props.className)}
  >
    <path
      fill='none'
      strokeWidth={10}
      d='M15 5h178a10 10 0 0 1 10 10v98a10 10 0 0 1-10 10H15a10 10 0 0 1-10-10V15A10 10 0 0 1 15 5z'
    />
    <path
      className='fill-black dark:fill-white'
      d='M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39H30zm125 0-30-33h20V30h20v35h20l-30 33z'
    />
  </svg>
);
export default Markdown;
