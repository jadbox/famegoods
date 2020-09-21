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
    <nav className="bg-white fixed h-16 w-1/2 z-10 top-0 rounded-b-lg md:rounded-none lg:rounded-none px-5">
      <div className="flex flex-row justify-between items-center md:w-1/2 lg:w-1/2">
        <div className="relative">
          <button
            onClick={e => setIsOpen(!isOpen)}
            className={isOpen ? "relative z-10 cursor-pointer focus:outline-none text-blue-400" : "relative z-10 cursor-pointer focus:outline-none hover:text-blue-400 text-black"}
          >
            <Icon icon={IconWalletSolid} className="h-12 w-12 p-2 bg-white rounded-full align-middle" />
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
        <div className="font-syne font-extrabold text-3xl text-center">
          <span>
            DFAME
        </span>
        </div>
        <div className="align-middle">
          <Icon icon={filterSolid} className="h-8 w-8 bg-white align-middle" color="#333333" />
        </div>
      </div>
    </nav>
  );
}