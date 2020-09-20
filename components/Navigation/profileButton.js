import React from "react";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import userIcon from "@iconify/icons-la/user";

export default function profile() {
    return (
        <div>
            <Link href="/">
                <button>
                    <div className="flex flex-row  items-center align-middle bg-white rounded-lg px-2 py-2 font-body">
                        <Icon icon={userIcon} height="2em" />
                        <span className="font-bold ml-1">Profile</span>
                    </div>
                </button>
            </Link>
        </div>
    );
}