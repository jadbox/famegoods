import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import playSolid from "@iconify/icons-la/play-solid";
import lockSolid from "@iconify/icons-la/lock-solid";
import ProfileHeader from "./profileHeader";
import FeedTabs from "../components/feedTabs";
import Memberships from "../components/membership";

import * as UserData from "../utils/UserData";
import { useOvermind } from "../stores/Overmind";


export default function WallCard({ gif, file }) {
  const [openTab, setOpenTab] = React.useState(1);
  const [videoMetadata, setVideoMetadata] = useState({});
  const router = useRouter();
  const { state: ostate, actions } = useOvermind();

  useEffect(() => {
    async function run() {
      const box = await UserData.forUser(file.address);
      const video = await box.getVideo(file.id);
      if (video) setVideoMetadata(video);
    }
    run();
  }, [file]);

  if (!videoMetadata) return null;

  function onClick() {
    if (ostate.user.isAuthenticated) {
      router.push("/post/[slug]", "/post/" + file.id);
      return;
    }
    actions.toggleWalletConnectModal(window.location.href + "post/" + file.id);
  }

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center snap-center always-stop px-4">
      <div
        onClick={onClick}
        className="relative shadow-focus rounded-xl w-full lg:w-2/6 justify-center cursor-pointer overflow-hidden sm:mt-10 md:mt-6 lg:mt-2"
        style={{
          backgroundImage: `url(${gif})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          height: "70%",
        }}
      >
        <div className="flex absolute top-0 right-0 left-0 p-6 mb-4">
          <ProfileHeader address={file.address} />
          <button className="top-0 right-0 w-20 h-8 text-center shadow-xl bg-white font-mont rounded-md">
            <p className="bg-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-fill-transparent font-extrabold text-sm">{videoMetadata.tokens} {videoMetadata.tokenName}</p>
          </button>
        </div>
        <div className="justify-center mt-32">
          <div className="w-4/5 break-words font-extrabold text-4xl text-white font-mont text-center tracking-wide m-auto">
            {videoMetadata.title || "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
}

function UnlockButton({ children }) {
  return (
    <button className="flex bg-white hover:bg-gray-300 text-black font-medium tracking-wide py-2 px-4 w-9/12 mr-2 items-center button-gradient w-full">
      <Icon className="m-1" icon={playSolid} color="black" />
      <span>{children}</span>
    </button>
  );
}

{
  /*<Link href="/roll_login">
        <div className="mb-8 rounded-md shadow-lg h-full mx-auto w-auto max-w-md w-full cursor-pointer">
          <img
            className="rounded-md h-full w-full object-cover gif-gradient"
            src={gif}
          />
          <style jsx>{`
            .gif-gradient {
              background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 1) 0%,
                rgba(0, 0, 0, 0.2) 45.31%,
                rgba(0, 0, 0, 0.4) 60.94%,
                rgba(0, 0, 0, 0.9) 100%
              );
            }
          `}</style>
          <div className="absolute top-0 p-6">
            <ProfileHeader />
          </div>
          <div className="absolute bottom-0 mx-6 mb-24">
            <Icon className="w-10 h-10" icon={lockSolid} color="white" />
            <div className="break-words font-extrabold text-4xl mb-4 p-2 text-white">
              {videoObj.title || "Loading..."}
            </div>
            <div className="w-full">
              <button className="flex bg-white hover:bg-gray-300 text-black font-medium tracking-wide py-2 px-4 w-64 rounded-lg mr-2 items-center button-gradient">
                <Icon className="m-1" icon={playSolid} color="black" />
                <span>
                  Own {videoObj.tokens} {videoObj.tokenName} to Unlock
                </span>
              </button>
            </div>
          </div>
        </div>
      </Link>*/
}