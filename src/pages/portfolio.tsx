import { useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import ProjectCard from '@/components/ProjectCard';
import SearchBar from '@/components/SearchBar';

import { allProjects } from '.contentlayer/data';
import { Project } from '.contentlayer/types';

export async function getStaticProps() {
  const projects = allProjects.sort((p1, p2) => p2.number - p1.number);

  return {
    props: {
      projects,
    },
  };
}

export default function PortfolioPage({
  projects,
}: InferGetStaticPropsType<GetStaticProps>) {
  const [searchValue, setSearchValue] = useState('');

  // Search project functionality
  const filterProjects = (projects: Project[], searchValue: string) => {
    const filteredProjects = projects.filter(
      (p) =>
        p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        p.description.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filteredProjects;
  };

  const filteredProjects = filterProjects(projects, searchValue);

  const customMetadata = {
    title: 'Portfolio',
    canonical: 'https://sergiobarria.com/portfolio',
    openGraph: {
      url: 'https://sergiobarria.com/portfolio',
    },
  };

  return (
    <>
      <NextSeo {...customMetadata} />
      <div className='layout'>
        {/* Heading */}
        <section className='space-y-4 section'>
          <h1>Portfolio Projects</h1>
          <p className='text-long'>
            Showcase of the projects I've work on in both, front and back end
            development.
          </p>
          <SearchBar
            setSearchValue={setSearchValue}
            placeholderText='Search project...'
          />
        </section>

        {/* Projects showcase */}
        <section className='section'>
          {!filteredProjects.length && (
            <p className='mt-2 text-gray-500 dark:text-gray-300'>
              No projects found...
            </p>
          )}

          <div className='grid grid-cols-1 gap-6 mb-16 md:grid-cols-2 auto-rows-fr'>
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
