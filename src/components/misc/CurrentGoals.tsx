import { FiCheckCircle } from 'react-icons/fi'

import Section from './Section'
import SectionTitle from '@/components/misc/SectionTitle'

const taskList = [
  "I'm working on projects using React for practice and to improve my development skills 🤓",
  "I'm working on full stack applications using the MERN Stack, with features like authentication and input validation 🤓",
  'Ended 2021 learning mobile development with Flutter. Next, will be working on some apps to maybe publish on the App and Play Stores. 😱 😁',
]

export default function CurrentGoals() {
  return (
    <Section>
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle title="What I'm up to right now" />
        <div className="w-full pr-4 my-6">
          <ul>
            {taskList.map((task, index) => (
              <li key={index} className="flex items-center gap-4 mb-4">
                <div>
                  <FiCheckCircle className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-200">{task}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
