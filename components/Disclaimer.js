import React, { useState } from "react";

export default function Alert() {
    const [showAlert, setShowAlert] = useState(true);
    return (
        <>
            {showAlert ? (
                <div className="alert-toast fixed bottom-0 left-0 m-4 md:m-8 md:w-full max-w-sm z-50">
                    <label className="close cursor-pointer flex justify-between items-center w-full md:w-5/6 p-6 bg-black h-22 md:h-16 rounded-lg shadow-lg text-white" title="close" htmlFor="footertoast">
                        DFAME is in early testing! <br></br>Use at your own risk.
                    <button className="left-0 m-2" onClick={() => setShowAlert(false)}>
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