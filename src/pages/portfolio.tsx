import { useState } from 'react'

import MainContainer from '@/components/layout/MainContainer'
import CurrentGoals from '@/components/misc/CurrentGoals'
import Section from '@/components/misc/Section'
import SectionTitle from '@/components/misc/SectionTitle'
import PageHeader from '@/components/misc/PageHeader'
import { portfolioPage } from '@/data/pagesData'
import { GetStaticProps } from 'next'
import { getAllProjects } from '@/lib/graphcms'
import { IProject } from '@/types/interfaces'
import SingleProjectCard from '@/components/misc/SingleProjectCard'
import SearchBar from '@/components/misc/SearchBar'

interface IProps {
  projects: IProject[]
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getAllProjects()

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24, // Every 24 hrs
  }
}

export default function PortfolioPage({ projects }: IProps) {
  const [searchValue, setSearchValue] = useState('')
  const orderedProjects = [...projects].sort(
    (projA, projB) => projB.projectNumber - projA.projectNumber
  )

  // Search project functionality
  const filterProjects = (projects: IProject[], searchValue: string) => {
    const filteredProjects = projects.filter(
      p =>
        p.projectName.toLowerCase().includes(searchValue.toLowerCase()) ||
        p.description.toLowerCase().includes(searchValue.toLowerCase())
    )

    return filteredProjects
  }

  const filteredProjects = filterProjects(orderedProjects, searchValue)

  const { pageHeaderData } = portfolioPage

  return (
    <MainContainer customMetadata={portfolioPage}>
      <PageHeader pageHeaderData={pageHeaderData} />
      <CurrentGoals />

      <Section>
        <SectionTitle title="Portfolio Projects" />
        <p className="my-6 long-text">
          Here you can see some of the projects I&apos;ve work on. Or filter
          using the search bar below in you&apos;re looking for something in
          particular
        </p>

        <SearchBar
          setSearchValue={setSearchValue}
          placeholderText="Search for a project name, language or description..."
        />
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
          {filteredProjects.map(project => (
            <SingleProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </MainContainer>
  )
}
