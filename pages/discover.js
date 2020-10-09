import React from "react";
import Link from "next/link";
import { Icon } from '@iconify/react';
import angleRightSolid from '@iconify/icons-la/angle-right-solid';


export default function Discover() {
    return (
        <div className="h-screen w-screen fixed bg-top-blur bg-cover bg-no-repeat">
            <div id="menu" className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                <div className="flex flex-wrap text-center justify-center">
                    <div className="w-full lg:w-6/12 px-4">
                        <h2 className="text-4xl text-black font-karla">Discover new creators</h2>
                        <p className="text-basis leading-relaxed mt-4 mb-4 text-gray-500 font-karla">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut mollis nulla, ut efficitur massa. Praesent vitae iaculis orci
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap mt-6 justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 gap-y-8 gap-x-4">
                        <div className="col-span-2 sm:col-span-1 xl:col-span-1">
                            <img
                                alt="..."
                                src="https://source.unsplash.com/_i9Sil-9fak"
                                className="h-24 w-24 rounded object-cover mx-auto"
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-4 xl:col-span-4">
                            <div className="flex">
                                <h3 className="text-black font-karla">Creator Name</h3>
                                <p className="ml-3 text-gray-500 font-karla">
                                    $Token
                            </p>
                            </div>
                            <p className="w-3/4 pt-2 font-leight font-karla">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1 xl:col-span-1 flex items-center "><Icon icon={angleRightSolid} /></div>

                        <div className="col-span-2 sm:col-span-1 xl:col-span-1">
                            <img
                                alt="..."
                                src="https://source.unsplash.com/FohxYMt-3d0"
                                className="h-24 w-24 rounded object-cover mx-auto"
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-4 xl:col-span-4">
                            <div className="flex">
                                <h3 className="text-black font-karla">Creator Name</h3>
                                <p className="ml-3 text-gray-500 font-karla">
                                    $Token
                            </p>
                            </div>
                            <p className="w-3/4 pt-2 font-leight font-karla">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1 xl:col-span-1 flex items-center "><Icon icon={angleRightSolid} /></div>

                        <div className="col-span-2 sm:col-span-1 xl:col-span-1">
                            <img
                                alt="..."
                                src="https://source.unsplash.com/nP2UzV4liWQ"
                                className="h-24 w-24 rounded object-cover mx-auto"
                            />
                        </div>
                        <div className="col-span-2 sm:col-span-4 xl:col-span-4">
                            <div className="flex">
                                <h3 className="text-black font-karla">Creator Name</h3>
                                <p className="ml-3 text-gray-500 font-karla">
                                    $Token
                            </p>
                            </div>
                            <p className="w-3/4 pt-2 font-leight font-karla">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className="col-span-2 sm:col-span-1 xl:col-span-1 flex items-center "><Icon icon={angleRightSolid} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


