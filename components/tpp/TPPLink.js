import React, { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";


export default function tpplink() {

    const [link, setLink] = useState('');

    useEffect(() => {
        setLink(localStorage.getItem('genurl'));
    }, [])

    return (
        <div className="flex flex-col items-center max-w-lg mx-auto">
            <p className="font-mont text-lg">Here's your link</p>
            <p className="break-all max-w-lg font-extrabold tracking-wide font-mont text-xs">{link}</p>
            <br />
            <button
                onClick={() => navigator.clipboard.writeText(link)}
            >
                Copy Link
                </button>
        </div>
    );
}