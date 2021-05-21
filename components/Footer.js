import SocialIcons from '@/components/SocialIcons';

const Footer = () => (
  <footer className="mt-8">
    <hr className="w-full border-gray-200 border-1 dark:border-gray-800" />
    <div className="flex flex-col items-center justify-center py-4 mt-4">
      <SocialIcons />
      <div className="flex flex-col items-center justify-center font-light">
        <p className="text-sm">
          &copy; Sergio Barria {new Date().getFullYear()}. All rights reserved.{' '}
        </p>
        <p className="text-sm">
          Built with{' '}
          <span className="font-semibold text-green-500 hover:text-green-700">
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next js
            </a>
          </span>{' '}
          and{' '}
          <span className="font-semibold text-green-500 hover:text-green-700">
            <a
              href="https://www.sanity.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDX
            </a>
          </span>{' '}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
