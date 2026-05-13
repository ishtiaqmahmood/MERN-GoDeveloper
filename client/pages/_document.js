import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://kit.fontawesome.com/a891f3e157.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </body>
    </Html>
  );
}
