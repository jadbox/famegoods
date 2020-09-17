import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import * as Roll from "../utils/Roll";
import IconWalletSolid from "@iconify/icons-la/wallet-solid";

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
    <nav className="px-5 pt-4 pb-2 w-full z-10 justify-left fixed top-0 bg-white rounded-b-lg ">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <h3
          style={{
            fontStyle: "italic",
            fontSize: "1.4em",
            fontWeight: 800,
            color: "black",
          }}
        >
          🔥 WHAT'S HOT
        </h3>

        <div className="relative">
          <button 
            onClick={e => setIsOpen(!isOpen)} 
            className={isOpen ? "relative z-10 cursor-pointer focus:outline-none text-blue-400" : "relative z-10 cursor-pointer focus:outline-none hover:text-blue-400 text-black"}
          >
            <Icon icon={IconWalletSolid} className="h-12 w-12 p-2 bg-white rounded-full" />            
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
      </div>
    </nav>
  );
}
