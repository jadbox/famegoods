import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import Lottie from "react-lottie";
import Triangle from "../../src/lotties/triangle";

export default function tpplottie() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Triangle,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <div className="mt-20 flex flex-col">
                <Lottie
                    options={defaultOptions}
                    height={350}
                    width={350}
                />
            </div>
        </div>
    );
}