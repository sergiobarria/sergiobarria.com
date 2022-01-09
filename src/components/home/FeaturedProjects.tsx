import Section from '../misc/Section'
import SectionTitle from '../misc/SectionTitle'
import CustomProjectCard from '../misc/CustomProjectCard'
import { IProject } from '@/types/interfaces'

type Props = {
  featuredProjects: IProject[]
}

export default function FeaturedProjects({ featuredProjects }: Props) {
  return (
    <Section>
      <SectionTitle title="Featured Projects" />

      <div className="flex flex-col gap-6 mt-6 md:flex-row">
        {featuredProjects.map(project => (
          <CustomProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}
