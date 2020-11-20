import React from 'react';
import PackCard from "../../components/bundels/PackCard"
import { Icon } from '@iconify/react';
import filterSolid from '@iconify/icons-la/filter-solid';
import Link from "next/link";


const bundelHome = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="h-screen w-screen fixed bg-white md:bg-top-blur bg-cover bg-no-repeat overflow-auto">
      <div className="flex flex-col justify-center items-center w-full container mx-sm m-auto">
        <div className="bg-white bg-opacity-50 text-black rounded-xl shadow border-2 border-gray-200 mt-16 py-4 px-4 w-10/12 lg:w-3/5">
          <div className="flex flex-wrap items-center">
            <div className="w-1/4 text-center hidden md:block">
              <div className="relative shadow mx-auto h-24 w-24 border-white rounded-full overflow-hidden border-4">
                <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80" />
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-2/5 text-left">
              <div className="p-2 xl:px-2 md:py-2">
                <h3 className="text-2xl font-karla">DFAME Launch Bundel</h3>
                <p className="text-sm text-gray font-karla">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 text-center">
              <div className="p-2 xl:px-5 md:py-2 item-center">
                <button onClick={() => setShowModal(true)} className="block w-full h-12 py-2 rounded-full text-black bg-white border-2 border-gray-200 font-karla text-sm font-medium uppercase tracking-wider shadow-md hover:shadow hover:bg-white hover:text-black focus:shadow-none focus:outline-none transition duration-150 ease-in-out mb-3">Buy this bundel</button>
              </div>
            </div>
          </div>
        </div >

        <div>
          <div className="flex flex-wrap mt-8 container px-16">
            <div className="xl:w-1/3 md:w-1/3 p-6 justify-between flex-col">
              <Link href="/packPreview">
                <PackCard></PackCard>
              </Link>
            </div>
            <div className="xl:w-1/3 md:w-1/3 p-6 justify-between flex-col">
              <PackCard></PackCard>
            </div>
            <div className="xl:w-1/3 md:w-1/3 p-6 justify-between flex-col">
              <PackCard></PackCard>
            </div>
            <div className="xl:w-1/3 md:w-1/3 p-6 justify-between flex-col">
              <PackCard></PackCard>
            </div>
            <div className="xl:w-1/3 md:w-1/3 p-6 justify-between flex-col">
              <PackCard></PackCard>
            </div>
            <div className="xl:w-1/3 md:w-1/3 p-6 justify-between flex-col">
              <PackCard></PackCard>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            {/*pack*/}
            <div className="relative w-auto my-12 mx-auto max-w-6xl">
              {/*pack details*/}
              <div className="min-w-screen min-h-screen flex mt-44 items-center justify-center">
                <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                  <div className="py-3 sm:max-w-xl sm:mx-auto">
                    <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                      <div className="px-12 py-5">
                        <h2 className="text-black font-karla text-xl font-semibold">Buy the social token bundle</h2>
                      </div>
                      <div className="bg-gray-200 w-full flex flex-col items-center">
                        <div className="flex flex-col items-center py-6 space-y-3">
                          <span className="text-lg text-gray-800 font-karla">How do you wanna pay?</span>
                        </div>
                        <div className="w-3/4 flex flex-col">
                          <button className="py-3 my-4 text-lg text-white bg-black rounded-xl text-white">Buy with $$$</button>
                          <button className="py-3 my-4 text-lg text-white bg-black rounded-xl text-white">Buy with DAI</button>
                        </div>
                      </div>
                      <div className="h-20 flex items-center justify-center">
                        <a onClick={() => setShowModal(false)} href="#" className="text-gray-600">Maybe later</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-40 bg-black" onClick={() => setShowModal(false)}></div>
        </>
      ) : null
      }
    </div>
  );
};

export default bundelHome