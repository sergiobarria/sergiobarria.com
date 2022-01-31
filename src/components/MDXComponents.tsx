import Image from 'next/image';

import CloudinaryImage from './CloudinaryImage';
import CodeBlock, { Pre } from './CodeBlock';
import CustomLink from './CustomLink';
import Step from './Step';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CodeBlock,
  CloudinaryImage,
  Step,
};

export default MDXComponents;
