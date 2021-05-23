import { useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const SingleProjectCard = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);

  // const handleShowDetail = () => {
  //   setShowDetail(!showDetail);
  //   // console.log(showDetail);
  // };

  const styles = {
    btn: 'px-4 py-1 text-sm font-semibold text-white transform bg-gray-900 rounded mouse-pointer hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none dark:bg-gray-500',
    tech: 'inline-block px-1 py-1 mr-2 text-xs font-thin text-blue-900 transition-all duration-150 transform bg-blue-400 bg-opacity-75 rounded hover:shadow-sm hover:scale-105 mt-2',
  };

  return (
    <>
      <article className="z-50 grid max-w-xs grid-cols-1 p-3 mx-auto bg-gray-200 rounded shadow-lg cursor-default select-none w-xs dark:bg-gray-900">
        <div className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          <h2 className="text-center">{project.title}</h2>
        </div>

        <div className="w-full my-2">
          <p className="text-sm text-center text-gray-900 dark:text-gray-100">
            {project.summary}
          </p>
        </div>
        <div className="flex justify-center">
          <button type="button" className={styles.btn}>
            Show Details
          </button>
          {/* <button type="button" className={styles.btn}>
            Live
          </button>
          <button type="button" className={styles.btn}>
            Source
          </button> */}
        </div>
        {/* <div className="font-semibold text-gray-900 text-l dark:text-gray-100">
          Tech Stack:
        </div>
        <div>
          <span className={styles.tech}>ReactJS</span>
          <span className={styles.tech}>Tailwind</span>
          <span className={styles.tech}>Javascript</span>
          <span className={styles.tech}>Javascript</span>
        </div> */}
      </article>
    </>
  );
};

export default SingleProjectCard;
