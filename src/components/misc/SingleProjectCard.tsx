import NextImage from 'next/image'

import ExternalIcons from './ExternalIcons'
import { IProject } from '@/types/interfaces'

interface IProps {
  project: IProject
}

export default function SingleProjectCard({ project }: IProps) {
  return (
    <article className="border rounded-lg border-sky-300">
      <div className="flex flex-col h-full p-4 ">
        <h4>{project.projectName}</h4>
        <p className="mt-2 long-text">
          {project.description.substring(0, 100)}...
        </p>
        <p className="flex flex-wrap items-center gap-2 my-2 text-sm long-text">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 capitalize border border-purple-300 rounded-md"
            >
              {tech.replace(/_/g, ' ')}
            </span>
          ))}
        </p>
        <div className="flex justify-end mt-auto">
          <ExternalIcons
            repoUrl={project.repositoryUrl}
            liveUrl={project.liveUrl}
          />
        </div>
      </div>
    </article>
  )
}
