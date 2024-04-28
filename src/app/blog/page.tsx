import Blogs from '@/components/blogs';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blog',
};
const Page = () => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">Read my blog</h1>
      <Blogs all />
    </div>
  );
};

export default Page;
