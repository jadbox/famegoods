import React from "react";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import streamSolid from "@iconify/icons-la/stream-solid";

export default function feed() {
    return (
        <div>
            <Link href="/">
                <button>
                    <div className="flex flex-row  items-center align-middle bg-white rounded-lg px-2 py-2 font-body">
                        <Icon icon={streamSolid} height="2em" />
                        <span className="font-bold ml-1">Feed</span>
                    </div>
                </button>

            </Link>
        </div>
    );
}