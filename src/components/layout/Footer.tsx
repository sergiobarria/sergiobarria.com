export default function Footer() {
  // const styles = {
  //   anchorTag:
  // }

  return (
    <footer className="flex items-center justify-center py-8 mt-16 border-t-[1px]">
      <div className="text-center">
        <p>
          Sergio Barria &middot; <span>&copy; {new Date().getFullYear()}</span>
        </p>
        <p>
          Built with{' '}
          <a
            href="https://nextjs.org/"
            className="font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          ,{' '}
          <a
            href="https://tailwindcss.com/"
            className="font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  )
}
