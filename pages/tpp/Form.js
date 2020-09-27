import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import TPPForm from "../../components/tpp/TPPForm";

export default function TokenProtection() {


    return (
        <div>
            <TPPForm></TPPForm>
        </div>
    );
}