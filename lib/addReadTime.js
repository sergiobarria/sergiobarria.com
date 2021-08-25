import readingTime from 'reading-time';

export const addReadTime = async posts => {
  const postsReadTime = posts.map(post => readingTime(post.body.markdown));

  posts.forEach((post, i) => {
    post.readingTime = postsReadTime[i];
  });

  return posts;
};
