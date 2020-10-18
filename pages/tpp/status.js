import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import TPPStatus from "../../components/tpp/TPPStatus";

export default function Status() {


    return (
        <div>
            <TPPStatus></TPPStatus>
        </div>
    );
}