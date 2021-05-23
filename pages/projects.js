import Container from '@/components/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';
import SingleProjectCard from '@/components/SingleProjectCard';
import ProjectsNavbar from '@/components/ProjectsNavbar';

export async function getStaticProps() {
  const projects = getAllFilesFrontMatter('projects');

  return { props: { projects } };
}

export default function Projects({ projects }) {
  // Function to filter projects
  // const handlerFilterCategory = category => {
  //   if (category === 'all') {
  //     setProjects(projectsData);
  //     setActive(category);
  //     return;
  //   }

  //   const newArray = projectsData.filter(project =>
  //     project.category.includes(category)
  //   );
  //   setProjects(newArray);
  //   setActive(category);
  // };

  return (
    <Container>
      {/* Project Container Card */}

      <h1 className="mb-4 text-2xl font-bold text-center text-gray-800 md:text-5xl tracking-tigh dark:text-gray-100">
        Projects Portfolio
      </h1>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-4">
        <p className="mb-8 font-normal prose text-center text-gray-600 dark:text-gray-100">
          In this section I'm showing some of the projects I've work on. You can
          find live demos, source code, which technologies I used and some
          explanations of the approach I took to complete the project.
        </p>
      </div>

      {/* What I'm up to right now */}
      <h1 className="mb-4 text-2xl font-bold text-gray-800 text-start md:text-5xl tracking-tigh dark:text-gray-100">
        What I'm up to right now
      </h1>

      <h1 className="mb-4 text-2xl font-bold text-gray-800 text-start md:text-5xl tracking-tigh dark:text-gray-100">
        Check some of the projects I've worked so far
      </h1>
      <ProjectsNavbar />
      <hr />
      <section className="my-6">
        <div className="grid grid-cols-12 gap-4 auto-rows-auto">
          {projects.allFiles.map((project, index) => (
            <div
              key={index}
              className="col-span-12 overflow-hidden rounded dark:bg-gray-600 sm:col-span-6 lg:col-span-4"
            >
              <SingleProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
