import { useState } from 'react';
import { NextSeo } from 'next-seo';

import { getAllProjects } from '@/lib/graphcms';
import PageHeader from '@/components/utils/PageHeader';

import CurrentGoals from '@/components/utils/CurrentGoals';
import Portfolio from '@/components/projects/Portfolio';

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60,
  };
}

export default function ProjectsPage({ projects }) {
  const orderedProjects = projects.sort(
    (projA, projB) => projB.projectNumber - projA.projectNumber
  );
  const [projectsArr, setProjectsArr] = useState(orderedProjects);
  const [active, setActive] = useState('all');

  const url = 'https://sergiobarria.com/projects';
  const title = 'Projects | Sergio Barria';
  const description =
    'Sergio Barria engineer, developer, writer. Sharing my journey as I transition from Civil Engineer to Web Developer';
  const pageHeaderData = {
    title: 'Here you can find what I’ve been working on',
    subtitle: 'My Portfolio',
    text: `In this section I’m showing some of the projects I’ve worked on. You can find live demos, source code, which technologies I used and some explanations of the approach I took to complete the project.`,
  };

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
      <div className="my-12">
        <section>
          <PageHeader {...pageHeaderData} />
        </section>
        <CurrentGoals />

        <Portfolio
          handleFilter={handleFilterCategory}
          projects={projectsArr}
          active={active}
        />
      </div>
    </>
  );
}
