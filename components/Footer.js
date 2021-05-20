import SocialIcons from '@/components/social-icons';
import siteMetadata from '@/data/siteMetadata';

const Footer = () => (
  <footer>
    <div className="flex flex-col items-center justify-center py-4 mt-16">
      <div className="flex items-center mb-3 space-x-8">
        <SocialIcons
          kind="mail"
          href={`mailto:${siteMetadata.email}`}
          size="6"
        />
        <SocialIcons
          kind="github"
          href={`mailto:${siteMetadata.email}`}
          size="6"
        />
        <SocialIcons
          kind="twitter"
          href={`mailto:${siteMetadata.email}`}
          size="6"
        />
        <SocialIcons
          kind="instagram"
          href={`mailto:${siteMetadata.email}`}
          size="6"
        />
        <SocialIcons
          kind="linkedin"
          href={`mailto:${siteMetadata.email}`}
          size="6"
        />
      </div>
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
        {/* <p className="text-sm">
          
          <br />
          Built with{' '}
          <span className="font-medium text-gradient my-gradient">
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next js
            </a>
          </span>{' '}
          and{' '}
          <span className="font-medium text-gradient my-gradient">
            <a
              href="https://www.sanity.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDX
            </a>
          </span>{' '}
        </p> */}
      </div>
    </div>
  </footer>
);

export default Footer;
