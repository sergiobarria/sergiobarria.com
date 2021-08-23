import NextImage from 'next/image';
import NextLink from 'next/link';

const Logo = () => (
  <NextLink href="/">
    <a>
      <NextImage
        src="/static/layout-assets/logo-web-indigo.svg"
        alt="Sergio's Website Logo"
        width={175}
        height={70}
        className="cursor-pointer"
      />
    </a>
  </NextLink>
);

export default Logo;
