import { useState } from 'react';

import { NextSeo } from 'next-seo';

import { projects } from '@/data/projectsData';
import PageHeader from '@/components/utils/PageHeader';

import CurrentGoals from '@/components/utils/CurrentGoals';
import Portfolio from '@/components/utils/Portfolio';

export default function ProjectsPage() {
  const orderedProjects = projects.sort((projA, projB) => projB.id - projA.id);
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
      <div className="my-10 md:my-20">
        {/* Project Container Card */}
        <section>
          <PageHeader {...pageHeaderData} />
        </section>
        <CurrentGoals />

        {/* Projects Portfolio */}
        <Portfolio
          handleFilter={handleFilterCategory}
          projects={projectsArr}
          active={active}
        />
      </div>
    </>
  );
}
