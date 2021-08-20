import NextLink from 'next/link';
import { VscLinkExternal } from 'react-icons/vsc';

import SectionTitleBg from '../ui/SectionTitleBg';
import SectionContainer from '../ui/SectionContainer';
import SectionTitle from '../ui/SectionTitle';
import ColorBar from './ColorBar';
import BlogPostCard from './BlogPostCard';

const BlogPostPreview = ({ posts }) => (
  <section className="relative pb-16 pt-44 lg:pt-36 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900">
    <SectionTitleBg
      src="/static/layout-assets/my-latest-thoughts.png"
      alt="my latest thoughts water mark"
      width="1500"
      height="500"
    />
    <ColorBar />
    <SectionContainer>
      <SectionTitle title="My Latest Thoughts" textColor="text-white" />
      <div className="grid items-center justify-center grid-cols-12 gap-8 mt-10 md:gap-10 ">
        {posts.map(post => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="w-3/12 mx-auto mt-16">
        <NextLink href="/blog">
          <a className="text-base text-gray-700 bg-gray-200 btn btn-black">
            See Other Posts <VscLinkExternal className="ml-4" />
          </a>
        </NextLink>
      </div>
    </SectionContainer>
  </section>
);

export default BlogPostPreview;
