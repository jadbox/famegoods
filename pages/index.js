import React from 'react';
import Link from "next/link";
import SearchInput from "../components/SearchInput"
import TPPCard from "../components/tpp/TPPCard"
import { Icon } from '@iconify/react';
import filterSolid from '@iconify/icons-la/filter-solid';



const TppHome = () => {
  return (
    <div className="h-screen w-screen fixed  overflow-auto">
      <div className="w-full md:h-full flex flex-wrap">

        <div className="mt-24 md:mx-0 -ml-4 md:ml-0 md:mt-40 lg:mt-0 md:h-64 mb-4 md:mb-0 w-full lg:h-full lg:w-1/2 flex justify-center items-center">

          <div className="max-w-xl lg:pl-32">
            <Link href="/">
              <div className="bg-transparent font-syne font-extrabold italic text-2xl md:text-4xl lg:text-4xl text-center order-1">
                <div className="bg-transparent font-syne font-extrabold text-3xl md:text-4xl lg:text-4xl text-center order-1 mb-5">
                  <img src="/DFAMEtext.svg" className="cursor-pointer w-3/4 hover:bg-gradient" />
                </div>
              </div>
            </Link>

            <p className="text-xs md:text-sm leading-normal mb-4 font-Karla">Search and Discover the passion economy</p>

            <SearchInput></SearchInput>

            <Link href="/forefront_news">
              <div className="h-24 md:mt-4 w-full hidden md:flex flex-shrink cursor-pointer">
                <img src="/News.svg" className="rounded-lg" />
              </div>
            </Link>
            <div className="flex flex-row justify-end mt-2">
              <p className="text-xs md:text-sm leading-normal mb-4 font-Karla text-gray-500 hover:text-black cursor-pointer px-2">About</p>
              <p className="text-xs md:text-sm leading-normal mb-4 font-Karla text-gray-500 hover:text-black cursor-pointer px-2">Launch your Token</p>
              <p className="text-xs md:text-sm leading-normal mb-4 font-Karla text-gray-500 hover:text-black cursor-pointer px-2">Privacy</p>
              <p className="text-xs md:text-sm leading-normal mb-4 font-Karla text-gray-500 hover:text-black cursor-pointer px-2">Terms & Conditions</p>
            </div>
          </div>
        </div>

        <div className="h-screen w-full lg:h-full lg:w-1/2 md:flex md:flex-col md:items-center lg:block lg:flex-none">
          <div className="h-full md:w-4/5 lg:w-3/4 bg-no-repeat bg-center px-4 md:px-12 pt-16 md:overflow-auto">
            <div className="-mt-16 md:mt-12 lg:mt-24">
              <div className="flex flex-row items-center justify-between m-2">
                <h1 className="font-karla text-m font-semibold mb-2 md:ml-0 justify-items-start">Your Feed.</h1>
                <Icon icon={filterSolid} height="1.5em" />
              </div>
              <TPPCard></TPPCard>
            </div>
            <div className="mt-12">
              <TPPCard></TPPCard>
            </div>
            <div className="mt-12">
              <TPPCard></TPPCard>
            </div>
            <div className="mt-12">
              <TPPCard></TPPCard>
            </div>
          </div>
        </div>

      </div >
    </div>
  );
};

export default function Index() {
  return <TppHome />
}