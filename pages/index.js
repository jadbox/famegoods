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

        <div className="mt-2 mx-6 md:mx-0 md:mt-0 md:h-screen w-full lg:h-full lg:w-1/2 flex justify-center items-center">

          <div className="max-w-xl md:pl-32">
            <Link href="/">
              <div className="bg-transparent font-syne font-extrabold italic text-2xl md:text-4xl lg:text-4xl text-center order-1">
                <div className="bg-transparent font-syne font-extrabold text-3xl md:text-4xl lg:text-4xl text-center order-1 mb-5">
                  <img src="/DFAMEtext.svg" className="cursor-pointer w-3/4 hover:bg-gradient" />
                </div>
              </div>
            </Link>

            <h1 className="text-xs md:text-sm leading-normal mb-4 font-Karla">Search and Discover the passion economy</h1>

            <SearchInput></SearchInput>

            <Link href="/forefront_news">
              <div className="h-24 md:mt-4 w-full flex-shrink cursor-pointer">
                <img src="/News.svg" className="hover:shadow-xl rounded-lg" />
              </div>
            </Link>
          </div>
        </div>

        <div className="h-screen w-full lg:h-full lg:w-1/2">
          <div className="h-full md:w-4/5 lg:w-3/4 bg-no-repeat bg-center px-4 md:px-12 pt-16 md:overflow-auto">
            <div className="-mt-16 md:mt-24">
              <div className="flex flex-row items-center justify-between m-2">
                <h1 className="font-karla text-m font-semibold mb-2 md:ml-0 justify-items-start">Your Feed.</h1>
                <Icon icon={filterSolid} height="1.5em" />
              </div>
              <TPPCard></TPPCard>
            </div>
            <div className="mt-6">
              <TPPCard></TPPCard>
            </div>
            <div className="mt-6">
              <TPPCard></TPPCard>
            </div>
            <div className="mt-6">
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
