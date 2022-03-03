import { useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { allProjects, Project } from 'contentlayer/generated';

import { Section } from '@/components/base';
import { Main } from '@/components/base';
import ProjectCard from '@/components/cards/ProjectCard';
import SearchBar from '@/components/forms/SearchBar';
import { H1, Paragraph } from '@/components/Typography';

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

      <Main>
        {/* Heading */}
        <Section className='space-y-4'>
          <H1>Portfolio Projects</H1>
          <Paragraph>
            Showcase of the projects I've work on in both, front and back end
            development.
          </Paragraph>
          <SearchBar
            setSearchValue={setSearchValue}
            placeholderText='Search project...'
          />
        </Section>

        {/* Projects showcase */}
        <Section>
          {!filteredProjects.length && (
            <Paragraph className='mt-2'>No projects found...</Paragraph>
          )}

          <div className='my-12 grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2'>
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
        </Section>
      </Main>
    </>
  );
}
