import { FaExternalLinkAlt } from 'react-icons/fa';

const ResourceCard = ({ id, title, link, description }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    key={id}
    className="col-span-12 p-4 transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md cursor-pointer sm:col-span-6 md:col-span-4 lg:col-span-3 hover:scale-105 hover:shadow-xl"
  >
    <article>
      <div className="flex items-center justify-between text-main">
        <h4 className="font-semibold ">{title}</h4> <FaExternalLinkAlt />
      </div>
      <p className="mt-2 text-xs text-gray-500 lg:text-sm">{description}</p>
    </article>
  </a>
);

export default ResourceCard;
