import { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import "../assets/main.css";
import { Provider } from "overmind-react";
import { overmind } from "../stores/Overmind";
import Head from "next/head";

import 'animate.css';
// import "../assets/player.css";
export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>DFAME</title>
      </Head>

      <Provider value={overmind}>
        <Layout url={router.pathname}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
