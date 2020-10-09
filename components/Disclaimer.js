import React, { useState } from "react";

export default function Alert() {
    const [showAlert, setShowAlert] = useState(true);
    return (
        <>
            {showAlert ? (
                <div className="fixed inset-x-0 top-0 z-10">
                    <div className="flex justify-between bg-black w-full mb-4 h-8 rounded-b-lg md:rounded-b lg:rounded-b">
                        <div className="flex items-center bg-black">
                        </div>
                        <div className="flex items-center text-white text-xs md:text-base lg:text-base font-mont">
                            <span className="inline-block font-karla tracking-wider">
                                DFAME is in early testing. Use at your own risk.
                                </span>
                        </div>
                        <div className="flex items-center mr-4">
                            <button
                                className="bg-transparent text-2xl font-semibold leading-none outline-none focus:outline-none pb-2"
                                onClick={() => setShowAlert(false)}
                            >
                                <span className="text-white">×</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};