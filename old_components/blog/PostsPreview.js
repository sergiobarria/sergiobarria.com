import BlogPostCard from './PostCard';

const PostsPreview = ({ posts }) => (
  <div className="grid items-start justify-center grid-cols-12 gap-8 px-4 my-10 xl:px-0 md:gap-10 ">
    {posts.map(post => (
      <BlogPostCard key={post.id} post={post} />
    ))}
  </div>
);

export default PostsPreview;
