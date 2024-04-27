import Image from 'next/image';
import Link from 'next/link';
import { blurDataImage } from '@/lib/utils';
import Blogs from '@/components/blogs';
import Projects from '@/components/projects';
import Work from '@/components/work';
import Hero from '@/components/hero';
const Page = () => {
  return (
    <div>
      <Hero />
      <Blogs />
      <Work />
      <Projects />
    </div>
  );
};

export default Page;
