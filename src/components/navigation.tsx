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
  if (pathname.includes('/project/')) {
    pathname = '/project';
  }
  let isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={cx(
        'relative flex align-middle  hover:text-neutral-800 dark:hover:text-neutral-200',
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
