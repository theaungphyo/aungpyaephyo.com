import PostCard from '@/components/post-card';
import { postConfig } from '@/config/post.config';

const BlogHome = () => {
  return (
    <div>
      <div className="p-5 container">
        <h1 className="text-base font-semibold mb-3 underline text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-300 dark:to-orange-200">
          Writings
        </h1>
        <ul className="space-y-1.5 group/card">
          {postConfig
            .sort((a, b) => {
              if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                return -1;
              }
              return 1;
            })
            .map((blog) => (
              <PostCard
                key={blog.slug}
                slug={blog.slug}
                title={blog.title}
                publishedAt={blog.publishedAt}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogHome;
