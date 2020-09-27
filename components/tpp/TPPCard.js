import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import TPPProfileHeader from "../../components/tpp/TPPProfileHeader";
import lockSolid from '@iconify/icons-la/lock-solid';


export default function TPPCard({ gif, file }) {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center snap-center always-stop px-4">
            <div
                className="relative shadow-lg rounded-xl w-full lg:w-2/6 justify-center cursor-pointer overflow-hidden mt-12 md:mt-6 lg:mt-24"
            >
                <div className="flex absolute top-0 right-0 left-0 p-6 mb-4 items-center">
                    <TPPProfileHeader></TPPProfileHeader>
                    <div className="flex flex-row justify-end">
                        <button className="top-0 right-0 w-24 md:w-40 lg:w-40 text-center shadow-xl bg-black font-mont rounded-md flex flex-row items-center justify-center py-2 px-2">
                            <Icon icon={lockSolid} color="white" className="w-6 h-6 ml-0 md:ml-2 lg:ml-2" />
                            <p className="text-white font-karla font-extrabold text-sm align-middle inline-block ml-2">150 Tokens</p>
                        </button>
                    </div>
                </div>
                <div className="justify-center mt-32">
                    <div className="w-5/6 break-words font-normal text-md text-gray-700 font-mont tracking-wider m-auto">
                        <h2 className="font-karla">How about enjoying a coffee?</h2>
                        <img src="/background.png" className="mt-10 mb-10 w-full"></img>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
}
