import NextImage from 'next/image';
import { FiCheckCircle } from 'react-icons/fi';

import SectionTitle from '@/components/ui/SectionTitle';

const taskList = [
  "I'm working on projects using React for practice and to improve my development skills 🤓",
  "I'm working on full stack applications using the MERN Stack, with features like authentication and input validation 🤓",
  'I embarked on a journey to learn Django for Backend Development (wish me luck!) 😱 😁',
];

const CurrentGoals = () => (
  <section className="relative py-16 pl-4 my-6 bg-gray-900 md:pl-32 min-h-100">
    <div className="absolute left-0 hidden w-20 md:block -top-16 h-100 bg-main">
      <div className="absolute top-32 -right-8">
        <NextImage
          src="/static/layout-assets/square-dots.png"
          alt="red vertical bar"
          width={80}
          height={80}
        />
      </div>
    </div>
    <div className="max-w-screen-xl mx-auto">
      <SectionTitle title="What I'm up to right now" textColor="text-white" />
      <div className="w-full pr-4 my-6 lg:w-3/6 lg:pr-0">
        <ul>
          {taskList.map((task, index) => (
            <li
              key={index}
              className="grid items-center grid-cols-12 px-4 py-2 my-4"
            >
              <FiCheckCircle className="w-4 h-4 col-span-1 text-green-400 md:w-8 md:h-8" />
              <p className="col-span-11 text-sm text-gray-200">{task}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute right-0 hidden lg:block -bottom-16 h-96 w-120">
        <NextImage
          src="/static/layout-assets/working-projects.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  </section>
);

export default CurrentGoals;
