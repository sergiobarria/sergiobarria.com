import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import '@/styles/dracula.min.css';
import 'react-toastify/dist/ReactToastify.css';

import * as gtag from '@/lib/gtag';

import Layout from '@/components/layout-main/Layout';

import SEO from '../../next-seo.config';

export default function MyApp({ Component, pageProps }: AppProps) {
  const routerHook = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    // When component is mounted, subscribe to router changes
    // and log those page views
    routerHook.events.on('routeChangeComplete', handleRouteChange);

    // If component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      routerHook.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [routerHook.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <ThemeProvider enableSystem={true} attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
