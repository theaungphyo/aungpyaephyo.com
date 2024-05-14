import Blogs from '@/components/blogs';
import PageTitle from '@/components/page-title';
import { getBlogPosts } from '@/db/blog';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Blog',
};
const Page = () => {
  const blogs = getBlogPosts();
  return (
    <div>
      <PageTitle
        title={'Read my blog'}
        description={`${blogs.length} posts so far. Stay tuned for more!`}
      />
      <Blogs all />
    </div>
  );
};

export default Page;
