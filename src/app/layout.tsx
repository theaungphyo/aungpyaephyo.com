import '@/styles/app.css'
import { cn, generateMetaData, montserrat } from '@/lib/utils'
import Provider from '@/components/provider'
import { Metadata } from 'next'
import Navigation from '@/components/navigation'


export const metadata : Metadata = generateMetaData()

export default function RootLayout({ children}: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(montserrat.className, 'bg-white text-neutral-800 dark:bg-[rgb(5,5,5)] dark:text-neutral-200')}>
        <Provider>
          <main className={cn("flex flex-col justify-center items-center min-h-screen w-full max-w-screen-md mx-auto px-4 py-7")}>
            <Navigation/>
            <section className="w-full flex flex-col flex-1 pt-8">
              {children}
            </section>
          </main>
        </Provider>
      </body>
    </html>
  )
}
