import { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import SingleProjectCard from '@/components/SingleProjectCard';
import ProjectsNavbar from '@/components/ProjectsNavbar';
// import StackTable from '@/components/Stack';
import { projects } from '@/data/projectsData';

export default function Projects() {
  const orderedProjects = projects.sort((projA, projB) => projB.id - projA.id);
  const [projectsArr, setProjectsArr] = useState(orderedProjects);
  const [active, setActive] = useState('all');

  const url = 'https://sergiobarria.com/projects';
  const title = 'Projects | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';

  const taskList = [
    "I'm working on projects using React for practice and to improve my development skills 🤓",
    "I'm working on full stack applications using the MERN Stack, with features like authentication and input validation 🤓",
    'I embarked on a journey to learn Django for Backend Development (wish me luck!) 😱 😁',
  ];

  // Function to filter projects
  const handleFilterCategory = category => {
    if (category === 'all') {
      setProjectsArr(projects);
      setActive(category);
      return;
    }

    const newArray = projects.filter(project =>
      project.category.includes(category)
    );
    setProjectsArr(newArray);
    setActive(category);
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{ url, title, description }}
      />
      <Container>
        {/* Project Container Card */}
        <section>
          <h1 className="text-center">Projects Portfolio</h1>
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-4">
            <p className="mb-8 font-normal prose text-center text-skin-base dark:text-skin-inverted">
              In this section I'm showing some of the projects I've work on. You
              can find live demos, source code, which technologies I used and
              some explanations of the approach I took to complete the project.
            </p>
          </div>
        </section>

        {/* What I'm up to right now */}
        <section className="my-6">
          <h1>What I'm up to right now</h1>
          <div className="px-4 py-2 mx-auto md:w-3/4">
            <ul>
              {taskList.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center px-4 py-2 my-4 bg-white border shadow dark:bg-gray-600 rounded-xl"
                >
                  <FiCheckCircle className="w-8 h-8 text-skin-accent" />
                  <p className="ml-6 text-skin-base dark:text-skin-inverted">
                    {task}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* My Current Developer Stack */}
        {/* <section className="my-16">
          <StackTable />
        </section> */}

        {/* Projects Portfolio */}
        <section className="my-6">
          <h1>Check some of the projects I've worked so far</h1>
          <ProjectsNavbar
            handleFilterCategory={handleFilterCategory}
            active={active}
          />
          <hr />
          <div className="grid grid-cols-12 gap-4 my-4 ">
            {projectsArr.map(p => (
              <div
                key={p.id}
                className="col-span-12 overflow-hidden rounded sm:col-span-6 lg:col-span-4"
              >
                <SingleProjectCard project={p} />
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
