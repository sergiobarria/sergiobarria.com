import NextLink from 'next/link';

export default function MessageCard({ message }: { message: string }) {
  return (
    <div className='flex items-center justify-center bg-white rounded-lg shadow-md h-72'>
      <div className='flex flex-col items-center justify-center w-full h-full p-6 '>
        <div>
          {message === 'success' ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-16 h-16 text-green-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-16 h-16 text-red-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          )}
        </div>

        <div className='mt-2'>
          <p className='text-center long-text'>
            {message === 'success'
              ? "Thanks for reaching out! I'll be getting back to you as soon as possible"
              : 'Oopps! Something went wrong when sending your email, is not your fault. Please try again later.'}
          </p>
        </div>

        <div className='mt-10'>
          <NextLink href='/'>
            <a className='className="flex items-center send-form-btn focus:shadow-outline"'>
              Return Home
            </a>
          </NextLink>
        </div>
      </div>
    </div>
  );
}
