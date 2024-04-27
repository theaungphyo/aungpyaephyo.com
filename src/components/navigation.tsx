'use client';
import { navigation_links } from '@/configs/app.config';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { SunIcon } from 'lucide-react';
const ThemeToggle = dynamic(() => import('@/components/theme-toggle'), {
  loading: () => (
    <button className="flex size-10 items-center justify-center rounded-full opacity-50 outline-none transition-opacity hover:opacity-100">
      <SunIcon />
    </button>
  ),
  ssr: false,
});
const Navigation = () => {
  const path = usePathname();
  return (
    <div className="flex w-full items-center  justify-between py-5">
      <div className="flex items-center gap-x-5">
        {navigation_links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={cn(
              path === link.href &&
                'flex flex-col items-center gap-y-2 text-gray-400 dark:text-slate-300',
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <ThemeToggle />
    </div>
  );
};

export default Navigation;
