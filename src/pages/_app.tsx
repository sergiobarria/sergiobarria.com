import { useEffect } from 'react';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import '@/styles/syntax-highlight.css';

import * as gtag from '@/lib/gtag';

import Layout from '@/components/layout-main/Layout';

import SEO from '../../next-seo.config';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    // When component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />

      <ThemeProvider enableSystem={true} attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

      {/* Google Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='google-tag'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
    </>
  );
}
