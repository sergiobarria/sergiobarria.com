import Image from 'next/image';

const Card = ({ icon, title, description, techStack, image }) => (
  <div className="container flex-col items-center justify-center max-w-md mx-auto">
    <div className="flex items-center w-full px-1 bg-white border shadow dark:bg-gray-600 rounded-xl">
      <div className="flex items-center px-1 space-x-4">
        {icon || <Image src={image} width={100} height={100} alt={title} />}
      </div>
      <div className="flex-grow p-3">
        <div className="font-semibold text-skin-title dark:text-skin-inverted">
          {title}
        </div>
        <div className="text-sm text-skin-base dark:text-skin-inverted">
          {description}
        </div>
        <div className="flex">
          {techStack &&
            techStack.map((tech, index) => (
              <span key={index} className="mr-2 text-sm text-skin-accent">
                {tech}
                {`${index < techStack.length - 1 ? ' -' : ''}`}
              </span>
            ))}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
