import ActivityBar from '@/components/activity-bar';
import Blogs from '@/components/blogs';
import Hero from '@/components/hero';
import Work from '@/components/work';
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
