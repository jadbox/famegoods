import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import Link from "next/link";
import { ethers } from "ethers";
import { getBoxProfile } from "../utils/EditProfiles";
import useAddress from "../utils/Address";

/* 3box addresses that can be used for testing.
  ---- Luis's 3box address ----
  '0x489e4CFfa9B59784C597C51cd24000b1db506c20'
  ---- Jonathan's 3box address ----
  '0xffaDc07f1BFb127F4312e8652fE94aB0c771b54D'
  How to create your own 3box profile for testing &/or leisure:
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
        contentUrl: {
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
  if (userProfile.image[0].contentUrl == undefined) {
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
      <div className="container mx-auto max-w-md overflow-hidden py-3">
        <div className="relative mb-2 bg-white rounded-lg shadow-lg">
          <img
            className="rounded-full py-4 px-4 w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1518549945153-64368b032957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
            alt="Profile picture"
          />
          <div className="text-center absolute w-full"></div>
          <div className="flex justify-center">
            <div className="sm:align-middle rounded rounded-t-lg overflow-hidden shadow max-w-md my-3">
              {userProfile.image && address ? (
                <div className="flex justify-center mt-10">
                  {imageDisplay}
                </div>
              ) : null}

              <div className="text-center px-3 pb-6 pt-2">
                <h1 className="text-black text-lg bold font-sans">
                  {userProfile.name} {userProfile.emoji}
                </h1>
                <p className="mt-2 font-sans font-light text-grey-dark">
                  {userProfile.description}
                </p>
                <p className="mt-2 font-sans font-light text-grey-dark">
                  {userProfile.website}
                </p>
                <Link href="/profile_edit">
                  <p className="mt-2 font-sans font-light text-blue-400 cursor-pointer">
                    Edit Profile
                  </p>
                </Link>
                <p className="mt-4">
                  Wallet Address: <br />
                  <span style={{ fontSize: "0.8em" }}>{useAddress()}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
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

*/
