import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import IconWalletSolid from "@iconify/icons-la/wallet-solid";
import { useOvermind } from "../stores/Overmind";


export default function Header() {
  const { state: ostate, actions } = useOvermind();
  return (
    <nav className="bg-white pt-4 pb-2 justify-left fixed w-full z-10 top-0 rounded-b-lg px-5">
      <div className="container font-head text-center">
        <h3 className="font-head text-3xl text-center">
          DFAME
        </h3>
        {!ostate.user.isAuthenticated ? (
          <a onClick={actions.toggleWalletConnectModal}>
            <Icon icon={IconWalletSolid} className="h-8 w-8" />
          </a>
        ) : null}
      </div>
    </nav>
  );
}