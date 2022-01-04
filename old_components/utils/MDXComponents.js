import NextLink from 'next/link';
import { CodeBlock } from './CodeBlock';

const CustomLink = props => {
  const { href } = props;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a {...props} className="text-main" /> // eslint-disable-line
      </NextLink>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  pre: props => <div {...props} />,
  code: CodeBlock,
};

export default MDXComponents;
