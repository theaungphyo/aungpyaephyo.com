import Blogs from '@/components/blog/blogs';
import ActivityBar from '@/components/home/activity-bar';
import Hero from '@/components/home/hero';
import Work from '@/components/home/work';
const Page = () => {
  return (
    <div>
      <Hero />
      <Blogs />
      <Work />
      <ActivityBar />
    </div>
  );
};

export default Page;
