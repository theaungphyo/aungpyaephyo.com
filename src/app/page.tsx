import Blogs from '@/components/blog/blogs';
import Hero from '@/components/home/hero';
import Metadata from '@/components/home/metadata';
import Work from '@/components/home/work';
const Page = () => {
  return (
    <div>
      <Metadata />
      <Hero />
      <Blogs />
      <Work />
      {/*<ActivityBar />*/}
    </div>
  );
};

export default Page;
