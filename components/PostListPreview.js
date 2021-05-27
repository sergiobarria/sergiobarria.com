import SinglePostCard from '@/components/SinglePostCard';

const PostListPreview = ({ postsArr }) => (
  <div className="mx-auto divide-y divide-gray-200 dark:divide-gray-700">
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!postsArr.length && (
        <p className="py-6 text-gray-600">No posts found...</p>
      )}
      {postsArr.map(post => (
        <li key={post.id} className="py-4">
          <article>
            <SinglePostCard {...post} />
          </article>
        </li>
      ))}
    </ul>
  </div>
);

export default PostListPreview;
