// import 'tailwindcss/tailwind.css';
import '@/styles/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '@/lib/gtag';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import MDXComponents from '@/components/utils/MDXComponents';

import Layout from '@/components/layout/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <DefaultSeo {...SEO} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
