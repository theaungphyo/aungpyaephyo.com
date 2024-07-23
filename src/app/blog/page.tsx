import Blogs from '@/components/blog/blogs';
import PageTitle from '@/components/page-title';
import { getBlogPosts } from '@/db/blog';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
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
