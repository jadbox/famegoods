import React, { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import Link from 'next/link';
import TPPProfileHeader from "../../components/tpp/TPPProfileHeader";
import { Icon } from '@iconify/react';
import copySolid from '@iconify/icons-la/copy-solid';
import lockSolid from '@iconify/icons-la/lock-solid';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    PinterestShareButton,
    RedditShareButton,
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
} from 'react-share';

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
                // console.log('page', page);
                const $ = cheerio.load(page);
                const title = $("title").text();

                let desc1 = $("meta[property='og:title']").attr("content");
                let desc2 = $("meta[property='og:description']").attr("content");

                desc1 = desc1 || '';
                desc2 = desc2 || '';
                const desc = desc1.length > desc2.length ? desc1 : desc2;

                // console.log('page---', title, desc);
                setState({ title, desc });
            });

        // setState({ link: _link, code, namespace, template });
    }, [])

    return (
        <div className="h-screen w-screen fixed overflow-auto md:overflow-hidden">
            <div className="w-full md:h-full flex flex-wrap">

                <div className="mt-24 px-4 md:mt-0 w-full lg:h-full lg:w-1/2 flex justify-center items-center">

                    <div className="max-w-xl md:pl-32">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Your link is ready 🎉</h1>
                        <p className="text-xs md:text-sm leading-normal mb-6 font-Karla">
                            Your new token gated link is generated. Share it wherever you want! All visitors have to hold the needed token amount to visite the page, even if they dont come from DFAME</p>
                        <h3 className="text-left justify-center font-bold font-karla text-m tracking-wide">Here's your link:</h3>
                        <div class="flex flex-wrap items-stretch w-full mt-3 relative">
                            <input type="text" class="flex-shrink flex-grow flex-auto rounded-lg rounded-r-none leading-normal w-px flex-1 border-2 shadow-md hover:shadow h-10 border-grey-200 px-3 relative" value={link} />
                            <button className="h-10" onClick={() => navigator.clipboard.writeText(link)}>
                                <div class="flex -mr-px">
                                    <span class="flex items-center leading-normal h-10 bg-grey-600 rounded rounded-l-none border-2 shadow-md hover:shadow border-l-0 border-grey-200 px-3 whitespace-no-wrap text-grey-dark text-sm">
                                        <Icon icon={copySolid} />
                                    </span>
                                </div>
                            </button>
                        </div>
                        <h3 className="text-left justify-center font-bold font-karla text-m tracking-wide mt-6">Share it on your socials:</h3>
                        <div className="flex justify-between mt-3">
                            <FacebookShareButton url={link}>
                                <FacebookIcon size={32} round={true}></FacebookIcon>
                            </FacebookShareButton>
                            <TwitterShareButton url={link}>
                                <TwitterIcon size={32} round={true}></TwitterIcon>
                            </TwitterShareButton>
                            <TelegramShareButton url={link}>
                                <TelegramIcon size={32} round={true}></TelegramIcon>
                            </TelegramShareButton>
                            <WhatsappShareButton url={link}>
                                <WhatsappIcon size={32} round={true}></WhatsappIcon>
                            </WhatsappShareButton>
                            <PinterestShareButton url={link}>
                                <PinterestIcon size={32} round={true}></PinterestIcon>
                            </PinterestShareButton>
                            <RedditShareButton url={link}>
                                <RedditIcon size={32} round={true}></RedditIcon>
                            </RedditShareButton>
                            <LinkedinShareButton url={link}>
                                <LinkedinIcon size={32} round={true}></LinkedinIcon>
                            </LinkedinShareButton>
                        </div>
                    </div>
                </div>

                <div className="h-screen w-full lg:h-full lg:w-1/2">
                    <div className="h-full md:w-4/5 lg:w-3/4 bg-no-repeat bg-center px-4 md:px-16 flex md:overflow-auto">
                        <div className="animate__animated animate__backInDown flex flex-col items-center mt-10 md:m-auto">
                            <div className="w-full flex flex-col lg:flex-row items-center justify-center snap-center always-stop">
                                <Link href={rellink}>
                                    <div
                                        className="relative bg-white bg-opacity-50 border-solid border-2 border-gray-200 shadow-md hover:shadow rounded-xl w-full justify-center cursor-pointer overflow-hidden transform transition-all duration-300 scale-100 hover:scale-95"
                                    >
                                        <div className="flex absolute top-0 right-0 left-0 p-4 md:p-6 md:mb-2 mt-1 md:mt-0 items-center">
                                            <TPPProfileHeader></TPPProfileHeader>
                                            <div className="flex flex-row justify-end">
                                                <button className="top-0 right-0 w-full text-center bg-black font-karla rounded-full py-2 px-4 flex flex-row items-center justify-center">
                                                    <Icon icon={lockSolid} color="white" className="w-4 h-6 ml-0 md:ml-2 lg:ml-2" />
                                                    <p className="text-white font-karla text-xs align-middle inline-block ml-2">150 TKNS</p>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="justify-center mt-24">
                                            <div className="w-full px-4 md:px-6 break-words font-normal text-md text-gray-700 font-karla tracking-wider m-auto">
                                                <div className="mb-2">
                                                    <div class="md:flex-shrink-0">
                                                        <img class="rounded-lg md:w-full z-10" src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Woman paying for a purchase" />
                                                    </div>
                                                    <div className="h-12 absolute"></div>
                                                    <div className="flex w-full items-center text-gray-300 absolute z-50">
                                                        <div className="flex-1 flex items-center bottom-0 pb-4 px-4 absolute z-10">
                                                            <img className="rounded-full w-8 h-8 mr-3 transition-all duration-300 scale-100 hover:scale-95" src="https://ghost.org/icons/icon-512x512.png?v=7b7c010c4f88a275be80db697657cff6" />
                                                            <div>Ghost</div>
                                                        </div>
                                                    </div>
                                                    {state.title &&
                                                        <><p className="text-black font-karla text-m md:text-xl font-bold leading-tight bottom-0 pt-6 pb-2">
                                                            <b>{state.title}</b>
                                                        </p>
                                                            <p className="text-xs md:text-sm leading-normal mb-4 font-Karla">{state.desc}</p>
                                                        </>
                                                    }
                                                    {!state.title &&
                                                        <p className="bold animate-ping">
                                                            Loading page info...
                </p>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div >
    );
}