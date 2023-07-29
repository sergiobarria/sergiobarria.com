import { FiCheckCircle } from 'react-icons/fi';

const taskList = [
  "I'm working on projects using React for practice and to improve my development skills 🤓",
  "I'm working on full stack applications using the MERN Stack, with features like authentication and input validation 🤓",
  'Ended 2021 learning mobile development with React Native. Next, will be working on some apps to maybe publish on the App and Play Stores. 😱 😁',
];

export default function CurrentGoals() {
  return (
    <div className='my-6 w-full pb-8'>
      <ul>
        {taskList.map((task, index) => (
          <li key={index} className='mb-4 flex items-center gap-4'>
            <div>
              <FiCheckCircle className='h-6 w-6 text-green-500' />
            </div>
            <p className='text-sm text-gray-600 dark:text-gray-200 md:text-base'>
              {task}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
