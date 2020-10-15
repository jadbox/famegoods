import React, { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import SetTicket from "../upload/SetTicket";
import Link from "next/link";
import { useRouter } from 'next/router'
import { Icon } from "@iconify/react";
import TPPProfileHeader from "../../components/tpp/TPPProfileHeader";
import lockSolid from '@iconify/icons-la/lock-solid';

export default function TPPCard({ gif, file }) {



    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center snap-center always-stop">
            <div
                className="relative bg-white bg-opacity-50 border-solid border-2 border-gray-200 shadow-md hover:shadow rounded-xl w-full justify-center cursor-pointer overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
            >
                <div className="flex absolute top-0 right-0 left-0 p-4 md:p-6 md:mb-2 mt-1 md:mt-0 items-center">
                    <TPPProfileHeader></TPPProfileHeader>
                    <div className="flex flex-row justify-end">
                        <button className="top-0 right-0 w-full text-center bg-black font-karla rounded-full py-2 px-4 flex flex-row items-center justify-center">
                            <Icon icon={lockSolid} color="white" className="w-4 h-6 ml-0 md:ml-2 lg:ml-2" />
                            <p className="text-white font-karla text-xs align-middle inline-block ml-2">150 TKNS</p>
                        </button>
                    </div>
                </div>
                <div className="justify-center mt-24">
                    <div className="w-full px-4 md:px-6 break-words font-normal text-md text-gray-700 font-karla tracking-wider m-auto">
                        <div className="mb-2">
                            <div className="md:flex-shrink-0">
                                <img className="rounded-lg md:w-full z-10" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase" />
                            </div>
                            <div className="h-12 absolute"></div>
                            <div className="flex w-full items-center text-sm text-gray-300 font-medium absolute z-50">
                                <div className="flex-1 flex items-center bottom-0 pb-4 px-4 absolute z-10">
                                    <img className="rounded-full w-8 h-8 mr-3 transition-all duration-300 scale-100 hover:scale-95" src="https://ghost.org/icons/icon-512x512.png?v=7b7c010c4f88a275be80db697657cff6" />
                                    <div>Ghost</div>
                                </div>
                            </div>
                            <h2 className="text-black font-karla text-m md:text-xl font-bold leading-tight bottom-0 pt-6 pb-2">Tasnim Lacey New Album Out&nbsp;Now</h2>
                            <p className="text-xs md:text-sm leading-normal mb-4 font-Karla">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
