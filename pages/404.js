import NextLink from 'next/link';

import Container from '@/components/Container';

export default function NotFoundPage() {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          404 – Ooops!
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          Seems that you reached a super secret page and I can't allow you to
          pass it. I'm sorry but the world depends on it
        </p>
        <NextLink href="/">
          <a className="w-64 p-1 mx-auto font-bold text-center text-gray-800 bg-gray-200 rounded-md sm:p-4 dark:bg-gray-900 dark:text-white">
            Return Home
          </a>
        </NextLink>
      </div>
    </Container>
  );
}
