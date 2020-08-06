import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon, InlineIcon } from "@iconify/react";
import playSolid from "@iconify/icons-la/play-solid";
import lockSolid from "@iconify/icons-la/lock-solid";
import heartSolid from "@iconify/icons-la/heart-solid";
import commentsSolid from "@iconify/icons-la/comments-solid";
import shareAltSquareSolid from "@iconify/icons-la/share-alt-square-solid";
import baselineShare from "@iconify/icons-ic/baseline-share";
import ProfileHeader from "./profileHeader";

import * as UserData from "../utils/UserData";

export default function WallCard({ tags, title, video, gif, file }) {
  const [videoObj, setVideo] = useState({});
  // Sample file retrieval logic

  // const [images, setImages] = useState([]);
  // const [files, setFiles] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [term, setTerm] = useState('');
  //
  // useEffect(() => {
  //   if (file) {
  //     setFiles(...file.file)
  //   } else {
  //     setFiles(`https://source.unsplash.com/random`)
  //   }
  // }, []);

  //  Parent css removed: h-auto max-w-screen-sm

  const address = file.address;

  useEffect((x) => {
    async function run() {
      const box = await UserData.forUser(address);
      // console.log("file.id", file.id);

      box.getVideo(file.id).then((x) => {
        // console.log("video", x);
        if (x) setVideo(x);
      });
    }
    run();
  }, []);

  if (!videoObj) return null;
  console.log("videoObj", videoObj);

  return (
    <div className="relative w-screen h-full px-4 pt-2 snap-center always-stop z-0">
      <div className="hidden absolute top-0 right-0 h-8">
        <a href="https://roll.collab.land?serverURL=http://localhost:3000&redirect=true&id=recI424YZv232Rg0a">
          <button className="bg-gray-500 rounded-lg p-3 text-white text-center z-50">
            Open Roll Wallet
          </button>
        </a>
      </div>
      <Link href="/post/[slug]" as={"/post/" + file.id}>
        <div className="mb-8 rounded-md shadow-lg h-full mx-auto w-auto max-w-md w-full cursor-pointer">
          <img
            className="rounded-md h-full w-full object-cover gif-gradient"
            src={gif}
          />
          <style jsx>{`
        .gif-gradient {
          background-image: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.2) 45.31%, rgba(0, 0, 0, 0.4) 60.94%, rgba(0, 0, 0, 0.9) 100%);
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
                <span>Own {videoObj.tokens} {videoObj.tokenName} to Unlock</span>
              </button>
            </div>

            {/*<div className="inline-block bg-gray-200 bg-opacity-50 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">

              Tags: {tags}
  </div>*/}
          </div>
        </div>
      </Link>
    </div>
  );
}

// <Icon icon={commentsSolid} height="3em" className="text-white" />
// <Icon icon={baselineShare} height="3em" className="text-blue-600" />

/*
<div className="absolute bottom-0 right-0 space-y-8 mx-6 my-8">
          <Icon
            icon={heartSolid}
            height="3em"
            className="text-red-700 animate-pulse"
          />
        </div>
*/
