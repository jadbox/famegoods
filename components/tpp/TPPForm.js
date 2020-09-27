import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import SetTicket from "../upload/SetTicket";
import Link from "next/link";

export default function tppform() {


    return (
        <div className="justify-center mt-20 max-w-lg mx-auto">
            <div class="w-full px-2">
                <div class="rounded-lg shadow-sm mb-4">
                    <div class="rounded-lg bg-purple-300 shadow-lg md:shadow-xl relative overflow-hidden flex flex-col justify-center align-middle items-center py-6">
                        <h2 className="font-mont text-5xl font-extrabold tracking-widest">TPP</h2>
                        <span className="mx-10 text-center font-mont tracking-wider text-lg">Share a private link with your community.</span>
                    </div>
                </div>
                <form className="w-full items-center">
                    <div className="justify-center my-6">
                        <h3 className="text-center justify-center font-bold text-xl tracking-wide">Contract Address</h3>
                        <input
                            name="address"
                            placeholder="0x......"
                            className="leading-tight tracking-wide appearance-none border-2 border-gray-500 mt-2 py-4 p-2 rounded-lg w-full placeholder-gray-500 text-lg leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="justify-center pb-6">
                        <h3 className="text-center justify-center font-bold text-xl tracking-wide">Private Link</h3>
                        <input
                            name="contentUrl"
                            placeholder="https://"
                            className="leading-tight text-xl appearance-none border-2 border-gray-500 rounded w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-2 mt-2 tracking-wide"
                        />
                    </div>
                    <div className="justify-center pb-6">
                        <h3 className="text-center justify-center font-bold text-xl tracking-wide">Minimum Amount</h3>
                        <input
                            name="numberOfToken"
                            placeholder="Tokens"
                            className="leading-tight text-xl appearance-none border-2 border-gray-500 rounded w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-2 mt-2 tracking-wide"
                        />
                    </div>
                    <div className="justify-center mb-8">
                        <Link href="../tpp/LinkDisplay">
                            <button
                                type="submit"
                                className="overflow-visible mb-8 mt-4 py-1 px-10 w-full h-20 bg-black rounded-lg hover:bg-gray-700 text-white font-semibold rounded shadow-lg sm:h-16 text-lg bg-gradient-to-r from-primary to-secondary"
                            >
                                Generate Link
          </button>
                        </Link>
                    </div>
                </form>
            </div>
        </div >
    );
}