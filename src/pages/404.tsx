import NextLink from 'next/link'

import MainContainer from '@/components/layout/MainContainer'

export default function NotFoundPage() {
  return (
    <MainContainer>
      <div className="h-72">
        <iframe
          src="https://giphy.com/embed/UoeaPqYrimha6rdTFV"
          width="100%"
          height="100%"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mt-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          404 – Ooops!
        </h1>
        <p className="mb-8 text-center text-gray-600 dark:text-gray-400">
          Seems that you reached a super secret page and I can&apos;t allow you
          to pass. I&apos;m sorry but the world may very well depend on it.
        </p>
        <NextLink href="/">
          <a className="w-2/6 p-1 mx-auto font-bold text-center text-gray-800 transition duration-300 bg-teal-400 rounded-md hover:shadow-lg hover:scale-105 sm:p-4 dark:bg-gray-900 dark:text-white">
            Return Home
          </a>
        </NextLink>
      </div>
    </MainContainer>
  )
}
