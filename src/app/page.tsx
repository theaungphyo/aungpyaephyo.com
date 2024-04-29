import ActivityBar from '@/components/activity-bar';
import Blogs from '@/components/blogs';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Work from '@/components/work';
const Page = () => {
  return (
    <div>
      <Hero />
      <Blogs />
      <Work />
      <Projects />
      <ActivityBar />
    </div>
  );
};

export default Page;
