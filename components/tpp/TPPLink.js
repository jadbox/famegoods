import React, { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import Link from 'next/link';


export default function tpplink() {

    const [state, setState] = useState({});

    const [link, setLink] = useState('');
    const [rellink, setRelLink] = useState('');

    useEffect(() => {
        const _link = localStorage.getItem('genurl');

        const code = localStorage.getItem('tpp_code');
        const namespace = localStorage.getItem('tpp_namespace');
        const template = localStorage.getItem('tpp_template');

        const root = `https://${namespace}.link.dfame.app/http/tppsocial/{code}/`

        const rel = `/tpp/player?code=${code}&ns=${namespace}`;
        let w = window.location.origin + rel;
        // w = w.split('//').join(`//${namespace}.`);

        setLink(w);
        setRelLink(rel);

        setState({ link: _link, code, namespace, template });
    }, [])

    return (
        <div className="animate__animated animate__backInDown flex flex-col items-center max-w-lg mx-auto">
            <p className="font-mont text-lg">Here's your link</p>
            <p className="break-all max-w-lg font-extrabold tracking-wide font-mont text-xs">
                {link}
            </p>
            <br />
            <button
                onClick={() => navigator.clipboard.writeText(link)}
            >
                Copy Link
                </button>

            <br />
            <Link href={rellink}>
                <button
                >
                    Goto URL
                </button></Link>
        </div>
    );
}