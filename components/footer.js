import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Icon } from "@iconify/react";
import streamSolid from "@iconify/icons-la/stream-solid";
import plusCircleSolid from '@iconify/icons-la/plus-circle-solid';
import userIcon from "@iconify/icons-la/user";
import compassIcon from '@iconify/icons-la/compass';
import twoWayArrowsLine from '@iconify/icons-clarity/two-way-arrows-line';

export default function Footer() {

    return (
        <footer className="block w-4/5 md:w-4/12 mx-auto rounded-full border-2 border-gray-200 shadow-lg fixed inset-x-0 bottom-0 z-10 mb-8 bg-white shadow">
            <div className="h-12 flex items-center justify-between w-4/5 mx-auto py-2 md:p-0 lg:p-0">
                <Link href="/">
                    <div className="sm:px-2 cursor-pointer active:text-purple-600 hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-1">
                        <Icon icon={streamSolid} height="1.8em" />
                    </div>
                </Link>
                <Link href="/discover">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-2">
                        <Icon icon={compassIcon} height="1.8em" />
                    </div>
                </Link>
                <Link href="/tpp/form">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-3">
                        <Icon icon={plusCircleSolid} height="1.8em" />
                    </div>
                </Link>
                <Link href="/roll_exchange">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-4">
                        <Icon icon={twoWayArrowsLine} height="1.8em" />
                    </div>
                </Link>
                <Link href="/profile">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-5 md:order-4 lg:order-4">
                        <Icon icon={userIcon} height="1.8em" />
                    </div>
                </Link>
            </div>
        </footer>
    );
}