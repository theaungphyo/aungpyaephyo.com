"use client"
import { navigation_links } from '@/configs/app.config'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { SunIcon } from 'lucide-react'
const ThemeToggle = dynamic(
  () => import('@/components/theme-toggle'),
  {
    loading: () => <button className="size-10 flex items-center justify-center rounded-full outline-none transition-opacity hover:opacity-100 opacity-50">
      <SunIcon/>
    </button>,
    ssr: false,
  }
);
const Navigation = () => {
  const path = usePathname()
  return (
    <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-x-5">
          {
            navigation_links.map(link=>(
              <Link href={link.href} key={link.href}
                    className={cn(path === link.href && "flex flex-col items-center gap-y-2 text-gray-400 dark:text-slate-300")}>
                {link.title}
              </Link>
            ))
          }
        </div>
        <ThemeToggle/>
    </div>
  )
}

export default Navigation