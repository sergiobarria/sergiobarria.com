import NextLink from 'next/link'

import CustomSection from '../misc/CustomSection'
import SectionTitle from '../misc/SectionTitle'

export default function FeaturedPosts() {
  return (
    <CustomSection>
      <SectionTitle title="Featured Posts" />
      <article className="mt-6">
        <p className="text-gray-400">August 14, 2021</p>
        <h3 className="transition-all duration-300 heading-3 hover:text-gray-700 hover:scale-[1.01]">
          <NextLink href="#">
            How to link and display your latest blog posts to your Github
            Profile
          </NextLink>
        </h3>
        <p>
          In this guide, we’ll see an easy way of linking our latest blog posts
          to our Github profile using a…
        </p>
        <hr className="my-4" />
      </article>
      <article className="mt-6">
        <p className="text-gray-400">August 14, 2021</p>
        <h3 className="transition-all duration-300 heading-3 hover:text-gray-700 hover:scale-[1.01]">
          <NextLink href="#">
            How to link and display your latest blog posts to your Github
            Profile
          </NextLink>
        </h3>
        <p>
          In this guide, we’ll see an easy way of linking our latest blog posts
          to our Github profile using a…
        </p>
        <hr className="my-4" />
      </article>
      <article className="mt-6">
        <p className="text-gray-400">August 14, 2021</p>
        <h3 className="transition-all duration-300 heading-3 hover:text-gray-700 hover:scale-[1.01]">
          <NextLink href="#">
            How to link and display your latest blog posts to your Github
            Profile
          </NextLink>
        </h3>
        <p>
          In this guide, we’ll see an easy way of linking our latest blog posts
          to our Github profile using a…
        </p>
        <hr className="my-4" />
      </article>
    </CustomSection>
  )
}
