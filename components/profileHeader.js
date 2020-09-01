import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import { getBoxProfile } from "../utils/EditProfiles";

export default function ProfileHeader({ address }) {
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

  useEffect(() => {
    if (!address) return
    async function setup() {
      const profile = await getBoxProfile(address);
      setUserProfile((x) => ({...x, 
        name: profile.name,
        description: profile.description,
        emoji: profile.emoji,
        [profile.image ? "image" : "noop"]: profile.image,
        location: profile.location,
        website: profile.website,
      }));
    }
    setup();
  }, [address]);

// "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
  
  return (
    <div className="flex flex-auto">
      {userProfile.image[0].contentUrl["/"] && address ? (
        <img
          className="h-12 w-12 object-cover rounded-full border-solid border-white border-2"
          src={`https://ipfs.infura.io/ipfs/${userProfile.image[0].contentUrl["/"]}`}
          alt="User profile image"
        />
      ) : (
        <img
          className="h-12 w-12 object-cover rounded-full border-solid border-white border-2"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
          alt="User profile image"
        />
      )}      
      <div className="flex-auto">
        <p className="ml-4 text-extrabold tracking-wide text-white text-lg align-text-top">
          {userProfile.name || 'Guest'}
        </p>
        <p className="ml-4 text-extrabold tracking-wide text-white text-sm align-text-top">
          3 Hours Ago
        </p>
      </div>
    </div>
  );
}
