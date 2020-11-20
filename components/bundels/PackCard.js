import React from "react";
import ContentPreviewCard from "../bundels/ContentPreviewCard"
import Link from "next/link";

export default function PackCard({ gif, file }) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div className="w-11/12 m-auto flex flex-col lg:flex-row items-center justify-center snap-center always-stop">
            <div
                className="relative bg-white bg-opacity-50 border-solid border-2 border-gray-200 shadow-lg hover:shadow-md focus:shadow-none rounded-xl w-full justify-center cursor-pointer overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                onClick={() => setShowModal(true)}
            >
                <div className="justify-center">
                    <div className="m-4 overflow-hidden">
                        <div className="m-auto w-10/12 absolute z-100">
                            <img className="rounded-lg blend-lighten" src="/plasticWrapper.png" alt="Plastic Wrapper" />
                        </div>
                        <img className="rounded-lg w-full z-10 m-auto" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase" />
                    </div>
                    <div>
                        <div className="m-6 font-karla break-words">
                            <h2 className="text-black text-m md:text-xl font-bold tracking-wider leading-tight bottom-0 pb-1">Creator Pack Name</h2>
                            <p className="text-xs md:text-xs text-gray-700 tracking-wide leading-normal font-Karla pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="flex flex-auto">
                                <img
                                    className="h-8 w-8 object-cover rounded-full shadow-lg"
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                                    alt="User profile image"
                                />
                                <div className="flex flex-col font-karla">
                                    <p className="ml-4 mt-1 text-black text-base align-text-top font-karla align-middle capitalize font-karla">
                                        Jennifer Tran
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        {/*pack*/}
                        <div className="relative w-auto my-12 mx-auto max-w-6xl">
                            {/*pack details*/}
                            <div className="min-w-screen min-h-screen flex mt-64 items-center justify-center">
                                <div className="flex-wrap bg-white rounded-xl border-2 border-gray-200 shadow-xl overflow-hidden w-11/12 md:10/12 lg:w-9/12 md:flex">
                                    {/*Setting side*/}
                                    <div className="flex items-center w-full mx-8 mt-4">
                                        <h4 className="text-black font-karla font-bold pb-2 tracking-wider">Drop 1</h4>
                                        <svg onClick={() => setShowModal(false)} className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                                        </svg>
                                    </div>
                                    {/*left side*/}
                                    <div className="flex w-full md:w-1/2 px-6 md:px-8 text-gray-600 items-center">
                                        <div className="w-full break-words font-normal text-md text-gray-700 font-karla tracking-wider m-auto">
                                            <div>
                                                <div className="m-auto w-8/12 md:w-4/12 absolute z-100">
                                                    <img className="rounded-lg blend-lighten" src="/plasticWrapper.png" alt="Plastic Wrapper" />
                                                </div>
                                                <img className="rounded-lg w-full z-10 m-auto" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase" />
                                            </div>
                                            <div className="flex flex-auto mt-6">
                                                <img
                                                    className="h-8 w-8 object-cover rounded-full shadow-lg"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                                                    alt="User profile image"
                                                />
                                                <div className="flex flex-col font-karla -mt-2">
                                                    <p className="ml-4 text-black text-base font-karla align-middle capitalize font-karla">
                                                        Creator Name
                                                    </p>
                                                    <p className="ml-4 tracking-wide text-black text-sm text-gray-500 align-text-top font-karla align-middle capitalize font-karla">
                                                        3D Artist & Designer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*right side*/}
                                    <div className="w-full md:w-1/2 bg-white pb-8 md:py-2 px-6 md:pr-8">
                                        <div className="flex flex-col items-left">
                                            <h2 className="text-black text-m md:text-xl font-bold tracking-wider leading-tight bottom-0 pb-4">Creator Pack Name</h2>
                                            <p className="text-sm md:text-sm text-gray-700 tracking-wide leading-normal font-Karla">Sorry...You do not hold enough tokens to acess the content. This link is a special token gated link only accessible to the creators community. Pleas buy some of the creators tokens to acess the page:</p>
                                            <div className="w-full bg-gray-200 rounded-pill rounded-full h-1 my-12"></div>
                                            <Link href="/bundels/contentpackage">
                                                <button className="rounded-full bg-black text-white font-karla py-4 px-8">Open Pack</button>
                                            </Link>
                                        </div>
                                    </div>
                                    {/*content preview*/}
                                    <div className="mt-8 ml-8">
                                        <p className="text-sm md:text-sm text-gray-500 tracking-wider leading-normal font-Karla">This pack includes:</p>
                                    </div>
                                    <div className="flex flex-wrap mx-4">
                                        <div className="w-1/2 p-4 justify-between flex-col">
                                            <ContentPreviewCard></ContentPreviewCard>
                                        </div>
                                        <div className="w-1/2 p-4 justify-between flex-col">
                                            <ContentPreviewCard></ContentPreviewCard>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
                </>
            ) : null
            }
        </div >
    );
}