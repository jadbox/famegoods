import React from "react";

export default function ContentPreviewCard({ gif, file }) {

    return (
        <div className="w-full flex flex-col lg:flex-row items-center justify-center snap-center always-stop mb-6">
            <div
                className="relative bg-white border-solid border-2 border-gray-200 shadow-md hover:shadow rounded-2xl w-full justify-center cursor-pointer overflow-hidden"
            >
                <div className="flex top-0 right-0 left-0 pt-2 pb-3 px-4 items-center">
                    <div className="flex flex-auto">
                        <img
                            className="h-8 w-8 object-cover rounded-full"
                            src="https://s.ytimg.com/yts/mobile/img/apple-touch-icon-144x144-precomposed-vflopw1IA.png"
                            alt="User profile image"
                        />
                        <div className="flex flex-col font-karla">
                            <p className="ml-4 mt-1 text-black text-base font-karla align-middle capitalize font-karla">
                                Youtube
                            </p>
                        </div>
                    </div>
                </div>
                <div className="justify-center">
                    <div className="w-full px-4 break-words font-normal text-md text-gray-700 font-karla tracking-wider m-auto">
                        <div className="mb-4">
                            <div className="md:flex-shrink-0">
                                <img className="rounded-lg md:w-full " src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase" />
                            </div>
                            <div className="mx-1 my-4">
                                <h3 className="text-black font-karla text-s md:text-s font-bold leading-tight bottom-0 pb-2">Tasnim Lacey New Album Out&nbsp;Now</h3>
                                <p className="text-gray-500 text-xs md:text-xs leading-normal font-Karla">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
