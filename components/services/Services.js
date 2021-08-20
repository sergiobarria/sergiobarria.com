import SectionTitle from '../ui/SectionTitle';
import SectionTitleBg from '../ui/SectionTitleBg';
import ServicesContainer from './ServicesContent';
import SectionContainer from '../ui/SectionContainer';

const Services = () => (
  <section id="services" className="relative py-16">
    <SectionTitleBg
      src="/static/layout-assets/what-i-do.png"
      alt="what i do water mark"
      width="1500"
      height="300"
    />
    <SectionContainer>
      <SectionTitle title="what i do" />

      <ServicesContainer />
    </SectionContainer>
  </section>
);

export default Services;
