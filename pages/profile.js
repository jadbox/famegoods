import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import Link from "next/link";
import { ethers } from "ethers";
import { getBoxProfile } from "../utils/EditProfiles";
import useAddress from "../utils/Address";
import TPPCard from "../components/tpp/TPPCard"
import { Icon, InlineIcon } from '@iconify/react';
import userEditSolid from '@iconify/icons-la/user-edit-solid';

/*
  How to create your own 3box profile for testing:
1. Get the Metamask wallet Chrome extension. 
2. Use it to log in at https://3box.io/hub
3. Create your profile and login to DFAME with the same Metamask account used for 3box.
  You should see your 3box profile data in DFAME's profile tab.
*/

export default function Index() {
  const [userProfile, setUserProfile] = useState({
    name: "",
    description: "",
    emoji: "",
    image: [
      {
        "@type": "ImageObject",
        "contentUrl": {
          "/": "",
        },
      },
    ],
    location: "",
    website: "",
  });

  const address = useAddress();

  const get3BoxProfile = async (addr) => {
    const userBoxProfile = await getBoxProfile(addr);
    setUserProfile({
      name: userBoxProfile.name,
      description: userBoxProfile.description,
      emoji: userBoxProfile.emoji,
      [userBoxProfile.image ? "image" : "noop"]: userBoxProfile.image,
      location: userBoxProfile.location,
      website: userBoxProfile.website,
    });
  };

  useEffect(() => {
    if (!address) return;
    get3BoxProfile(address);
  }, [address]);

  let imageDisplay
  if (userProfile.image == undefined || !userProfile.image[0].contentUrl) {
    imageDisplay = null;
  } else {
    imageDisplay =
      <img
        src={`https://ipfs.infura.io/ipfs/${userProfile.image[0].contentUrl["/"]}`}
        className="rounded-full border-solid border-white border-2 -mt-3"
      />
  }

  return (
    <div>
      <div className="h-screen w-screen fixed overflow-auto">
        <div className="w-full h-64 md:h-full flex flex-wrap">
          <div className="mt-24 md:mt-64 lg:mt-0 md:h-64 w-full lg:h-full lg:w-1/2 flex justify-center items-center">
            <div className="max-w-xl px-8 md:px-0 lg:pl-24">
              <div className="flex flex-row">
                <div className="overflow-hidden">
                  {userProfile.image && address ? (
                    <div className="flex flex-row w-full items-center">
                      <div className="w-12 md:w-24 justify-left pt-4 md:mt-0">
                        {imageDisplay}
                      </div>
                      <h1 className="ml-4 md-6 text-black text-xl md:text-3xl text-lg uppercase bold font-karla">
                        {userProfile.name} {userProfile.emoji}
                      </h1>
                      <div className="mb-12 md:mb-16 cursor-pointer">
                        <Link href="/profile_edit">
                          <Icon icon={userEditSolid} height="1.2em" />
                        </Link>
                      </div>
                    </div>
                  ) : null}
                  <div className="text-left p-2">
                    <p className="md:mt-2 font-light text-grey-dark font-karla">
                      {userProfile.description}
                    </p>
                    <p className="mb-2 font-light text-grey-dark font-karla">
                      {userProfile.website}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-6 h-12 flex justify-between" >
                  <Link href="/roll_exchange">
                    <button className="z-10 px-8 md:px-16 bg-white border-2 rounded-full border-gray-200 shadow-md hover:shadow"> Buy $Token </button>
                  </Link>
                  <Link href="/roll_exchange">
                    <button className="z-10 px-8 md:px-16 bg-white border-2 rounded-full border-gray-200 shadow-md hover:shadow"> Sell $Token </button>
                  </Link>
                </div>
                {/*
                <div className="flex flex-row cursor-pointer">
                  <Link href="/telegram_chat">
                    <div className="h-24 w-full flex-shrink mr-3">
                      <img src="/chat-card.svg" className="hover:shadow-xl rounded-lg" alt="Chat" />
                    </div>
                  </Link>
                  <div className="h-24 w-full flex-shrink cursor-pointer">
                    <img src="/shop-card.svg" className="hover:shadow-xl rounded-lg" alt="Shop" />
                  </div>
                </div>
                */}
                <div className="h-24 md:mt-6 mb-12 md:mb-12 w-full flex-shrink cursor-pointer">
                  <div class='tooltip'>
                    <img src="/Apps.jpg" className="shadow-md hover:shadow rounded-xl" alt="App Cover" />
                    <span class="tooltip-text bg-black rounded-lg w-32 mb-4 text-sm text-white ml-4 -mt-4">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-screen w-full lg:h-full lg:w-1/2 md:flex md:flex-col md:items-center lg:block lg:flex-none">
            <div className="md:h-full md:w-4/5 lg:w-3/4 bg-no-repeat bg-center px-4 md:px-12 pt-16 md:overflow-auto">
              <div className="-mt-16 md:mt-16 lg:mt-24">
                <div className="flex flex-row items-center justify-between m-3">
                  <h1 className="font-karla text-m font-semibold mb-2 md:ml-0 justify-items-start">$Token Feed.</h1>
                  <div className="flex flex-row flex-no-wrap px-1">
                    <h1 className="font-karla text-m mb-2 md:ml-0 justify-items-start">Feed</h1>
                    <h1 className="font-karla text-m text-gray-400 mb-2 ml-3 justify-items-start">Stats</h1></div>
                </div>
                <TPPCard></TPPCard>
              </div>
              <div className="mt-16 md:12">
                <TPPCard></TPPCard>
              </div>
              <div className="mt-16 md:12">
                <TPPCard></TPPCard>
              </div>
              <div className="mt-16 md:12">
                <TPPCard></TPPCard>
              </div>
            </div>
          </div>

        </div >
      </div>
    </div>
  );
}

{/*
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
*/}