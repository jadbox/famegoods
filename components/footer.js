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
        <footer className="fixed h-16 bg-white w-full bottom-0 flex rounded-t-lg">
            <div className="flex items-center justify-between w-4/5 mx-auto py-2">
                <Link href="/">
                    <div className="sm:px-2 cursor-pointer hover:text-blue-400">
                        <Icon icon={streamSolid} height="2em" />
                    </div>
                </Link>
                <Link href="/upload">
                    <div className="sm:px-2 cursor-pointer hover:text-blue-400">
                        <Icon icon={compassIcon} height="2em" />
                    </div>
                </Link>
                <div className="sm:px-2 cursor-pointer hover:text-blue-400">
                    <img src="/DFAMElogo.png" alt="DFAME Logo" className="h-12 w-14" />
                </div>
                <div className="sm:px-2 cursor-pointer hover:text-blue-400">
                    <Icon icon={twoWayArrowsLine} height="2em" />
                </div>
                <Link href="/profile">
                    <div className="sm:px-2 cursor-pointer hover:text-blue-400">
                        <Icon icon={userIcon} height="2em" />
                    </div>
                </Link>
            </div>
        </footer>
    );
}