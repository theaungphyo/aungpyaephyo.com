import BlogPost from '@/components/blog-post';
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
  const blogs = all
    ? getBlogPosts().sort((a, b) =>
        sort(a.metadata.publishedAt, b.metadata.publishedAt)
      )
    : getBlogPosts()
        .sort((a, b) => sort(a.metadata.publishedAt, b.metadata.publishedAt))
        .filter((b, i) => i < 8);

  const groupBlogs = groupBy(blogs, (blog) =>
    blog.metadata.publishedAt.substring(0, 4)
  );
  console.log(groupBlogs);
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
              <div className={'flex items-end gap-3 mb-5 w-full'}>
                <h2 className={'text-lg font-bold leading-none'}>{year}</h2>
                <hr
                  className={
                    'w-full border-none m-0 -mt-0.5 h-px bg-slate-700/30 dark:bg-slate-300/30 flex-1'
                  }
                />
              </div>
              <ul className='space-y-3 sm:space-y-1 mb-5'>
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
    </div>
  );
};

export default Blogs;
