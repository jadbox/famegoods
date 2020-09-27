import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import TPPForm from "../../components/tpp/TPPForm";

export default function TokenProtection() {

    const [link, setLink] = useState('');

    useEffect(() => {
        setLink(localStorage.getItem('genurl'));
    }, [])

    return (
        <div className="w-full h-screen">
            <iframe className="w-full min-h-full"
                src={link}>

            </iframe>
        </div>
    );
}