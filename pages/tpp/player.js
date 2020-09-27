import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import TPPForm from "../../components/tpp/TPPForm";
import { useRouter } from 'next/router'

export default function TokenProtection() {
    const [state, setState] = useState({});
    const [link, setLink] = useState('');

    useEffect(() => {
        const _link = localStorage.getItem('genurl');

        const code = localStorage.getItem('tpp_code');
        const namespace = localStorage.getItem('tpp_namespace');
        const template = localStorage.getItem('tpp_template');

        const root = `https://${namespace}.link.dfame.app/http/tppsocial/{code}/`

        // const rel = `/tpp/player?code=${code}&ns=${namespace}`;
        // let w = window.location.origin + rel;
        // w = w.split('//').join(`//${namespace}.`);

        const page = root.replace('{namespace}', namespace)
            .replace('{code}', code);

        console.log('using TPP link:', page);

        setLink(page);

        setState({ link: _link, code, namespace, template });
    }, [])

    return (
        <div className="w-full h-screen">
            <iframe className="w-full min-h-full"
                src={link}>

            </iframe>
        </div>
    );
}