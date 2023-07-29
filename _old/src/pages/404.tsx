import NextImage from 'next/image';
import NextLink from 'next/link';

// import Layout from '@/components/layout-main/Layout';

export default function NotFoundPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <NextImage
          src='/static/images/not-found.jpg'
          width={300}
          height={300}
          className='rounded-full '
        />
        <div className='flex flex-col items-center justify-center max-w-2xl mx-auto mt-16'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white'>
            404 – Ooops!
          </h1>
          <p className='mb-8 text-center text-gray-600 dark:text-gray-400'>
            Seems that you reached a super secret page and I can&apos;t allow
            you to pass. I&apos;m sorry but the world may very well depend on
            it.
          </p>
          <NextLink href='/'>
            <a className='w-2/6 p-1 mx-auto font-bold text-center text-gray-800 transition duration-300 rounded-md bg-amber-400 hover:shadow-lg hover:scale-105 sm:p-4 dark:bg-gray-900 dark:text-white'>
              Return Home
            </a>
          </NextLink>
        </div>
      </div>
    </>
  );
}
