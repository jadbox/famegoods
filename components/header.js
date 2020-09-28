import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import Link from "next/link";
import * as Roll from "../utils/Roll";
import IconWalletSolid from "@iconify/icons-la/wallet-solid";
import filterSolid from '@iconify/icons-la/filter-solid';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleEscape = (e) => {
    if (e.key === 'Esc' || e.key === 'Escape') {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => { document.removeEventListener('keydown', handleEscape); }
  }, [])

  return (
    <nav className="bg-opacity-100 fixed h-12 lg:h-16 md:h-16 w-full md:w-5/6 lg:w-5/6 z-10 top-0 rounded-b-lg md:rounded-none lg:rounded-none px-5 align-center">
      <div className="flex flex-row justify-between items-center mt-2 md:mt-0 lg:mt-0">
        <div className="relative order-2 justify-end">
          <button
            onClick={e => setIsOpen(!isOpen)}
            className={isOpen ? "relative z-10 cursor-pointer focus:outline-none text-blue-400 align-middle justify-center font-karla whitespace-no-wrap md:mt-2 lg:mt-2" : "relative z-10 cursor-pointer focus:outline-none hover:text-blue-400 text-black align-middle justify-center font-karla whitespace-no-wrap md:mt-4 lg:mt-4 "}
          >
            <Icon icon={IconWalletSolid} className="h-8 w-8 md:h-12 md:w-12 lg:w-12 lg:w-12 md:p-2 lg:p-2 bg-transparent rounded-full align-middle inline-block relative" />
            <span className="text-nonexist md:text-sm lg:text-md font-bold md:visible lg:visible align-middle inline-block">Wallet</span>
          </button>
          {isOpen
            ? (
              <>
                <button
                  onClick={e => setIsOpen(false)}
                  tabIndex="-1"
                  className="fixed inset-0 w-full h-full bg-black opacity-50 cursor-default">
                </button>
                <div className="absolute right-0 w-48 bg-white border-2 border-gray-300 rounded-lg shadow-lg">
                  <Link href="/roll_exchange">
                    <a className="block px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white">Buy Tokens</a>
                  </Link>
                  <Link href="/roll_transfer">
                    <a className="block px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white">Transfer Tokens</a>
                  </Link>
                  <a
                    href={Roll.loginUrl()}
                    className="block px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white">
                    Connect a Wallet
                  </a>
                </div>
              </>
            ) : null
          }
        </div>
        <Link href="/">
          <div className="bg-transparent font-syne font-extrabold italic text-2xl md:text-4xl lg:text-4xl text-center order-1">
            <div className="bg-transparent font-syne font-extrabold text-3xl md:text-4xl lg:text-4xl text-center order-1">
              <img src="/DFAMEtext.svg" className="cursor-pointer w-32 hover:bg-gradient" />
            </div>
          </div>
        </Link>
        {/* <div className="align-middle order-3 order-3">
          <Icon icon={filterSolid} className="h-8 w-8 bg-white align-middle" color="#333333" />
        </div>*/}
      </div>
    </nav>
  );
}