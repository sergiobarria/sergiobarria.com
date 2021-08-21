import { VscLinkExternal } from 'react-icons/vsc';

import SectionTitleBg from '../ui/SectionTitleBg';
import SectionContainer from '../ui/SectionContainer';
import SectionTitle from '../ui/SectionTitle';
import ColorBar from './ColorBar';
import PostsPreviewContainer from './PostsPreviewContainer';
import SectionBtn from '../utils/SectionBtn';

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
      <PostsPreviewContainer posts={posts} />
      <SectionBtn btnClass="btn-white" url="/blog">
        See Other Posts <VscLinkExternal className="ml-4" />
      </SectionBtn>
    </SectionContainer>
  </section>
);

export default BlogPostPreview;
