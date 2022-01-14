import NextImage from 'next/image'
import NextLink from 'next/link'

interface IProps {
  resolvedTheme?: string
}

export default function Logo({ resolvedTheme }: IProps) {
  return (
    <NextLink href="/">
      <a>
        <NextImage
          src={`/static/images/logo-${
            resolvedTheme === 'light' ? 'black' : 'white'
          }.svg`}
          width={60}
          height={60}
        />
      </a>
    </NextLink>
  )
}
