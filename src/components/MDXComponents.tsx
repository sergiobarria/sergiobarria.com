import Image from 'next/image'

// import Link from 'next/link'
import CodeBlock, { Pre } from './CodeBlock'
import CustomLink from './CustomLink'
import CloudinaryImage from './images/CloudinaryImage'

const MDXComponents = {
  a: CustomLink,
  Image,
  pre: Pre,
  code: CodeBlock,
  CloudinaryImage,
}

export default MDXComponents
