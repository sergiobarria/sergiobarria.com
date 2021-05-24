import SinglePostCard from '@/components/SinglePostCard';

const PostListPreview = ({ postsArr }) => (
  <div className="mx-auto divide-y divide-gray-200 dark:divide-gray-700">
    {/* <div className="pt-6 pb-8 space-y-2 md:space-y-5">
      {sectTitle && (
        <h1
          className={`text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:text-4xl md:leading-14 ${
            centerTitle ? 'text-center' : ''
          }`}
        >
          {sectTitle}
        </h1>
      )}
    </div> */}
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
