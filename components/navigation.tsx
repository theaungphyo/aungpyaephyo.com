'use client';

import LogoIcon from '@/components/logo-icon';
import NavigationMenu from '@/components/menu.navigation';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site.config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';

const MenuItems = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <Button
        className="group md:hidden"
        variant="outline"
        size="icon"
        onClick={() => setOpen((prevState) => !prevState)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
      >
        <svg
          className="pointer-events-none"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12L20 12"
            className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
          />
          <path
            d="M4 12H20"
            className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
          />
          <path
            d="M4 12H20"
            className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
          />
        </svg>
      </Button>
      <NavigationMenu
        className={cn('z-50 absolute right-0 md:static hidden md:block')}
      >
        <ul className="w-[150px] md:w-auto flex flex-col md:flex-row flex-wrap md:justify-end gap-5">
          {siteConfig.pages.map((link, i) => (
            <li key={i} className="w-full md:w-auto my-1 mx-2 shrink-0">
              <Link
                href={link.url}
                className="text-sm text-primary underline-offset-4 capitalize  font-medium flex flex-col tracking-wide justify-center items-end relative  align-middle transition-all opacity-80 hover:opacity-100"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </NavigationMenu>
      {open && (
        <NavigationMenu
          className={cn('z-50 absolute right-0 md:static block md:hidden')}
        >
          <ul className="w-[150px] md:w-auto flex flex-col md:flex-row flex-wrap md:justify-end gap-5">
            {siteConfig.pages.map((link, i) => (
              <li
                onClick={() => setOpen((prevState) => !prevState)}
                key={i}
                className="w-full md:w-auto my-1 mx-2 shrink-0"
              >
                <Link
                  href={link.url}
                  className="w-full text-primary font-semibold underline-offset-4 capitalize   tracking-wide  items-end relative  align-middle transition-all text-sm opacity-80 hover:opacity-10"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </NavigationMenu>
      )}
    </div>
  );
};

const Navigation = ({ className }: { className?: string }) => {
  return (
    <header className="sticky bg-background w-full top-0 z-50 shadow-xs">
      <nav
        className={cn(
          'w-full flex justify-between items-center py-4 ',
          className,
        )}
      >
        <LogoIcon />
        <MenuItems />
      </nav>
    </header>
  );
};

export default Navigation;
