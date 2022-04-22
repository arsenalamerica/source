import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(context) {
    const initialProperties = await Document.getInitialProps(context);
    return { ...initialProperties };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link href='/favicon.ico' rel='icon' />

          <link
            href='/apple-touch-icon.png'
            rel='apple-touch-icon'
            sizes='180x180'
          />
          <link
            href='/favicon-32x32.png'
            rel='icon'
            sizes='32x32'
            type='image/png'
          />
          <link
            href='/favicon-16x16.png'
            rel='icon'
            sizes='16x16'
            type='image/png'
          />
          <link href='/site.webmanifest' rel='manifest' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
