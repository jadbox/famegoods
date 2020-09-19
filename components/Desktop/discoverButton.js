import React from "react";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import compassIcon from "@iconify/icons-la/compass";


export default function discover() {
    return (
        <div>
            <Link href="/discover">
                <button>
                    <div className="flex flex-row  items-center align-middle bg-white rounded-lg px-2 py-2 font-body">
                        <Icon icon={compassIcon} height="2em" />
                        <span className="font-bold ml-1">Discover</span>
                    </div>
                </button>

            </Link>
        </div>
    );
}