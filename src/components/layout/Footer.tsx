export default function Footer() {
  // const styles = {
  //   anchorTag:
  // }

  return (
    <footer className="flex items-center justify-center py-8 mt-16 border-t-[1px]">
      <div className="text-center">
        <p className="flex items-center justify-center text-sm">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="mx-1 text-3xl">&middot;</span>
          <span>Sergio Barria</span>
        </p>
        <p className="text-sm">
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
