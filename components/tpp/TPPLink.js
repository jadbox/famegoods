import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";


export default function tpplink() {
    return (
        <div className="flex flex-col items-center">
            <p className="font-mont text-lg">Here's your link</p>
            <p className="font-extrabold tracking-wide font-mont text-2xl">Link placeholder</p>
        </div>
    );
}