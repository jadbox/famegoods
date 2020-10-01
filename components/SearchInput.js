import React from 'react';
import { Icon } from "@iconify/react";
import searchSolid from "@iconify/icons-la/search-solid";

export default function SearchInput() {

    return (
        <div className="h-16 w-full mb-4">
            <span class="z-10 leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 pt-3 py-3">
                <Icon icon={searchSolid} height="1.8em" className="pt-1" />
            </span>
            <input typeName="search" className="bg-purple-white w-full shadow-lg text-gray-400 rounded-lg border-solid border-2 p-4 pl-12 text-xs uppercase tracking-wide items-stretch" placeholder="Creator, $Token or Content" />
        </div>

    )
}