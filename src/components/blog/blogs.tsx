import BlogPost from '@/components/blog/blog-post';
import SectionTitle from '@/components/section-title';
import { getBlogPosts } from '@/db/blog';
export const sort = (a: string, b: string) => {
  if (new Date(a) > new Date(b)) {
    return -1;
  }
  return 1;
};
const Blogs = ({ all = false }: { all?: boolean }) => {
  const data = getBlogPosts()
    .sort((a, b) => sort(a.metadata.publishedAt, b.metadata.publishedAt))
    .filter((b) => b.metadata.mode !== 'draft');
  const blogs = data.filter((b, i) => i < 8);

  return (
    <div className='pb-5'>
      <SectionTitle title={'Writings'} href={'/blog'} viewAll />
      <ul className='space-y-1.5 group/card--1123'>
        {blogs.map((blog) => (
          <BlogPost
            key={blog.slug}
            slug={blog.slug}
            title={blog.metadata.title}
            publishedAt={blog.metadata.publishedAt}
          />
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
