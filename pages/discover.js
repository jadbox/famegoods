import React from "react";
import Link from "next/link";

export default function Discover() {
    return (
        <div className="flex flex-row justify-between mr-10 mt-20 ml-10 font-body items-center justify-center align-middle">
            <div>
                <img src="/fox-hub.png" alt="Token icon" className="h-8 w-8 md:h-16 lg:h-16 md:w-16 lg:w-16" />
            </div>
            <div>
                <h2 className="font-extrabold tracking-wide text-lg md:text-2xl lg:text-3xl">Community Name</h2>
                <p>Description</p>
            </div>
            <div>
                <p>Token Price</p>
            </div>
        </div>
    );
}


