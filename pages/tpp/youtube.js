import { useState, useEffect, useRef } from "react";
import { useOvermind } from "../../stores/Overmind";
import TPPForm from "../../components/tpp/TPPForm";
import { useRouter } from 'next/router'
import ReactPlayer from 'react-player/youtube'

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
        <div className="w-full h-screen center my-32">
            <div className="mx-auto w-1/2">
                <video
                    id="vid1"
                    className="video-js vjs-default-skin vjs-big-play-centered"
                    controls
                    autoplay
                    width="640" height="264"
                    data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}] }'
                >
                </video></div>

            <div className="mx-auto w-1/2">
                <ReactPlayer className="center mx-auto" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            </div>
        </div >
    );
}
/*
<iframe className="w-full min-h-full"
                referrerPolicy="origin"
                allowFullScreen={true}
                title="link player"
                sandbox="allow-same-origin allow-top-navigation allow-scripts allow-popups allow-forms"
                frameBorder="0"
                src={link}>
            </iframe>
*/