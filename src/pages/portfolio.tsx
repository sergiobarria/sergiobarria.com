// import { useState } from 'react'

// import { GetStaticProps } from 'next'

// import { getAllProjects } from 'src/lib/graphcms'

// import { client } from '@/lib/urql/client'

import Layout from '@/components/layout/Layout'
// import MainLayout from '@/components/layout/MainLayout'
// import CurrentGoals from '@/components/misc/CurrentGoals'
// import SearchBar from '@/components/misc/SearchBar'
// import Section from '@/components/misc/Section'
// import SectionTitle from '@/components/misc/SectionTitle'
// import SingleProjectCard from '@/components/misc/SingleProjectCard'

// import { IProject } from '@/types/ProjectTypes'

// interface IProps {
//   projects: IProject[]
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const projectsQuery = getAllProjects()

//   const {
//     data: { projects },
//   } = await client?.query(projectsQuery).toPromise()

//   return {
//     props: {
//       projects,
//     },
//     revalidate: 60 * 60, // Every 1 hr
//   }
// }

export default function PortfolioPage() {
  // const [searchValue, setSearchValue] = useState('')
  // const orderedProjects = [...projects].sort(
  //   (projA, projB) => projB.number - projA.number
  // )

  // // Search project functionality
  // const filterProjects = (projects: IProject[], searchValue: string) => {
  //   const filteredProjects = projects.filter(
  //     p =>
  //       p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
  //       p.description.toLowerCase().includes(searchValue.toLowerCase())
  //   )

  //   return filteredProjects
  // }

  // const filteredProjects = filterProjects(orderedProjects, searchValue)

  const customMetadata = {
    url: 'https://sergiobarria.com/portfolio',
    title: 'Portfolio | Sergio Barria',
  }

  return (
    <Layout customMetadata={customMetadata}>
      {/* <div>
        <h1>Welcome to my Portfolio</h1>
        <hr className="my-6" />
        <p className="mb-6 prose max-w-none long-text dark:prose-invert">
          In this section I&apos;m showing some of the projects I&apos;ve worked
          on. You can find live demos, source code, which technologies I used
          and some short explanations of the project in general.
        </p>
      </div>

      <CurrentGoals />

      <Section>
        <SectionTitle title="Portfolio Projects" />
        <p className="my-6 long-text">
          Here you can see some of the projects I&apos;ve work on. Or filter
          using the search bar below in you&apos;re looking for something in
          particular.
        </p>

        <SearchBar
          setSearchValue={setSearchValue}
          placeholderText="Search for a project name, language or description..."
        />
        <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2">
          {filteredProjects.map((project: IProject) => (
            <SingleProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section> */}
    </Layout>
  )
}
