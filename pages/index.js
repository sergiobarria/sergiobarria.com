import { getAllFilesFrontMatter } from '@/lib/mdx';

import Seo from '@/components/utils/Seo';

import Hero from '@/components/hero/Hero';
import Services from '@/components/services/Services';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import BlogPostPreview from '@/components/blog/FeaturedPosts';

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return {
    props: {
      posts,
    },
  };
}

export default function HomePage({ posts }) {
  const latestPosts = posts.allFiles.slice(0, 3);

  const title = 'Home | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';

  return (
    <>
      <Seo
        title={title}
        description={description}
        slug="/"
        // coverImage={`https://www.sergiobarria.com${image}`}
      />
<<<<<<< HEAD
      <Container>
        <div className="flex flex-col justify-center max-w-2xl mx-auto mb-4">
          <h1 className="text-center">Hey, I'm Sergio</h1>
          <p className="mb-8 font-normal prose text-center text-skin-base dark:text-skin-inverted">
            I'm an Engineer, developer and writer. For last few years I've
            worked as a Civil Engineer until I decide to take a professional
            turn and becoming a web developer. I created this small space on the
            internet to share my journey and try to help others who are also
            starting to learn how to code.
          </p>
        </div>

        <section>
          <h1>What I do</h1>
          <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 md:gap-4">
            {jobs.map((job, id) => (
              <Card
                key={id}
                title={job.title}
                icon={
                  <job.icon.type className="w-10 h-10 text-skin-accent md:w-12 md:h-12" />
                }
                description={job.description}
                techStack={job.techStack}
              />
            ))}
          </div>
        </section>

        <section className="my-16">
          <h1>My latest thoughts</h1>
          <PostListPreview
            postsArr={latestPosts}
            sectTitle="My latest thoughts"
          />
          <div className="flex justify-center mt-6">
            <NextLink href="/blog">
              <a className="px-4 py-2 uppercase transition duration-200 ease-in transform border rounded text-skin-accent border-skin-accent hover:text-skin-inverted hover:border-transparent hover:-translate-y-1 active:translate-y-0 hover:shadow-xl hover:bg-skin-fill">
                All Posts &rarr;
              </a>
            </NextLink>
          </div>
        </section>
      </Container>
=======
      <Hero />
      <Services />
      <FeaturedProjects />
      <BlogPostPreview posts={latestPosts} />
>>>>>>> update-ui
    </>
  );
}
