import BlogHome from '@/components/home/blog.home';
import HeroHome from '@/components/home/hero.home';
import WorkHome from '@/components/home/work.home';
import { NameTransition } from '@/components/name';

const Page = () => {
  return (
    <section className="container-wrapper pb-5">
      <div className="container">
        <NameTransition />
      </div>
      <HeroHome />
      <BlogHome />
      <WorkHome />
    </section>
  );
};

export default Page;
