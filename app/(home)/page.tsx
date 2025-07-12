import BlogHome from '@/components/home/blog.home';
import HeroHome from '@/components/home/hero.home';
import { NameTransition } from '@/components/name';

const Page = () => {
  return (
    <section className="border-x border-x-neutral-400/30 max-w-fit mx-auto">
      <div>
        <div className="border-b border-b-neutral-400/30 px-5">
          <div className="container">
            <NameTransition />
          </div>
          <HeroHome />
        </div>
        <div className="h-[25px]" />
        <div className="px-5 border-y border-y-neutral-400/30 relative">
          <div className="h-full absolute left-0 inset-y-0 w-5 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
          <div className="h-full absolute right-0 inset-y-0 w-5 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" />
          <div className="border-x border-x-neutral-400/30 border-y-0">
            <BlogHome />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
