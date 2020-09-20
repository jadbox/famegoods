import React from "react";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import twoWayArrowsLine from '@iconify/icons-clarity/two-way-arrows-line';

export default function exchange() {
    return (
        <div>
            <Link href="/roll_exchange">
                <button>
                    <div className="flex flex-row  items-center align-middle bg-white rounded-lg px-2 py-2 font-body">
                        <Icon icon={twoWayArrowsLine} height="2em" />
                        <span className="font-bold ml-1">Exchange</span>
                    </div>
                </button>

            </Link>
        </div>
    );
}