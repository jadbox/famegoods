import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";
import streamSolid from "@iconify/icons-la/stream-solid";
import uploadSolid from "@iconify/icons-la/upload-solid";
import userIcon from "@iconify/icons-la/user";
import compassIcon from '@iconify/icons-la/compass';
import twoWayArrowsLine from '@iconify/icons-clarity/two-way-arrows-line';

export default function Footer() {

    return (
        <footer className="fixed h-16 bg-opacity-100 w-full bottom-0 flex rounded-t-lg md:top-0 md:w-1/2 md:right-0 lg:top-0 lg:right-0 lg:w-1/2 visible">
            <div className="flex items-center justify-between w-4/5 mx-auto py-2 md:p-0 lg:p-0">
                <Link href="/">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-1">
                        <Icon icon={streamSolid} height="2em" />
                        <span className="font-bold ml-1 md:mt-0 lg:mt-0 text-nonexist md:text-sm lg:text-md md:visible lg:visible">Feed</span>
                    </div>
                </Link>
                <Link href="/discover">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-2">
                        <Icon icon={compassIcon} height="2em" />
                        <span className="md:mt-0 lg:mt-0 font-bold ml-1 text-nonexist md:text-sm lg:text-md md:visible lg:visible">Discover</span>
                    </div>
                </Link>
                <Link href="/upload">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-3 md:order-5 lg:order-5">
                        <img src="/DFAMElogo.png" alt="DFAME Logo" className="md:mt-0 visible" />
                        <span className="md:mt-0 lg:mt-0 font-bold ml-1 text-nonexist md:text-sm lg:text-md md:visible lg:visible">Post</span>
                    </div>
                </Link>
                <Link href="/roll_exchange">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-4">
                        <Icon icon={twoWayArrowsLine} height="2em" />
                        <span className="text-nonexist md:text-sm lg:text-md md:mt-0 lg:mt-0 font-bold ml-1 md:visible lg:visible">Exchange</span>
                    </div>
                </Link>
                <Link href="/profile">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-5 md:order-4 lg:order-4">
                        <Icon icon={userIcon} height="2em" />
                        <span className="md:mt-0 text-nonexist md:text-sm lg:text-md lg:mt-0 font-bold ml-1 md:visible lg:visible">Profile</span>
                    </div>
                </Link>
            </div>
        </footer>
    );
}