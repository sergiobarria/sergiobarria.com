import Icon from '@mdi/react'

import Section from '../misc/Section'
import SectionTitle from '../misc/SectionTitle'
import { skills } from '@/types/data/skills'

// TODO: Finish this paragraph content

export default function DeveloperSkills() {
  return (
    <Section>
      <SectionTitle title="Developer Skills" />
      <p className="my-6 long-text">
        This are some of the technologies I know, and have work with.
      </p>
      <ul className="flex flex-wrap gap-3">
        {skills
          .filter(skill => !skill.hide)
          .map((skill, index) => (
            <li
              key={index}
              className="py-2 px-4 rounded-lg border-[1px] text-sm text-gray-600 dark:text-gray-300"
            >
              <span className="flex items-center">
                <Icon
                  path={skill.iconPath}
                  size={0.8}
                  className="mr-2"
                  color={skill.color}
                />
                {skill.name}
              </span>
            </li>
          ))}
      </ul>
    </Section>
  )
}
