import SocialIcons from '../misc/SocialIcons'

export default function Footer() {
  return (
    <footer className="flex items-center justify-center py-8 border-t-[1px] border-gray-200 dark:border-gray-500">
      <div className="flex flex-col items-center text-center">
        <SocialIcons />
        <p className="flex items-center justify-center mt-4 text-sm long-text">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="mx-1 text-3xl">&middot;</span>
          <span>Sergio Barria</span>
        </p>
        <p className="text-sm long-text">
          Built with{' '}
          <a
            href="https://nextjs.org/"
            className="font-semibold transition duration-300 ease-in-out hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          ,{' '}
          <a
            href="https://tailwindcss.com/"
            className="font-semibold transition duration-300 ease-in-out hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
          . Content with{' '}
          <a
            href="https://graphcms.com/"
            className="font-semibold transition duration-300 ease-in-out hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            GraphCMS
          </a>
        </p>
      </div>
    </footer>
  )
}
