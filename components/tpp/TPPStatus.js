import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import SetTicket from "../upload/SetTicket";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function tppstatus() {

    return (
        <div className="min-w-screen min-h-screen flex items-center justify-center">
            <div className="rounded-xl shadow-xl overflow-hidden w-11/12 md:10/12 lg:w-9/12 md:flex">
                <div className="flex w-full md:w-1/2 p-6 md:p-8 bg-white text-gray-600 items-center">
                    <div className="w-full break-words font-normal text-md text-gray-700 font-karla tracking-wider m-auto">
                        <div>
                            <div class="md:flex-shrink-0">
                                <img class="rounded-xl shadow-md md:w-full" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase" />
                            </div>
                            <div className="flex w-full items-center text-sm text-gray-300 font-medium absolute z-10">
                                <div className="flex-1 flex items-center bottom-0 pb-4 px-4 absolute z-10">
                                    <img className="rounded-full w-8 h-8 mr-3 transition-all duration-300 scale-100 hover:scale-95" src="https://ghost.org/icons/icon-512x512.png?v=7b7c010c4f88a275be80db697657cff6" />
                                    <div>Ghost</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full text-xs">
                            <h2 className="text-black font-karla text-xl font-bold leading-tight bottom-0 pt-6 pmd:b-2">Tasnim Lacey New Album Out&nbsp;Now</h2>
                            <p className="text-sm mt-2 font-Karla">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-white pt-0 pb-8 md:py-10 p-6 md:pr-8">
                    <div className="w-full bg-gray-200 rounded-pill rounded-full h-1"></div>
                    <div className="flex justify-between my-4">
                        <div className="flex flex-row">
                            <p className="font-karla text-s md:text-xl font-semibold">You need: </p>
                            <p className="pl-2 font-karla text-s md:text-xl font-semibold tracking-wide text-green-400">124</p>
                            <p className="font-karla text-xs md:text md:font-semibold tracking-wide text-green-400">TKEN</p>
                        </div>
                        <div className="h-8 bg-gray-200 rounded-pill rounded-full w-1"></div>
                        <div className="flex flex-row">
                            <p className="font-karla text-s md:text-xl font-semibold ">Your balance: </p>
                            <p className="pl-2 font-karla text-s md:text-xl font-semibold tracking-wide text-red-400 ">80</p>
                            <p className="font-karla text-xs md:text-sm md:font-semibold tracking-wide text-red-400">TKEN</p>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-pill rounded-full h-1"></div>
                    <div className="flex flex-col items-center">
                        <p className="leading-normal mt-4 font-Karla">Sorry...You do not hold enough tokens to acess the content. This link is a special token gated link only accessible to the creators community. Pleas buy some of the creators tokens to acess the page:</p>
                        <button className="rounded-full bg-black text-white font-karla py-4 px-8 mt-12">Buy Tokens</button>
                    </div>
                </div>
            </div>
        </div >
    );
}