import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import * as gtag from '@/lib/gtag';

import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import MDXComponents from '@/components/utils/MDXComponents';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/tailwind.css';

import Layout from '@/components/layout/Layout';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps, router }) {
  const routerHook = useRouter();

  const variants = {
    pageInitial: { opacity: 0 },
    pageAnimate: { opacity: 1 },
  };

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url);
    };
    routerHook.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      routerHook.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [routerHook.events]);

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <DefaultSeo {...SEO} />
        <Layout>
          <motion.div
            key={router.route}
            variants={variants}
            initial="pageInitial"
            animate="pageAnimate"
          >
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
