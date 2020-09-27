import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import TPPLink from "../../components/tpp/TPPLink";
import TPPLottie from "../../components/tpp/TPPLottie";

export default function TokenProtection() {

    return (
        <div>
            <TPPLottie></TPPLottie>
            <TPPLink></TPPLink>
        </div>
    );
}