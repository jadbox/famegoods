import React from 'react';
import { Icon } from "@iconify/react";
import searchSolid from "@iconify/icons-la/search-solid";

export default function SearchInput() {

    return (
        <div className="h-12 w-full mb-6 cursor-pointer">
            <span className="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent text-base items-center justify-center w-8 pl-3 pt-3 py-3">
                <Icon icon={searchSolid} height="2em" className="p-1 -mt-1" />
            </span>
            <input typeName="search" className="bg-purple-white w-full cursor-pointer shadow-lg hover:shadow focus:shadow h-12 text-gray-400 rounded-lg border-solid border-2 outline-none focus:text-black p-4 pl-12  text-sm tracking-wide items-stretch" placeholder="Creator, $Token or Content" />
        </div>

    )
}