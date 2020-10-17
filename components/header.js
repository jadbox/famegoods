import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import Link from "next/link";
import * as Roll from "../utils/Roll";
import * as Wallet from "../utils/Web3Wallet";
import IconWalletSolid from "@iconify/icons-la/wallet-solid";
import filterSolid from '@iconify/icons-la/filter-solid';
import SearchInputSmall from "../components/SearchInputSmall"
import { useOvermind } from "../stores/Overmind";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Better to use Overmind state for wallet connection checks?
  const { state: ostate, actions } = useOvermind();

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => { document.removeEventListener('keydown', handleEscape); }
  }, [])

  const handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <nav className="bg-opacity-100 fixed h-12 lg:h-16 md:h-16 w-full md:w-5/6 lg:w-5/6 z-10 top-0 pl-3 mt-4 align-center">
      <div className="w-screen flex flex-row items-center p-1 justify-between">
        <div className="w-3/4 md:w-1/2 h-10 flex order-2 mr-3">
          <SearchInputSmall></SearchInputSmall>
        </div>
        <div className="order-3">
          <button
            onClick={e => setIsOpen(!isOpen)}
            className={isOpen ? "relative z-10 cursor-pointer focus:outline-none bg-white border-2 border-gray-200 rounded-lg shadow align-middle pr-4 pl-3 mr-6 md:mr-16 justify-center font-karla whitespace-no-wrap" :
              "relative z-10 cursor-pointer focus:outline-none hover:shadow text-black bg-white border-2 border-gray-200 rounded-lg shadow-lg align-middle pr-4 pl-3 mr-6 md:mr-16 justify-center font-karla whitespace-no-wrap "}
          >
            {Wallet.checkForWebWallet() || Roll.checkForRoll() ? <div className="rounded-full inline-block align-middle h-2 w-2 m-1 bg-green-500"></div> : null}

            <Icon icon={IconWalletSolid} width="20" height="20" className="relative inline-block align-middle md:m-1" />
            <span className="text-nonexist md:text-xs lg:text-md font-bold align-middle inline-block">Wallet</span>
          </button>
          {isOpen
            ? (
              <>
                <button
                  onClick={e => setIsOpen(false)}
                  tabIndex="-1"
                  className="fixed inset-0 w-full h-full bg-transparent cursor-default">
                >
                </button>
                <div className="fixed mt-4 mr-2 md:mr-12 right-0 w-48 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
                  <Link href="/roll_exchange">
                    <a className="block px-4 py-2 rounded-lg hover:bg-black hover:text-white">Buy Tokens</a>
                  </Link>
                  <Link href="/roll_transfer">
                    <a className="block px-4 py-2 rounded-lg hover:bg-black hover:text-white">Transfer Tokens</a>
                  </Link>
                  <a
                    href={Roll.loginUrl()}
                    className="block px-4 py-2 rounded-lg hover:bg-black hover:text-white">                    
                    {Wallet.checkForWebWallet() || Roll.checkForRoll() ? <p>Change Wallet</p> : <p>Connect a Wallet</p>}
                  </a>
                </div>
              </>
            ) : null
          }
        </div>
        <Link href="/">
          <div className="md:ml-8 sm:mr-10 text-lg text-gray-700 md:flex hidden md:visible">
            <div className="bg-transparent font-syne font-extrabold text-3xl md:text-4xl lg:text-4xl text-center order-1">
              <img src="/DFAMEtext.svg" className="cursor-pointer w-32 hover:bg-gradient" />
            </div>
          </div>
        </Link>
        {/* <div className="align-middle order-3 order-3">
          <Icon icon={filterSolid} className="h-8 w-8 bg-white align-middle" color="#333333" />
        </div>*/}
      </div>
    </nav >
  );
}