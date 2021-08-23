import NextImage from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoMdShareAlt } from 'react-icons/io';

const SingleProjectCard = ({ project }) => (
  <>
    <article className="relative grid max-w-xs grid-cols-1 p-3 mx-auto bg-gray-200 rounded shadow-lg cursor-default select-none w-xs dark:bg-gray-900">
      <div className="relative w-full h-40">
        <NextImage
          src={project.image}
          // width={150}
          // height={150}
          layout="fill"
          objectFit="cover"
          className="rounded-tl rounded-tr"
        />
      </div>
      <div className="my-2 text-xl font-semibold text-gray-900 dark:text-white">
        <h2 className="text-center">{project.name}</h2>
      </div>

      <div className="w-full my-2">
        <p className="text-sm text-center text-gray-900 dark:text-gray-100">
          {project.summary}
        </p>
      </div>
      <div className="flex justify-around">
        <a
          href={project.repo}
          className="flex items-center justify-between btn-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2">
            <AiOutlineGithub />
          </span>
          Source
        </a>
        <a
          href={project.liveUrl}
          className="flex items-center justify-between btn-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2">
            <IoMdShareAlt />
          </span>
          Live
        </a>
      </div>
    </article>
  </>
);

export default SingleProjectCard;
