import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import TechStack from './TechStack';

const FeaturedProjCard = ({ proj, index }) => (
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
      {proj.projectName}
    </h3>
    <article key={proj.id} className="p-6 bg-gray-800 rounded-lg">
      <p className="mb-4 text-xs text-gray-300 md:text-sm">
        {proj.description}
      </p>
      <div className="flex items-center justify-start space-x-4">
        <a
          href={proj.liveUrl}
          className="btn btn-main"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project <BiLinkExternal className="ml-4 text-xl" />
        </a>
        <a
          href={proj.repositoryUrl}
          className="btn btn-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github <AiFillGithub className="ml-4 text-xl" />
        </a>
      </div>
      <TechStack techArr={proj.techStack} />
    </article>
  </div>
);

export default FeaturedProjCard;
