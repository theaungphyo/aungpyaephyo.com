'use client';
import { LayoutGroup, motion } from 'framer-motion';
import { SunIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { navigation_links } from '../../app.config';
const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  loading: () => (
    <button className='flex size-10 items-center justify-center rounded-full opacity-50 outline-none transition-opacity hover:opacity-100'>
      <SunIcon />
    </button>
  ),
  ssr: false,
});

function Navigation() {
  return (
    <aside className='z-50 w-full py-5 tracking-tight'>
      <div>
        <LayoutGroup>
          <nav
            className='fade relative flex scroll-pr-6 flex-row items-start justify-between px-0 pb-0 md:relative md:overflow-auto'
            id='nav'
          >
            <Link href={'/'}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='36'
                height='36'
                viewBox='0 0 375 375'
                version='1.2'
              >
                <defs>
                  <clipPath id='clip1'>
                    <path d='M 103.636719 64.171875 L 271.476562 64.171875 L 271.476562 310 L 103.636719 310 Z M 103.636719 64.171875 '></path>
                  </clipPath>
                </defs>
                <g id='surface1'>
                  <g clipPath='url(#clip1)' clipRule='nonzero'>
                    <path
                      fill='currentColor'
                      d='M 211.375 151.808594 C 203.050781 149.433594 194.765625 155.722656 194.765625 164.390625 L 194.765625 297.785156 C 194.765625 305.234375 201.695312 310.808594 208.941406 309.09375 C 244.675781 300.671875 271.355469 268.492188 271.355469 230.195312 C 271.355469 193.117188 246.363281 161.785156 211.375 151.808594 Z M 180.15625 144.734375 L 180.15625 297.785156 C 180.15625 305.234375 173.230469 310.808594 165.980469 309.09375 C 130.246094 300.675781 103.566406 268.492188 103.566406 230.195312 L 103.566406 74.296875 C 103.566406 68.449219 108.902344 64.046875 114.640625 65.164062 C 151.925781 72.410156 180.15625 105.335938 180.15625 144.734375 Z M 180.15625 144.734375 '
                    ></path>
                  </g>
                </g>
              </svg>
            </Link>
            <div className='flex flex-row space-x-0 pr-4'>
              <Suspense fallback={null}>
                {navigation_links.map(({ title, href }) => {
                  return <NavItem key={title} path={href} name={title} />;
                })}
              </Suspense>
            </div>
            <ThemeToggle />
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

let cx = (...classes: any[]) => classes.filter(Boolean).join(' ');

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname() || '/';
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }
  let isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={cx(
        'relative flex align-middle transition-all hover:text-neutral-800 dark:hover:text-neutral-200',
        {
          'text-neutral-500': !isActive,
        }
      )}
    >
      <span className=' px-4 py-1 text-sm capitalize'>{name}</span>
      {path === pathname && (
        <motion.div
          className='absolute inset-0 z-[-1]  rounded-full  bg-neutral-200 bg-gradient-to-r from-transparent to-neutral-100 dark:bg-neutral-600 dark:bg-gradient-to-r dark:to-neutral-900'
          layoutId='sidebar'
          transition={{
            type: 'spring',
            stiffness: 350,
            damping: 30,
          }}
        />
      )}
    </Link>
  );
}
export default Navigation;
