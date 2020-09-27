import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import TPPProfileHeader from "../../components/tpp/TPPProfileHeader";


export default function TPPCard({ gif, file }) {

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center snap-center always-stop px-4">
            <div
                className="relative shadow-lg rounded-xl w-full lg:w-2/6 justify-center cursor-pointer overflow-hidden mt-12 md:mt-6 lg:mt-24"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "50%",
                    height: "70%",
                }}
            >
                <div className="flex absolute top-0 right-0 left-0 p-6 mb-4 items-center">
                    <TPPProfileHeader></TPPProfileHeader>
                    <button className="top-0 right-0 w-20 text-center shadow-xl bg-white font-mont rounded-md">
                        <p className="bg-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-fill-transparent font-extrabold text-sm px-6 py-2 align-middle inline-block">
                            150 Tokens
                        </p>
                    </button>
                </div>
                <div className="justify-center mt-32">
                    <div className="w-4/5 break-words font-normal text-md text-gray-700 font-mont tracking-wider m-auto">
                        <h2>How about enjoying a coffee?</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
