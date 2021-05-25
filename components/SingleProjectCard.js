import { useState } from 'react';
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';
// import Modal from './Modal';

Modal.setAppElement('#__next');

const SingleProjectCard = ({ project }) => {
  const [showDetail, setShowDetail] = useState(false);

  const openModal = () => {
    setShowDetail(true);
  };

  const closeModal = () => {
    setShowDetail(false);
  };

  const styles = {
    btn: 'px-4 py-1 text-sm font-semibold text-white transform bg-gray-900 rounded mouse-pointer hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none dark:bg-gray-500',
    tech: 'inline-block px-1 py-1 mr-2 text-xs font-thin text-blue-900 transition-all duration-150 transform bg-blue-400 bg-opacity-75 rounded hover:shadow-sm hover:scale-105 mt-2',
  };

  return (
    <>
      <article className="relative grid max-w-xs grid-cols-1 p-3 mx-auto bg-gray-200 rounded shadow-lg cursor-default select-none w-xs dark:bg-gray-900">
        <div className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
          <h2 className="text-center">{project.title}</h2>
        </div>

        <div className="w-full my-2">
          <p className="text-sm text-center text-gray-900 dark:text-gray-100">
            {project.summary}
          </p>
        </div>
        <div className="flex justify-center">
          <button type="button" className={styles.btn} onClick={openModal}>
            Show Details
          </button>
        </div>

        {/* <Modal showModal={showDetail} /> */}
        <Modal
          className="Modal dark:bg-gray-900"
          overlayClassName="Overlay"
          closeTimeoutMS={500}
          isOpen={showDetail}
          onRequestClose={closeModal}
        >
          <div className="grid h-auto grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col justify-around h-auto md:col-span-1">
              <Image
                src={project.image}
                width="500"
                height="350"
                layout="responsive"
              />
              <div className="flex justify-around my-4">
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-gray-100 bg-gray-800 rounded"
                >
                  <AiFillGithub className="text-xl" />
                  <span className="ml-2">Code</span>
                </a>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 text-sm text-gray-100 bg-gray-800 rounded"
                >
                  <AiFillProject className="text-xl" />
                  <span className="ml-2">Live</span>
                </a>
              </div>
            </div>
            <div className="p-4 md:col-span-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-skin-title dark:text-skin-inverted">
                  {project.title}
                </h2>
                <MdClose
                  className="hidden text-2xl cursor-pointer md:block text-skin-accent"
                  onClick={closeModal}
                />
              </div>
              <hr className="my-2" />
              <h3 className="text-base text-skin-title dark:text-skin-inverted">
                About the project
              </h3>
              <p className="my-2 text-sm text-skin-base dark:text-skin-inverted">
                {project.description.slice(0, 200)}
              </p>
              <div className="flex flex-wrap justify-around my-2">
                {project.tech.map((item, index) => (
                  <p
                    key={index}
                    className="px-4 py-1 m-2 text-sm capitalize rounded-full text-skin-inverted bg-skin-fill"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <button
                type="button"
                className="block px-8 py-1 mx-auto mt-2 bg-gray-700 rounded-md text-skin-inverted md:hidden"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </article>
    </>
  );
};

export default SingleProjectCard;
