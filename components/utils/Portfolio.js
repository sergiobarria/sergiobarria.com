import SingleProjectCard from '@/components/SingleProjectCard';
import ProjectsNavbar from '@/components/ProjectsNavbar';
import SectionTitle from '@/components/ui/SectionTitle';

const Portfolio = ({ handleFilter, projects, active }) => (
  <section className="max-w-screen-xl mx-auto my-20">
    <div className="mb-10">
      <SectionTitle title="Portfolio Projects" />
    </div>
    <ProjectsNavbar handleFilterCategory={handleFilter} active={active} />
    <hr />
    <div className="grid grid-cols-12 gap-4 my-4 ">
      {projects.map(p => (
        <div
          key={p.id}
          className="col-span-12 overflow-hidden rounded sm:col-span-6 lg:col-span-4"
        >
          <SingleProjectCard project={p} />
        </div>
      ))}
    </div>
  </section>
);

export default Portfolio;
