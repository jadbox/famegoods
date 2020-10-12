import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Icon } from '@iconify/react';
import plusCircleSolid from '@iconify/icons-la/plus-circle-solid';
import streamSolid from "@iconify/icons-la/stream-solid";

export default function Footer() {

    return (
        <footer className="fixed h-16 bg-opacity-100 w-full bottom-0 flex rounded-t-lg md:top-0 md:w-1/2 md:right-0 lg:top-0 lg:right-0 lg:w-1/2 visible">
            <div className="flex justify-center md:justify-center lg:justify-end space-evenly lg:space-end md:space-end w-4/5 mx-auto py-2 md:p-0 lg:p-0">
                <Link href="/tpp/form">
                    <div className="sm:px-2 cursor-pointer hover:text-purple-600 flex flex-col md:flex-row lg:flex-row items-center align-middle order-2">
                        <button className="rounded-lg px-5 py-2 md:mt-5 lg:mt-5">
                            <Icon icon={plusCircleSolid} className="h-8 w-8 pr-1 md:mt-0 visible inline-block relative" />
                            <span className="md:text-sm lg:text-md font-semibold font-karla md:visible lg:visible align-middle inline-block">Post</span>
                        </button>
                    </div>
                </Link>
            </div>
        </footer>
    );
}