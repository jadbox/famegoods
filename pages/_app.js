import { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import "../assets/main.css";
import { Provider } from "overmind-react";
import { overmind } from "../stores/Overmind";
// import "../assets/player.css";
export default function App({ Component, pageProps, router }) {
  return (
    <Provider value={overmind}>
      <Layout url={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
