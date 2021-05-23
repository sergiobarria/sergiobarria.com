import Image from 'next/image';

const Card = ({ icon, title, description, techStack, image }) => (
  <div className="container flex-col items-center justify-center max-w-md mx-auto">
    <div className="flex items-center w-full px-1 bg-white border shadow dark:bg-gray-600 rounded-xl">
      <div className="flex items-center px-1 space-x-4">
        {icon || <Image src={image} width={100} height={100} alt={title} />}
      </div>
      <div className="flex-grow p-3">
        <div className="font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-200">
          {description}
        </div>
        {techStack && <div className="text-sm text-green-500">{techStack}</div>}
      </div>
    </div>
  </div>
);

export default Card;
