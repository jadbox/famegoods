import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { ethers } from "ethers";
import Box from "3box";
{/*const Box = require("3box");*/ }

export default function Index() {
  {/*const [profile, setProfile] = useState(null);

  async function getProfile() {
    const _profile = await Box.getProfile(
      "0xffaDc07f1BFb127F4312e8652fE94aB0c771b54D"
    );
    console.log(_profile);
    setProfile(_profile);
  }

  useEffect(() => {
    getProfile();
  }, []);*/}
  const [box, setBox] = useState(null)

  const defaultProvider = ethers.getDefaultProvider('kovan')

  // This is an expendable private key created only to be used for this purpose
  // Can also use ethers.Wallet.createRandom() to create a test wallet
  const pk = '0xd2c63861bd5482b97f25303187772f0d7b94d0f0d2a628e724b3a92041887e8c'
  const walletInstance = new ethers.Wallet(pk, defaultProvider)

  const auth3Box = async () => {
    const address = walletInstance.address
    const spaces = ['myDapp']
    await box.auth(spaces, { address, defaultProvider })
  }

  useEffect(() => {
    const createBox = async () => {
      const box = await Box.create()
    }
    setBox(createBox())
    const address = walletInstance.address
    console.log(address)
  }, [])


  return (
    <div>
      <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-3 bg-white">
        <div className="relative mb-2">
          <img className="w-full h-64 object-cover" src="https://images.unsplash.com/photo-1518549945153-64368b032957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
            alt="Profile picture" />
          <div className="text-center absolute w-full">
          </div>
          <div className="flex justify-center">
            <div className="sm:align-middle rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
              <div className="flex justify-center mt-10">
                <img src="https://i.imgur.com/8Km9tLL.jpg" className="rounded-full border-solid border-white border-2 -mt-3" />
              </div>
              <div className="text-center px-3 pb-6 pt-2">
                <h1 className="text-black text-lg bold font-sans">Nele Weißhan</h1>
                <p className="mt-2 font-sans font-light text-grey-dark">Hello, I'm from another the other side!</p>
              </div>
              <div className="flex justify-center pb-3 text-grey-dark ml-10 mr-10 mb-3">
                <div className="text-center mr-3 border-r pr-3">
                  <p className="text-xl">34</p>
                  <span className="text-gray-600 text-sm">Memberships</span>
                </div>
                <div className="text-center">
                  <p className="text-xl">42</p>
                  <span className="text-gray-600 text-sm">Followers</span>
                </div>
                <div className="text-center ml-3 border-l pl-3">
                  <p className="text-xl">34</p>
                  <span className="text-gray-600 text-sm">Networth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
