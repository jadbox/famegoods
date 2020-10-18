import React, { useState } from "react";

export default function Alert() {
    const [showAlert, setShowAlert] = useState(true);
    return (
        <>
            {showAlert ? (

                <div className="fixed mb-20 lg:mb-10 bottom-0 lg:left-0 mx-4 lg:m-1 w-11/12 md:w-11/12 lg:w-7/12 lg:ml-4 lg:mr-4 z-50 flex items-center lg:block lg:flex-none justify-center align-middle h-16 md:h-20 lg:h-16 py-2 px-2">
                    <label className="close cursor-pointer flex justify-between w-full py-2 px-2 md:w-3/6 md:py-2 md:px-4 lg:px-4 lg:py-2 bg-black rounded-lg shadow-lg text-white text-sm md:text-base lg:text-md align-middle md:text-center justify-center" title="close" for="footertoast">
                        DFAME is in early testing! <br className="hidden md:hidden lg:visible"></br>Use at your own risk.
                    <button className="left-0 ml-4 lg:ml-4 lg:m-2 align-middle" onClick={() => setShowAlert(false)}>
                            <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </button>
                    </label>
                </div>
            ) : null
            }
        </>
    );
};