import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="https://vjs.zencdn.net/7.8.4/video-js.css" rel="stylesheet" />

          <link
            href="https://assets.website-files.com/5f305ad8d02acc9affb63d10/5f3072d448c0a72cd77bc6cb_DFAME-Icon32px.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link
            href="https://assets.website-files.com/5f305ad8d02acc9affb63d10/5f3072da856f6e19788fa9b4_DFAME-Icon256px.png"
            rel="apple-touch-icon"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="https://unpkg.com/share-api-polyfill/dist/share-min.js"></script>
        </body>

        <script src="https://vjs.zencdn.net/7.8.4/video.js"></script>
        <script src="/youtube.min.2.6.1.js"></script>
      </Html>
    );
  }
}

export default CustomDocument;
