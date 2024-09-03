import { PreloadResources } from '@/app/preload';
import Blogs from '@/components/blog/blogs';
import Hero from '@/components/home/hero';
import Metadata from '@/components/home/metadata';
import Work from '@/components/home/work';
const Page = () => {
  return (
    <div>
      <PreloadResources />
      <Metadata />
      <Hero />
      <Work />
      <Blogs />
    </div>
  );
};

export default Page;
