import Icon from '@mdi/react'

import CustomSection from '../misc/CustomSection'
import SectionTitle from '../misc/SectionTitle'
import { skills } from '@/types/data/skills'

export default function DeveloperSkills() {
  return (
    <CustomSection>
      <SectionTitle title="Developer Skills" />
      <ul className="flex flex-wrap gap-3 mt-6">
        {skills
          .filter(skill => !skill.hide)
          .map((skill, index) => (
            <li key={index} className="py-2 px-4 rounded-2xl border-[1px]">
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
    </CustomSection>
  )
}
