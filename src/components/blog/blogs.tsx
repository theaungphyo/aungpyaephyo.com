import BlogPost from '@/components/blog/blog-post';
import GroupTitle from '@/components/group-title';
import SectionTitle from '@/components/section-title';
import { getBlogPosts } from '@/db/blog';
import groupBy from '@/lib/group-by';
import { Fragment } from 'react';
const sort = (a: string, b: string) => {
  if (new Date(a) > new Date(b)) {
    return -1;
  }
  return 1;
};
const Blogs = ({ all = false }: { all?: boolean }) => {
  const data = getBlogPosts().sort((a, b) =>
    sort(a.metadata.publishedAt, b.metadata.publishedAt)
  );
  const blogs = data.filter((b, i) => i < 8);
  const groupBlogs = groupBy(data, (blog) =>
    blog.metadata.publishedAt.substring(0, 4)
  );
  return (
    <div className='pb-5'>
      {!all && <SectionTitle title={'Writings'} href={'/blog'} viewAll />}
      {!all && (
        <ul className='space-y-3 sm:space-y-1'>
          {blogs.map((blog) => (
            <BlogPost
              key={blog.slug}
              slug={blog.slug}
              title={blog.metadata.title}
              publishedAt={blog.metadata.publishedAt}
            />
          ))}
        </ul>
      )}
      {all &&
        Object.entries(groupBlogs)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, posts]) => (
            <Fragment key={year}>
              <GroupTitle name={year} />
              <ul className='space-y-3 sm:space-y-1 mb-5'>
                {posts.map((blog) => (
                  <BlogPost
                    minimum={false}
                    key={blog.slug}
                    slug={blog.slug}
                    title={blog.metadata.title}
                    publishedAt={blog.metadata.publishedAt}
                  />
                ))}
              </ul>
            </Fragment>
          ))}
    </div>
  );
};

export default Blogs;
