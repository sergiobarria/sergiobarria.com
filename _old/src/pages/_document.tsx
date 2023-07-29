import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import clsx from 'clsx';

import Favicon from '@/components/static/Favicon';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <Favicon />
        </Head>
        <body
          className={clsx(
            // 'antialiased',
            'bg-gray-50 dark:bg-gray-900',
            process.env.NODE_ENV === 'development' && 'debug-screens'
          )}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
