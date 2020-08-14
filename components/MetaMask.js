import React, { useState, useRef, useEffect } from "react";
import Page from "../components/Page";
import { Icon, InlineIcon } from "@iconify/react";
import timesSolid from "@iconify/icons-la/times-solid";
import Link from "next/link";

export default function MetaMask() {
    return (
        <div className="overflow-hidden">
            <div className="absolute top-0 right-0">
                <Link href="post/[slug]">
                    <Icon icon={timesSolid} className="h-8 w-8 mt-4 mr-4" />
                </Link>
            </div>
            <h1 className="mt-32 tracking-wider text-center font-extrabold text-3xl text-gray-900 text-opacity-100">Authorize Metamask</h1>
            <p className="mt-4 text-gray-700 text-center tracking-wide text-normal ml-6 mr-6">Use the Metamask popup to allow access</p>
            <div className="flex flex-col items-center justify-center mt-8">
                <img src="https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/metamask-fox.svg"
                    alt="Metamask Logo"
                    className="h-48 w-48" />
            </div>
        </div>
    );
}
