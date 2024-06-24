'use client';
import { cn } from '@/lib/utils';
import { LayoutGroup } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { navigation_links } from '../../app.config';
const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  loading: () => (
    <Image
      src={'/logo.png'}
      alt={'logo'}
      width={35}
      height={35}
      className='object-contain'
      priority
    />
  ),
  ssr: false,
});

function Navigation() {
  return (
    <aside className='sticky top-0 z-50 w-full py-5 tracking-tight bg-white backdrop-blur dark:bg-black'>
      <div>
        <LayoutGroup>
          <nav
            className='max-w-screen-md mx-auto fade  flex scroll-pr-6 flex-row items-center justify-between px-0 pb-0 md:relative md:overflow-hidden'
            id='nav'
          >
            <ThemeToggle />
            <div className='flex flex-row space-x-0 items-center overflow-hidden'>
              <Suspense fallback={null}>
                {navigation_links.map(({ title, href }) => {
                  return <NavItem key={title} path={href} name={title} />;
                })}
              </Suspense>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

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
      className={cn(
        'flex flex-col tracking-wide justify-center items-end relative  align-middle transition-all px-4 py-1 text-sm after:inline-block after:h-[1px] after:w-[13px] after:bg-black after:translate-y-[7px]  before:inline-block before:h-[1px] before:w-[13px] before:bg-black before:translate-y-[-7px] dark:before:bg-white dark:after:bg-white  before:self-start before:transition-transform after:transition-transform before:duration-500 after:duration-500',
        isActive && 'after:translate-y-0 before:translate-y-0'
      )}
    >
      {name}
    </Link>
  );
}
export default Navigation;
