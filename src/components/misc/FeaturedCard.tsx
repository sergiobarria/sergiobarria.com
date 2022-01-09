import NextLink from 'next/link'
import NextImage from 'next/image'

export default function FeaturedCard() {
  return (
    <NextLink href="#">
      <article className="flex flex-col justify-between w-full h-full bg-white rounded-lg transition hover:scale-[1.03] hover:ring-1 dark:bg-gray-700 hover:shadow-md cursor-pointer">
        <NextImage
          src="/static/images/placeholder.jpeg"
          width={200}
          height={150}
          className="rounded-t-lg"
        />
        <div className="px-4 py-2">
          <h4>Post Title</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit id
            perspiciatis
          </p>
        </div>
      </article>
    </NextLink>
  )
}
