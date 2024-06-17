import GroupTitle from '@/components/group-title';
import SectionTitle from '@/components/section-title';
import ViewLink from '@/components/view-link';
import { getBlogPosts } from '@/db/blog';
import groupBy from '@/lib/group-by';
import { sort } from '@/lib/utils';
import { Fragment } from 'react';

const Blogs = ({ all = false }: { all?: boolean }) => {
  const blogs = getBlogPosts()
    .sort((a, b) => sort(a.metadata.publishedAt, b.metadata.publishedAt))
    .filter((b, i) => i < 8);

  const groupBlogs = groupBy(blogs, (blog) =>
    blog.metadata.publishedAt.substring(0, 4)
  );
  return (
    <div className='pb-5'>
      {!all && <SectionTitle title={'Writings'} href={'/blog'} viewAll />}
      {!all && (
        <ul className='space-y-3 sm:space-y-1'>
          {blogs.map((blog) => (
            <ViewLink
              basePath={'blog'}
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
                  <ViewLink
                    basePath={'blog'}
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
