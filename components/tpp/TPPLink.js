import React, { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import Link from 'next/link';

const cheerio = require('cheerio');

export default function tpplink() {

    const [state, setState] = useState({});

    const [link, setLink] = useState('');
    const [rellink, setRelLink] = useState('');

    useEffect(() => {
        const _link = localStorage.getItem('genurl');

        const code = localStorage.getItem('tpp_code');
        const namespace = localStorage.getItem('tpp_namespace');
        const template = localStorage.getItem('tpp_template');

        const rel = `/tpp/player?code=${code}&ns=${namespace}`;
        let w = window.location.origin + rel;
        // w = w.split('//').join(`//${namespace}.`);

        setLink(w);
        setRelLink(rel);

        //====

        const root = `https://${namespace}.link.dfame.app/http/tppsocial/{code}/`

        const page = root.replace('{namespace}', namespace)
            .replace('{code}', code);

        fetch(page)
            .then(response => response.text())
            .then(page => {
                console.log('page', page);
                const $ = cheerio.load(page);
                const title = $("title").text();
                const desc = $("description").text();
                console.log('page---', title, desc);
                setState({ title, desc });
            });

        // setState({ link: _link, code, namespace, template });
    }, [])

    return (
        <div className="animate__animated animate__backInDown flex flex-col items-center max-w-lg mx-auto">
            { state.title &&
                <p>
                    Page Title: {state.title}
                    <br />
                    {state.desc}
                </p>
            }
            <p className="pt-4 font-mont text-lg">Here's your link</p>
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