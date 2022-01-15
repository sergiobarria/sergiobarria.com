import { useState } from 'react';

import { GetStaticProps, InferGetStaticPropsType } from 'next';

import clsx from 'clsx';
import { HiArrowRight } from 'react-icons/hi';

import Layout from '@/components/layout-main/Layout';
import SearchBar from '@/components/SearchBar';
import TechIcons, { TechListType } from '@/components/TechIcons';

// import CloudinaryImage from '@/components/images/CloudinaryImage'
import { allProjects } from '.contentlayer/data';
import { Project } from '.contentlayer/types';

export async function getStaticProps() {
  const projects = allProjects.sort((p1, p2) => p2.number - p1.number);

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60, // every 1 hr
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
    url: 'https://sergiobarria.com/portfolio',
    title: 'Portfolio | Sergio Barria',
  };

  return (
    <Layout customMetadata={customMetadata}>
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
            <p className='mt-2 text-gray-regular dark:text-gray-lighter'>
              No projects found...
            </p>
          )}

          <ul className='grid grid-cols-1 gap-4 mb-16 md:grid-cols-2 auto-rows-fr'>
            {filteredProjects.map((project: Project) => (
              <li key={project._id}>
                <article className='flex flex-col h-full p-4 border rounded-md'>
                  {/* <CloudinaryImage
                    publicId={`sergiobarria/projects/${project.banner}`}
                    width={1200}
                    height={720}
                    alt={project.name}
                    className="mb-2"
                  /> */}
                  <h4>{project.name}</h4>
                  <p className='text-sm text-gray-regular dark:text-gray-lighter'>
                    {project.description}
                  </p>
                  <div className='flex items-center justify-between pt-3 mt-auto'>
                    <TechIcons
                      techs={project.techs.split(',') as Array<TechListType>}
                    />
                    <a
                      href={project.liveUrl}
                      className={clsx(
                        'flex items-center text-sm transition-all duration-300 text-gray-regular',
                        // 'underline decoration-dotted',
                        'hover:scale-105',
                        'animated-underline dark:text-gray-lighter hover:text-gray-darker dark:hover:text-gray-light'
                      )}
                    >
                      See live <HiArrowRight className='ml-2' />
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Layout>
  );
}
