import { cn } from '@/lib/utils'
import { BaseProps } from '@/types/base'
import Navigation from '@/components/navigation'

const Layout = ({children}:BaseProps) => {
  return (
    <main className={cn("flex flex-col justify-center items-center min-h-screen w-full max-w-screen-md mx-auto px-4 py-7")}>
      <Navigation/>
      <section className="w-full flex-1 pt-8">
        {children}
      </section>
    </main>
  )
}

export default Layout