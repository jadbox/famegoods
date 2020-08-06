import { Provider } from "mobx-react";
import { useStore } from "../store";
import { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import "../assets/main.css";
// import "../assets/player.css";
import "mobx-react-lite/batchingForReactDom";
import { appStoreContext } from "stores/AppStore";
/*
import "../vendor/styles/index.scss";
import "../vendor/styles/Edit.scss";
import "../vendor/styles/Modals.scss";
import "../vendor/styles/emoji-mart.css";
*/

export default function App({ Component, pageProps, router }) {
  const store = useStore(pageProps.initialState);

  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <appStoreContext.Provider>
        <Layout url={router.pathname}>
          <Component {...pageProps} />
        </Layout>
      </appStoreContext.Provider>
    </Provider>
  );
}
