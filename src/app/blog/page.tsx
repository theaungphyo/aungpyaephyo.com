import BlogPost from '@/components/blog/blog-post';
import GroupTitle from '@/components/group-title';
import PageTitle from '@/components/page-title';
import { getBlogPosts } from '@/db/blog';
import groupBy from '@/lib/group-by';
import { Fragment } from 'react';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
};

const Page = () => {
  const blogs = getBlogPosts();
  const groupBlogs = groupBy(blogs, (blog) =>
    blog.metadata.publishedAt.substring(0, 4)
  );
  return (
    <section>
      <PageTitle
        title={'Read my blog'}
        description={`${blogs.length} posts so far. Stay tuned for more!`}
      />
      {Object.entries(groupBlogs)
        .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
        .map(([year, posts]) => (
          <Fragment key={year}>
            <GroupTitle name={year} />
            <ul className='mb-5'>
              {posts.map((blog) => (
                <BlogPost
                  key={blog.slug}
                  slug={blog.slug}
                  title={blog.metadata.title}
                  publishedAt={blog.metadata.publishedAt}
                />
              ))}
            </ul>
          </Fragment>
        ))}
    </section>
  );
};

export default Page;
