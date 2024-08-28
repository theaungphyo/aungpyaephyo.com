import { PreloadResources } from '@/app/preload';
import Blogs from '@/components/blog/blogs';
import ActivityBar from '@/components/home/activity-bar';
import Hero from '@/components/home/hero';
import Metadata from '@/components/home/metadata';
import Work from '@/components/home/work';
const Page = () => {
  return (
    <div>
      <PreloadResources />
      <Metadata />
      <Hero />
      <Blogs />
      <Work />
      <ActivityBar />
    </div>
  );
};

export default Page;
