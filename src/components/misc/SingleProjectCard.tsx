import NextImage from 'next/image'
import Icon from '@mdi/react'

import ExternalIcons from './ExternalIcons'
import { IProject } from '@/types/ProjectTypes'
import { getIcon } from '@/utils/getIcon'

interface IProps {
  project: IProject
}

export default function SingleProjectCard({ project }: IProps) {
  return (
    <article className="border rounded-lg h-60 md:h-72 border-sky-300">
      <div className="flex flex-col h-full p-4 ">
        <div className="mb-auto">
          <h4>{project.name}</h4>
          <p className="mt-2 mb-auto text-sm md:text-base h-28 long-text">
            {project.description}
          </p>
          {project.jamstack && (
            <p className="mb-6 text-gray-500 dark:text-gray-200">
              - Headless CMS:{' '}
              <span className="text-gray-700 capitalize">
                {project.headlessCms.replace(/_/, ' ')}
              </span>
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <p className="flex flex-wrap items-center gap-2 my-2 text-sm long-text">
            {project.techStack.map((tech, index) => {
              const icon = getIcon(tech.replace(/_/g, ''))

              return (
                <Icon
                  key={index}
                  path={icon.path}
                  size={1}
                  className="mr-2"
                  color={icon.color}
                />
              )
            })}
          </p>
          <div className="flex mt-auto">
            <ExternalIcons repoUrl={project.repo} liveUrl={project.liveUrl} />
          </div>
        </div>
      </div>
    </article>
  )
}
