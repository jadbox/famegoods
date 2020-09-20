import React from "react";
import Link from "next/link";


export default function post() {
    return (
        <div>
            <Link href="/upload">
                <button>
                    <div className="flex flex-row items-center align-middle bg-white rounded-lg px-4 py-2 font-body shadow-lg cursor-pointer">
                        <img src="/DFAMElogo.png" alt="DFAME Logo" />
                        <span className="bg-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-fill-transparent font-bold ml-2">Post</span>
                    </div>
                </button>
            </Link>
        </div>
    );
}