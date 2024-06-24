'use client';
import { cn } from '@/lib/utils';
import { LayoutGroup } from 'framer-motion';
import { SunIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
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
    <aside className='sticky top-0 z-50 w-full py-5 tracking-tight bg-white/50 backdrop-blur dark:bg-[rgb(5,5,5)]'>
      <div>
        <LayoutGroup>
          <nav
            className='max-w-screen-md mx-auto fade  flex scroll-pr-6 flex-row items-center justify-between px-0 pb-0 md:relative md:overflow-hidden'
            id='nav'
          >
            <Link href={'/'}>
              <Image
                src={'/logo.png'}
                alt={'logo'}
                width={35}
                height={35}
                className='object-contain'
                priority
              />
            </Link>
            <div className='flex flex-row space-x-0 items-center overflow-hidden'>
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

function NavItem({ path, name }: { path: string; name: string }) {
  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }
  let isActive = path === pathname;

  return (
    <Link
      key={path}
      href={path}
      className={cn(
        'flex flex-col tracking-wide justify-center items-end relative  align-middle transition-all px-4 py-1 text-sm',
        isActive && 'text-blue-500'
      )}
    >
      {name}
    </Link>
  );
}
export default Navigation;
