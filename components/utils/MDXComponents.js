import NextLink from 'next/link';
import Image from 'next/image';

const CustomLink = props => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...props} /> // eslint-disable-line
      </NextLink>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
};

export default MDXComponents;
