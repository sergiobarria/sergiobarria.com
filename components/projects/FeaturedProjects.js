import { VscLinkExternal } from 'react-icons/vsc';

import SectionTitle from '../ui/SectionTitle';
import SectionTitleBg from '../ui/SectionTitleBg';
import SectionContainer from '../ui/SectionContainer';
import FeaturedProjCard from './FeaturedProjCard';
import FeaturedProjImg from './FeaturedProjImg';
import SectionBtn from '../utils/SectionBtn';

const FeaturedProjects = ({ projects }) => (
  <section id="featured-projects" className="relative py-16">
    <SectionTitleBg
      src="/static/layout-assets/featured-projects.png"
      alt="featured projects water mark"
      width="1500"
      height="500"
    />
    <SectionContainer>
      <SectionTitle title="featured projects" />

      {projects.map((proj, index) => (
        <div key={proj.id} className="grid grid-cols-12 my-20 lg:gap-0 gap-y-2">
          <FeaturedProjCard proj={proj} index={index} />
          <FeaturedProjImg proj={proj} index={index} />
        </div>
      ))}
      <SectionBtn btnClass="btn-black" url="/projects">
        See My Portfolio <VscLinkExternal className="ml-4" />
      </SectionBtn>
    </SectionContainer>
  </section>
);

export default FeaturedProjects;
