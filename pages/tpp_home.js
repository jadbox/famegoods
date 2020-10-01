import React from 'react';
import Link from "next/link";
import SearchInput from "../components/SearchInput"
import TPPCard from "../components/tpp/TPPCard"

const tppHome = () => {
    return (
        <div className="h-screen bg-top-blur bg-cover bg-fixed bg-no-repeat">
            <div className="lg:pt-18 w-full h-screen flex flex-wrap ">

                <div className="h-screen w-full lg:h-full lg:w-1/2 flex justify-center items-center">

                    <div className="max-w-xl pl-12 lg:pl-24">
                        <Link href="/">
                            <div className="bg-transparent font-syne font-extrabold italic text-2xl md:text-4xl lg:text-4xl text-center order-1">
                                <div className="bg-transparent font-syne font-extrabold text-3xl md:text-4xl lg:text-4xl text-center order-1 mb-5">
                                    <img src="/DFAMEtext.svg" className="cursor-pointer w-3/4 hover:bg-gradient" />
                                </div>
                            </div>
                        </Link>

                        <h1 className="text-s md:text-s leading-normal mb-4 font-Karla">Your social app for creator tokens, unique content & new community possibilities!</h1>

                        <SearchInput></SearchInput>

                        <div className="flex flex-row mb-3">
                            <div className="h-24 w-full flex-shrink mr-3">
                                <img src="/Trending.svg" />
                            </div>
                            <div className="h-24 w-full flex-shrink ml-3">
                                <img src="/AllCreators.svg" />
                            </div>
                        </div>
                        <div className="h-24 mt-12 w-full flex-shrink">
                            <img src="/News.svg" />
                        </div>
                    </div>
                </div>

                <div className="h-screen w-full lg:h-full lg:w-1/2">
                    <div className="h-full lg:w-3/4 bg-no-repeat bg-center pl-10 pt-16 lg:overflow-scroll">
                        <div className="mt-12">
                            <h1 className="font-karla text-xl mb-4">Your Feed.</h1>
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

export default tppHome;