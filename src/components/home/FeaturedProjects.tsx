import Section from '../misc/Section'
import SectionTitle from '../misc/SectionTitle'
import CustomProjectCard from '../misc/CustomProjectCard'
import { IProject } from '@/types/ProjectTypes'

type Props = {
  featuredProjects: IProject[]
}

export default function FeaturedProjects({ featuredProjects }: Props) {
  return (
    <Section>
      <SectionTitle title="Featured Projects" />

      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-3 md:flex-row">
        {featuredProjects.map(project => (
          <CustomProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  )
}
