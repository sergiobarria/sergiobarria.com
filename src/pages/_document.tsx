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
          {/* Font - Lato */}
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
            rel='stylesheet'
          />

          <Favicon />
        </Head>
        <body
          className={clsx(
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
