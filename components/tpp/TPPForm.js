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
        <div className="h-screen bg-top-blur bg-cover bg-fixed bg-no-repeat">
            <div className="justify-center mt-20 max-w-lg mx-auto animate__animated animate__backInDown">
                <div className="w-full px-2 bg-white px-10 pb-2 pt-10 rounded-lg shadow-lg">
                    <div className="rounded-lg shadow-sm mb-4 ">
                        <div className="rounded-lg shadow-lg md:shadow-xl relative overflow-hidden flex flex-col justify-center align-middle items-center">
                            <img src="/tpp-title.svg"></img>
                        </div>
                    </div>
                    <form className="w-full items-center">
                        <div className="justify-center my-6">
                            <h3 className="text-left justify-center font-bold font-karla text-m tracking-wide">Contract Address</h3>
                            <input
                                id="form_address"
                                name="address"
                                placeholder="0x......"
                                className="leading-tight tracking-wide appearance-none border-2 border-gray-500 mt-2 py-4 p-2 rounded-lg w-full placeholder-gray-500 text-lg leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="justify-center pb-6">
                            <h3 className="text-left justify-center font-bold font-karla text-m tracking-wide">Private Link</h3>
                            <input
                                id="form_url"
                                name="contentUrl"
                                placeholder="https://"
                                className="leading-tight text-xl appearance-none border-2 border-gray-500 rounded w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-2 mt-2 tracking-wide"
                            />
                        </div>
                        <div className="justify-center pb-6">
                            <h3 className="text-left justify-center font-bold font-karla text-m tracking-wide">Minimum Amount</h3>
                            <input
                                id="form_balance"
                                name="numberOfToken"
                                placeholder="Tokens"
                                className="leading-tight text-xl appearance-none border-2 border-gray-500 rounded w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-2 mt-2 tracking-wide"
                            />
                        </div>
                        <div className="justify-center mb-8">

                            {!isLoading && <button
                                enabled={toString(!isLoading)}
                                onClick={onSubmit}
                                type="submit"
                                className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 overflow-visible mb-8 mt-4 py-1 px-10 w-full h-20 bg-black rounded-lg hover:bg-gray-700 text-white font-semibold rounded shadow-lg sm:h-16 text-lg bg-gradient-to-r from-primary to-secondary"
                            >
                                Generate Link
          </button>}
                            <p>
                                {isLoading ? <b className="animate-ping">Loading...</b> : ''}
                            </p>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    );
}