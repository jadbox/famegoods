import { useState, useEffect } from "react";
import { useOvermind } from "../../stores/Overmind";
import SetTicket from "../upload/SetTicket";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function tppform() {
    const router = useRouter();

    const [isLoading, setLoading] = useState(false);

    // <Link href="../tpp/LinkDisplay">
    const onSubmit = function (e) {
        if (isLoading) return;

        if (e.preventDefault) e.preventDefault();
        let address = document.getElementById('form_address').value;
        let url = document.getElementById('form_url').value;
        let balance = document.getElementById('form_balance').value;

        url = url || 'demo.ghost.io';
        address = address || '0x6b175474e89094c44da98b954eedeac495271d0f'
        balance = balance || '1'

        const url2 = encodeURIComponent(
            url.replace('http://', '').replace('https://', '')
        );
        const token2 = encodeURIComponent(address);
        const balance2 = balance;

        setLoading(true);
        fetch(`https://gen.link.dfame.app/gen?url=${url2}&token=${token2}&balance=${balance2}`)
            .then(response => response.json())
            .then(data => {
                console.log('data', data)

                const link = data.social;
                localStorage.setItem('genurl', link);
                localStorage.setItem('tpp_code', data.code);
                localStorage.setItem('tpp_namespace', data.namespace);
                localStorage.setItem('tpp_template', data.template);

                router.push('/tpp/linkdisplay');
            })
            .catch((e) => {
                setLoading(false);
                console.error(e);
            });

        console.log(address, url, balance);
    }

    return (
        <div className="h-screen w-screen fixed overflow-scroll lg:overflow-hidden">
            <div className="w-full md:h-full flex flex-wrap">
                <div className="mt-24 m-6 lg:mx-0 lg:-ml-4 lg:ml-0 lg:mt-0 lg:h-screen lg:mb-4 w-full lg:h-full lg:w-1/2 flex justify-center items-center">
                    <div className="max-w-xl md:pl-32">
                        <div className="rounded-lg relative shadow-md overflow-hidden flex flex-col justify-center align-middle items-center">
                            <img src="/tpp-title.jpg"></img>
                        </div>
                        <div className="flex flex-wrap w-full flex-col items-center text-left">
                            <p className="text-xs md:text-sm leading-normal mt-4 md:my-4 font-Karla">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                        </div>
                    </div>
                </div>

                <div className="h-screen w-full lg:h-full lg:w-1/2">
                    <div className="h-screen lg:w-3/4 bg-no-repeat bg-center flex">
                        <div className="animate__animated animate__backInDown flex-col lg:m-auto mt-0 w-full">
                            <div className="w-full px-4 md:px-10">
                                <form className="w-full bg-white border-2 p-6 border-gray-200 shadow-lg rounded-xl bg-opacity-50 animate__animated animate__backInDown">
                                    <div className="justify-center pb-6">
                                        <h3 className="text-left justify-center font-bold font-karla text-m tracking-wide">Token Contract Address</h3>
                                        <input
                                            id="form_address"
                                            name="address"
                                            placeholder="TKN: 0x......"
                                            className="leading-tight text-m appearance-none border-2 shadow-md hover:shadow rounded-md w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-3 mt-2 tracking-wide"
                                        />
                                    </div>
                                    <div className="justify-center pb-6">
                                        <h3 className="text-left justify-center font-bold font-karla text-m tracking-wide">Private Link</h3>
                                        <input
                                            id="form_url"
                                            name="contentUrl"
                                            placeholder="https://"
                                            className="leading-tight text-m appearance-none border-2 shadow-md hover:shadow rounded-md w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-3 mt-2 tracking-wide"
                                        />
                                    </div>
                                    <div className="justify-center pb-6">
                                        <h3 className="text-left justify-center font-bold font-karla text-m tracking-wide">Minimum Amount</h3>
                                        <input
                                            id="form_balance"
                                            name="numberOfToken"
                                            placeholder="Tokens"
                                            className="leading-tight text-m appearance-none border-2 shadow-md hover:shadow rounded-md w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-3 mt-2 tracking-wide"
                                        />
                                    </div>
                                    <div className="justify-center mb-2">

                                        {!isLoading && <button
                                            enabled={toString(!isLoading)}
                                            onClick={onSubmit}
                                            type="submit"
                                            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-90 overflow-visible mb-3 mt-3 py-1 px-10 w-full h-10 bg-black rounded-lg hover:bg-purple-700 text-white uppercase font-karla font-semibold rounded shadow-lg sm:h-16 text-lg from-primary to-secondary"
                                        >
                                            Generate Link
                            </button>}
                                        <p>
                                            {isLoading ? <b className="animate-ping">Loading...</b> : ''}
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div>
    );
}