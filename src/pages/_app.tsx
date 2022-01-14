import { useEffect } from 'react'

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import '@/styles/dracula.css'

// import 'react-toastify/dist/ReactToastify.css'
import * as gtag from '@/lib/gtag'

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

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}
