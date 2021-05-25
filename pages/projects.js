import { FiCheckCircle } from 'react-icons/fi';
// import Image from 'next/image';

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

  const taskList = [
    "I'm working on several personal projects using Vue for practice and to improve my development skills 🤓",
    "I'm applying TypeScript to some of my projects and learning how to write better and cleaner code. 🤓",
    'I embarked on a journey to learn Django for Backend Development (wish me luck!) 😱 😁',
  ];

  return (
    <Container>
      {/* Project Container Card */}
      <section>
        <h1 className="mb-4 text-2xl font-bold text-center text-skin-title md:text-5xl tracking-tigh dark:text-skin-inverted">
          Projects Portfolio
        </h1>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-4">
          <p className="mb-8 font-normal prose text-center text-skin-base dark:text-skin-inverted">
            In this section I'm showing some of the projects I've work on. You
            can find live demos, source code, which technologies I used and some
            explanations of the approach I took to complete the project.
          </p>
        </div>
      </section>

      {/* What I'm up to right now */}
      <section className="my-6">
        <h1 className="my-4 text-2xl font-bold text-skin-title text-start md:text-4xl tracking-tigh dark:text-skin-inverted">
          What I'm up to right now
        </h1>
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
      <section className="my-16">
        <h1 className="my-4 text-2xl font-bold text-skin-title text-start md:text-4xl tracking-tigh dark:text-skin-inverted">
          My Current Developer Stack
        </h1>

        <div>
          <h2 className="my-4 text-xl font-semibold text-skin-accent">
            👉🏽 Current Hardware
          </h2>
          <ul>
            <li>
              <span className="font-bold text-skin-title dark:text-skin-inverted">
                Laptop/Mac:{' '}
              </span>
              <a
                href="https://www.amazon.com/2020-Apple-Mini-256GB-Storage/dp/B08N5PHB83/ref=sr_1_3?dchild=1&keywords=mac+mini+m1&qid=1621892679&sr=8-3"
                className="border-b border-gray-600 text-skin-base dark:text-skin-inverted"
              >
                Mac Mini M1 2020
              </a>
            </li>
            <li>
              <span className="font-bold text-skin-title dark:text-skin-inverted">
                Monitor:{' '}
              </span>
              <a
                href="https://www.amazon.com/Samsung-27-Inch-Frameless-Monitor-LC27R500FHNXZA/dp/B07RNMNWSY/ref=sr_1_2?crid=K2K8QYZUOWZZ&dchild=1&keywords=samsung+curved+27+inch+monitor&qid=1621892793&sprefix=samsung+curve+27+%2Caps%2C235&sr=8-2"
                className="border-b border-gray-600 text-skin-base dark:text-skin-inverted"
              >
                Dual Samsung Curve 27" monitors
              </a>
            </li>
            <li>
              <span className="font-bold text-skin-title dark:text-skin-inverted">
                Keyboard & Mouse:{' '}
              </span>
              <a
                href="https://www.amazon.com/Logitech-Wireless-Keyboard-Master-Bundle/dp/B089QQQL9Z/ref=sr_1_2?crid=3B14SI8E911C2&dchild=1&keywords=logitech+mx+master+3+keys&qid=1621893205&sprefix=logitech+mx%2Caps%2C236&sr=8-2"
                className="border-b border-gray-600 text-skin-base dark:text-skin-inverted"
              >
                Logitech MX Keys (Keyboard) - Logitech MX Master 3 (Mouse)
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="my-4 text-xl font-semibold text-skin-accent">
            👉🏽 Current Stack
          </h2>
        </div>
      </section>

      <section className="my-6">
        <h1 className="mb-4 text-2xl font-bold text-skin-title text-start md:text-4xl tracking-tigh dark:text-skin-inverted">
          Check some of the projects I've worked so far
        </h1>
        <ProjectsNavbar />
        <hr />
        <div className="grid grid-cols-12 gap-4 my-4 ">
          {projects.allFiles.map((project, index) => (
            <div
              key={index}
              className="col-span-12 overflow-hidden rounded sm:col-span-6 lg:col-span-4"
            >
              <SingleProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
