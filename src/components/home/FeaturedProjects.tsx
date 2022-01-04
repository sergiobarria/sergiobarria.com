import CustomSection from '../misc/CustomSection'
import SectionTitle from '../misc/SectionTitle'
import CustomProjectCard from '../misc/CustomProjectCard'

export default function FeaturedProjects() {
  return (
    <CustomSection>
      <SectionTitle title="Featured Projects" />

      <div className="flex flex-col gap-6 mt-6 md:flex-row">
        <CustomProjectCard />
        <CustomProjectCard />
        <CustomProjectCard />
      </div>
    </CustomSection>
  )
}
