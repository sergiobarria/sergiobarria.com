import { PropsWithChildren } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '@/components/navigation/Header'
import Footer from './Footer'

import { ICustomMetadata } from '@/types/interfaces'

interface IPropsMetadata {
  customMetadata?: ICustomMetadata
}

export default function Container({
  children,
  customMetadata,
}: PropsWithChildren<IPropsMetadata>) {
  const router = useRouter()

  const metadata = {
    title: 'Sergio Barria - Engineer, developer and writer',
    description:
      'Personal blog portfolio website. Created with Next.js, GraphCMS, and Tailwind CSS',
    image: 'https://www.sergiobarria.com/static/images/banner.png',
    type: 'website',
    keywords:
      "Sergio Barria's blog, HTML, CSS, JavaScript, Next js, Gatsby, React, Node, View, Tailwind CSS, React Native, Flutter",
    ...customMetadata,
  }

  return (
    <div className="flex flex-col max-w-screen-md min-h-screen mx-4 md:px-4 md:mx-auto lg:px-0">
      <Head>
        <title>{metadata.title}</title>
        <meta name="robots" content="index, follow" />
        <meta content={metadata.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.sergiobarria.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.sergiobarria.com${router.asPath}`}
        />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:site_name" content="Sergio Barria" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sergioBarria01" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
        <meta name="keywords" content={metadata.keywords} />
        {metadata.date && (
          <meta property="article:published_time" content={metadata.date} />
        )}
      </Head>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
