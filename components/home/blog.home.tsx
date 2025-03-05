import PostCard from '@/components/post-card';
import { postConfig } from '@/config/post.config';

const BlogHome = () => {
  return (
    <div>
      <div className="p-5 container">
        <h1 className="text-base font-semibold mb-3">Writings</h1>
        <ul className="space-y-1.5 group/card">
          {postConfig.map((blog) => (
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
