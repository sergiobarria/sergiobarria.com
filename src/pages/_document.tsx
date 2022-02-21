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
          {/* Font - Inter */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap'
            rel='stylesheet'
          />

          <Favicon />
        </Head>
        <body
          className={clsx(
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
