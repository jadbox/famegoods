import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";

import { useOvermind } from "../stores/Overmind";
import * as Roll from "../utils/Roll";
import * as Wallet from "../utils/Web3Wallet";
import ConnectWallet from "../components/ConnectWallet";
import BottomSheetModal from "../components/BottomSheetModal";
import Header from "../components/header"
import Footer from "../components/footer";
import FeedTabs from "../components/feedTabs"
import TPPFooter from "../components/tpp/TPPfooter"


export default function Layout({ children, url }) {
  const [zoom, setZoom] = useState(1);
  const [_vanta, setVenta] = useState(null);
  const [state] = useState({ refresh: 0 });
  const element = useRef();

  // Overmind
  const { state: ostate, actions } = useOvermind();

  useEffect(() => {
    const tokenObj = Roll.getToken();
    if (tokenObj) actions.updateTokens(tokenObj);
    else {
      const walletObj = Wallet.getWalletData();
      if (!walletObj) return;
      actions.updateWalletData(walletObj);
    }
  }, []);

  // ==================
  // let zoom = 1;
  /* useScript({
    src: "https://cdn.jsdelivr.net/gh/tengbao/vanta/dist/vanta.waves.min.js",
    checkForExisting: true,
    onload: () => setState((x) => ({ ...x, refresh: x.refresh + 1 })),
  }); */

  useEffect(() => {
    return;

    if (url === "/") setZoom(2);
    else if (url === "/upload") setZoom(1.5);
    else if (url === "/profile") setZoom(1);
    else setZoom(1);
    // console.log("aaaa", !!_vanta, zoom);

    if (!_vanta) return;
    _vanta.setOptions({
      zoom: zoom,
      el: element.current,
    });
  }, [url, element.current, zoom, _vanta]);

  useEffect(() => {
    return;

    if (_vanta2) return;

    if (!window.VANTA) {
      /* setTimeout(_=>{
         setState(x=>({...x, refresh: x.refresh+1}))
       }, 100);
       */
      return;
    }
    const _vanta2 = window.VANTA.WAVES({
      el: element.current,
      mouseControls: false,
      touchControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.5,
      scaleMobile: 1.0,
      shininess: 8,
      waveSpeed: 0.6,
      color: 0x5a88,
      zoom: 2,
    });

    _vanta2.setOptions({
      zoom: 2,
    });
    setVenta(_vanta2);

    return () => _vanta2.destroy();
  }, [state]);

  // Previous parent css removed: "grid grid-rows-3" style={{ gridTemplateRows: 'auto 1fr auto' }}

  const { walletConnectModal, redirectTo } = ostate.application;

  return (
    <div ref={element} className="w-screen h-screen">
      <Head></Head>

      <Header></Header>

      <div>{children}</div>

      <TPPFooter></TPPFooter>
      {/*<Footer></Footer>*/}

      {walletConnectModal ? (
        <BottomSheetModal onExit={actions.toggleWalletConnectModal}>
          <ConnectWallet redirectTo={redirectTo} />
        </BottomSheetModal>
      ) : null}
    </div>
  );
}

/*
<script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r118/three.min.js"
          defer
        ></script>



 <header className="flex fixed top-0 w-full h-12 border-solid border-b-4 border-gray-300 bg-white z-50">
        <div className="flex items-center justify-between w-full px-3 py-2 z-auto">
          <Icon icon={walletSolid} height="2em" />
          <div className="inline-block font-header text-3xl">DFAME</div>
          <Icon icon={paperPlane} height="2em" />
        </div>
      </header>
      */
