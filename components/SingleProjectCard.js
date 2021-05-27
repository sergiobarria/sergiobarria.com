import NextImage from 'next/image';
import { AiOutlineGithub } from 'react-icons/ai';
import { IoMdShareAlt } from 'react-icons/io';

const SingleProjectCard = ({ project }) => {
  const styles = {
    btn: 'px-4 py-1 text-sm font-semibold text-white transform bg-gray-900 rounded mouse-pointer hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none dark:bg-gray-500',
    tech: 'inline-block px-1 py-1 mr-2 text-xs font-thin text-blue-900 transition-all duration-150 transform bg-blue-400 bg-opacity-75 rounded hover:shadow-sm hover:scale-105 mt-2',
  };

  return (
    <>
      <article className="relative grid max-w-xs grid-cols-1 p-3 mx-auto bg-gray-200 rounded shadow-lg cursor-default select-none w-xs dark:bg-gray-900">
        <NextImage
          src={project.image}
          width={150}
          height={150}
          className="rounded-tl rounded-tr"
        />
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
            className={`${styles.btn} flex items-center justify-between`}
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
            className={`${styles.btn} flex items-center justify-between`}
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
};

export default SingleProjectCard;
