import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import TPPProfileHeader from "./tpp/TPPProfileHeader";
import lockSolid from '@iconify/icons-la/lock-solid';
import Link from "next/link";

export default function ProfileCard({ gif, file }) {

    return (
        <div className="w-full m-4 flex flex-col lg:flex-row items-center justify-center snap-center always-stop">
            <div className="relative bg-white border-solid border-4 border-gray-200 shadow-lg hover:shadow rounded-xl w-full justify-center cursor-pointer overflow-hidden">
                <div className="flex absolute top-0 right-0 left-0 p-6 items-center">
                    <div className="flex flex-auto">
                        <img
                            className="h-12 w-12 object-cover rounded-full shadow-lg"
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                            alt="User profile image"
                        />
                        <div className="flex flex-col font-karla">
                            <p className="ml-4 text-black text-lg align-text-top font-karla align-middle capitalize font-karla">
                                Creator Name
                             </p>
                            <p className="ml-4 tracking-wide text-black text-sm text-gray-500 align-text-top font-karla align-middle capitalize font-karla">
                                $Token
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-24">
                    <div className="w-5/6 pb-4 break-words font-normal text-md text-gray-700 font-karla m-auto">
                        <p className="text-sm leading-normal mb-2 font-Karla">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis vel suscipit ex dolore.</p>
                    </div>
                </div>
                <div className="flex justify-between items-center px-6 pb-4">
                    <Link href="">
                        <button className="z-10 px-4 md:px-6 h-12 bg-white border-2 rounded-full border-gray-200 shadow-md hover:shadow"> Discover </button>
                    </Link>
                    <div>
                        <p className="font-karla text-sm font-semibold pb-2 text-center">Buy price</p>
                        <span
                            className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden
                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                            <span className="relative text-sm md:text-base">$ 0.70</span>
                        </span>
                    </div>
                    <div>
                        <p className="font-karla text-sm font-semibold pb-2 text-center">Sell price</p>
                        <span
                            className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                            <span aria-hidden
                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                            <span className="relative text-sm md:text-base">$ 0.56</span>
                        </span>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}
