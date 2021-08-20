import NextImage from 'next/image';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

import { projects } from '@/data/projectsData';
import SectionTitle from '../ui/SectionTitle';
import SectionTitleBg from '../ui/SectionTitleBg';
import SectionContainer from '../ui/SectionContainer';
import Button from '../ui/Button';

const FeaturedProjects = () => {
  const featuredProj = projects
    .filter(project => project.featured)
    .sort((a, b) => b.id - a.id);

  return (
    <section className="relative py-16">
      <SectionTitleBg
        src="/static/layout-assets/featured-projects.png"
        alt="featured projects water mark"
        width="1500"
        height="500"
      />
      <SectionContainer>
        <SectionTitle title="featured projects" />

        {featuredProj.map((proj, index) => (
          <div
            key={proj.id}
            className="grid grid-cols-12 my-20 lg:gap-0 gap-y-2"
          >
            <div
              key={proj.id}
              className={` ${
                index !== 1
                  ? 'col-span-12 lg:col-start-1 lg:col-end-7'
                  : 'col-span-12 lg:col-start-6 lg:col-end-13'
              } text-gray-100 row-start-2 lg:row-start-1 row-end-3 lg:row-end-2 self-center`}
            >
              <h3
                className={`text-xl lg:text-2xl font-bold text-gray-800 ${
                  index === 1 ? 'lg:text-right' : ''
                }`}
              >
                {proj.name}
              </h3>
              <article key={proj.id} className="p-6 bg-gray-800 rounded-lg">
                <p className="mb-4 text-xs text-gray-300 md:text-sm">
                  {proj.description}
                </p>
                <div className="flex items-center justify-start space-x-4">
                  <Button
                    href={proj.liveUrl}
                    px="4"
                    py="2"
                    bg="bg-main"
                    textSize="text-xs"
                    hoverBgEffect="hover:bg-main-dark"
                  >
                    View Project <BiLinkExternal className="ml-4 text-xl" />
                  </Button>
                  <Button
                    href={proj.repo}
                    bg="bg-gray-200"
                    px="4"
                    py="2"
                    textSize="text-xs"
                    textColor="text-gray-800"
                    hoverBgEffect="hover:bg-gray-700"
                    hoverTextEffect="text-white"
                  >
                    Github <AiFillGithub className="ml-4 text-xl" />
                  </Button>
                </div>
                <div className="flex flex-wrap justify-end mt-10 space-x-4 text-right">
                  {proj.keyTechs.map((tech, i) => (
                    <small
                      key={i}
                      className="px-2 py-1 mt-2 text-xs font-medium capitalize border border-gray-500 md:px-4 md:py-2 opacity-70"
                    >
                      {tech}
                    </small>
                  ))}
                </div>
              </article>
            </div>
            <div
              className={`relative w-full h-52 md:h-80 lg:h-96 rounded-lg overflow-hidden row-start-1 row-end-2 lg:row-start-1 lg:row-end-2 bg-blue-500 -z-10 shadow-lg ${
                index === 1
                  ? 'col-span-12 lg:col-start-1 lg:col-end-7'
                  : 'col-span-12 lg:col-start-6 lg:col-end-13'
              }`}
            >
              <div className="absolute inset-0 z-10 bg-black opacity-70" />
              <NextImage
                src={proj.image}
                alt={proj.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </SectionContainer>
    </section>
  );
};

export default FeaturedProjects;
