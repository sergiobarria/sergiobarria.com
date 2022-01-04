import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'

import * as gtag from '@/lib/gtag'
import '@/styles/tailwind.css'

// import { MDXProvider } from '@mdx-js/react';
// import MDXComponents from '@/components/utils/MDXComponents';

// import 'react-toastify/dist/ReactToastify.css'

// import { DefaultSeo } from 'next-seo'
// import SEO from '../next-seo.config';

// TODO: if not used, remove router from _app props

export default function MyApp({ Component, pageProps, router }: AppProps) {
  const routerHook = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    // When component is mounted, subscribe to router changes
    // and log those page views
    routerHook.events.on('routeChangeComplete', handleRouteChange)

    // If component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      routerHook.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [routerHook.events])

  // TODO: Add SEO
  // TODO: Update Layout
  return (
    <>
      {/* <DefaultSeo {...SEO} /> */}
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
