'use client';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';
import { LayoutGroup } from 'framer-motion';
import { Menu, SunIcon } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { mob_navigation_links, navigation_links } from '../../app.config';
const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  loading: () => (
    <button className='flex size-10 items-center justify-center rounded-full opacity-80 outline-none transition-opacity hover:opacity-100'>
      <SunIcon />
    </button>
  ),
  ssr: false,
});

function Navigation() {
  let path = usePathname() === '/';

  return (
    <aside
      className={cn(
        'px-4 sticky top-0 z-50 w-full py-5 tracking-tight dark:bg-[rgb(5,5,5)] border-b-[1px] border-solid border-neutral-100 bg-white/75  dark:border-neutral-900 dark:bg-black/75 sm:py-3 backdrop-blur-xl',
        path ? ' mb-9' : 'mb-6'
      )}
    >
      <div>
        <LayoutGroup>
          <nav
            className='max-w-screen-md mx-auto fade  flex flex-row items-center justify-between md:relative md:overflow-hidden'
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
              <NavList className='md:flex hidden' />
              <ThemeToggle />
              <Drawer>
                <DrawerTrigger asChild>
                  <button className='flex size-10 items-center justify-center rounded-full opacity-80 outline-none transition-opacity hover:opacity-100 md:hidden'>
                    <Menu />
                  </button>
                </DrawerTrigger>
                <DrawerContent className='h-[90dvh]  block md:hidden space-y-5'>
                  <Suspense fallback={null}>
                    {mob_navigation_links.map(({ title, href }) => {
                      return (
                        <DrawerClose asChild key={href}>
                          <Link
                            href={href}
                            className={cn(
                              'capitalize  font-medium flex flex-col tracking-wide justify-center relative  align-middle transition-all px-4 py-1 text-sm opacity-80 hover:opacity-100'
                            )}
                          >
                            {title}
                          </Link>
                        </DrawerClose>
                      );
                    })}
                  </Suspense>
                </DrawerContent>
              </Drawer>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}

function NavList({ className }: { className?: string }) {
  return (
    <div className={cn(className)}>
      <Suspense fallback={null}>
        {navigation_links.map(({ title, href }) => {
          return <NavItem key={title} path={href} name={title} />;
        })}
      </Suspense>
    </div>
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
        'capitalize  font-medium flex flex-col tracking-wide justify-center items-end relative  align-middle transition-all px-4 py-1 text-sm opacity-80 hover:opacity-100',
        isActive && 'text-blue-500 opacity-100'
      )}
    >
      {name}
    </Link>
  );
}
export default Navigation;
