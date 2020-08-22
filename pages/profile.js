import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { ethers } from "ethers";
import { getProfile, setProfile } from "../utils/UserData";
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
  const [box, setBox] = useState();
  const [address, setAddress] = useState("");
  const [userProfile, setUserProfile] = useState({
    name: "",
    description: "",
    emoji: "",
    image: [],
    location: "",
    website: "",
  });

  let userAddress = useAddress();
  if (address !== userAddress) {
    setAddress(userAddress);
  }

  const get3BoxProfile = async (addr) => {
    const userProfile = await getProfile(addr);
    setUserProfile({
      name: userProfile.name,
      description: userProfile.description,
      emoji: userProfile.emoji,
      image: userProfile.image
        ? Object.values(userProfile.image[0].contentUrl)
        : [],
      location: userProfile.location,
      website: userProfile.website,
    });
  };

  useEffect(() => {
    if (!address) return;
    get3BoxProfile(address);
  }, [address]);

  return (
    <div>
      <div className="container mx-auto max-w-md overflow-hidden py-3">
        <div className="relative mb-2 bg-white rounded-lg shadow-lg">
          <img
            className="w-full h-64 object-cover"
            src="https://images.unsplash.com/photo-1518549945153-64368b032957?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
            alt="Profile picture"
          />
          <div className="text-center absolute w-full"></div>
          <div className="flex justify-center">
            <div className="sm:align-middle rounded rounded-t-lg overflow-hidden shadow max-w-md my-3">
              <div className="flex justify-center mt-10">
                <img
                  src={`https://ipfs.infura.io/ipfs/${userProfile.image[0]}`}
                  className="rounded-full border-solid border-white border-2 -mt-3"
                />
              </div>
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
                <p className="mt-4">
                  Wallet Address: <br />
                  <span style={{ fontSize: "0.8em" }}>{useAddress()}</span>
                </p>
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
  );
}

