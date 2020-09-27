import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";
import streamSolid from "@iconify/icons-la/stream-solid";

export default function Footer() {

    return (
        <footer className="fixed h-16 bg-white w-full bottom-0 flex rounded-t-lg md:top-0 md:w-1/2 md:right-0 lg:top-0 lg:right-0 lg:w-1/2 visible">
            <div className="flex justify-center md:justify-center lg:justify-end space-evenly lg:space-end md:space-end w-4/5 mx-auto py-2 md:p-0 lg:p-0">
                <Link href="/">
                    <div className="sm:px-2 cursor-pointer hover:text-blue-400 flex flex-col md:flex-row lg:flex-row items-center align-middle order-1">
                        <button className="bg-white shadow-sm px-6 py-2 md:mt-2 lg:mt-2">
                            <Icon icon={streamSolid} height="2em" className="inline-block relative" />
                            <span className="font-bold ml-1 md:mt-0 lg:mt-0 md:text-sm lg:text-md align-middle">Feed</span>
                        </button>
                    </div>
                </Link>
                <Link href="/tpp/Form">
                    <div className="sm:px-2 cursor-pointer hover:text-blue-400 flex flex-col md:flex-row lg:flex-row items-center align-middle order-2">
                        <button className="bg-white shadow-lg px-6 md:mt-2 lg:mt-2">
                            <img src="/DFAMElogo.png" alt="DFAME Logo" className="h-7 w-8 md:mt-0 visible inline-block relative" />
                            <span className="g-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-fill-transparent font-bold ml-2 align-center inline-block">Post</span>
                        </button>
                    </div>
                </Link>
            </div>
        </footer>
    );
}