import '@/styles/app.css'
import { cn, generateMetaData, montserrat } from '@/lib/utils'
import Provider from '@/components/provider'
import { Metadata } from 'next'


export const metadata : Metadata = generateMetaData()

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={cn(montserrat.className, 'bg-white text-neutral-800 dark:bg-[rgb(5,5,5)] dark:text-neutral-200')}>
    <Provider>
      {children}
    </Provider>
      </body>
    </html>
  )
}
