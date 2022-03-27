import Image from 'next/image';

import CalloutBox from '../CalloutBox';
import CloudinaryImage from '../CloudinaryImage';
import CodeBlock, { Pre } from '../CodeBlock';
import CustomLink from '../links/CustomLink';
import Step from '../Step';

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CodeBlock,
  CloudinaryImage,
  CalloutBox,
  Step,
};

export default MDXComponents;
