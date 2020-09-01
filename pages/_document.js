import Document, { Html, Head, Main, NextScript } from "next/document";

class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="description"
            content="Read the latest news in a minute with newspaper, connected with google news"
          />
          <meta
            name="keywords"
            content="Newspaper,theo,mazars,theo mazars,google news"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            href="/logos/logo16.png"
            rel="icon"
            type="image/png"
            sizes="16x16"
          />
          <link
            href="/logos/logo32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href="/logos/logo64.png"
            rel="icon"
            type="image/png"
            sizes="64x64"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Newspaper" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <link rel="apple-touch-icon" href="/logos/logo192.png" />
          <meta name="msapplication-navbutton-color" content="#ffffff" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
          <meta name="msapplication-config" content="browserconfig.xml" />
          <meta name="application-name" content="Newspaper" />
          <meta name="msapplication-tooltip" content="Latest news app" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="full-screen" content="yes" />
          <meta name="browsermode" content="application" />
          <meta name="nightmode" content="enable/disable" />
          <meta name="layoutmode" content="fitscreen/standard" />
          <meta name="imagemode" content="force" />
          <meta name="screen-orientation" content="portrait" />
        </Head>
        <body>
          <noscript>You need to enable JavaScript to use this app</noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;
