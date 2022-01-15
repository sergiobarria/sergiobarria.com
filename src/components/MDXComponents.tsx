import Image from 'next/image';

// import Link from 'next/link'
import CodeBlock, { Pre } from './CodeBlock';
import CustomLink from './CustomLink';
import CloudinaryImage from './images/CloudinaryImage';
import Step from './misc/Step';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CodeBlock,
  CloudinaryImage,
  Step,
};

export default MDXComponents;
