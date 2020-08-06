import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { inject, observer, useObserver } from "mobx-react";
import Clock from "../../components/Clock";
import SortBy from "../../components/SortBy";
import Head from "next/head";
import useScript from "react-script-hook";
import { useRouter } from "next/router";
import { Icon, InlineIcon } from "@iconify/react";
import dollarSignSolid from '@iconify/icons-la/dollar-sign-solid';
import redoAltSolid from '@iconify/icons-la/redo-alt-solid';
import heartSolid from "@iconify/icons-la/heart-solid";
import commentsSolid from "@iconify/icons-la/comments-solid";
import shareAltSquareSolid from "@iconify/icons-la/share-alt-square-solid";
import angleRightSolid from '@iconify/icons-la/angle-right-solid';
import timesCircle from '@iconify/icons-la/times-circle';
import storeSolid from '@iconify/icons-la/store-solid';
import windowClose from '@iconify/icons-la/window-close';
import baselineShare from "@iconify/icons-ic/baseline-share";
import * as Server from "../../utils/CTS3";
import ProfileHeader from "../../components/profileHeader";
import * as UserData from "../../utils/UserData";


const init = {
  feed: [{ file: "small", refresh: 0 }],
  unlocked: false,
};

// @inject('store')
function Wall() {
  const [state, setState] = useState(init);
  const [videoObj, setVideo] = useState({});

  const router = useRouter();
  const slug = router.query.slug;

  const videoRef = useRef();

  function setup() {
    if (!window.videojs) return;
    if (state.setup) return;
    if (!videoRef.current) return;

    var player = window
      .videojs(videoRef.current, {
        autoplay: "any",
      })
      .ready(function () {
        // self.player = this;
        // self.player.on('play', self.handlePlay);
      });
    setState((x) => ({ ...x, setup: true }));
  }

  useEffect(
    (x) => {
      if (!state.data) return;
      if (videoObj.title) return;

      async function run() {
        const addr = state.data.address;

        const box = await UserData.forUser(addr);
        // console.log("file.id", file.id);

        box.getVideo(state.data.id).then((x) => {
          // console.log("video", x);
          if (x) setVideo(x);
        });
      }
      run();
    },
    [slug, state, state.file]
  );

  useScript({
    src: "https://vjs.zencdn.net/7.8.4/video.js",
    checkForExisting: true,
    onload: () => {
      setState((x) => ({ ...x, refresh: x.refresh + 1 }));
      setup();
    },
  });

  useEffect(() => {
    if (!slug) return;
    console.log("slug", slug);
    Server.getVideo(slug).then((o) => {
      console.log("Server.getVideo", o);
      setState((x) => ({ ...x, file: o.video, data: o }));
    });
  }, [slug]);

  useEffect(
    (x) => {
      setup();
    },
    [state, videoRef]
  );

  function unlock() {
    setState((x) => ({ ...x, unlocked: true }));
  }

  return useObserver(() => (
    <>
      <Head>
        <title>Player</title>
        <link
          href="https://vjs.zencdn.net/7.8.4/video-js.css"
          rel="stylesheet"
        />
      </Head>

      <div className="h-screen w-screen">
        <div className="flex h-full justify-center w-screen pb-16">
          {state.unlocked && (
            <div id="video" className="w-screen">
              {state.file && (
                <video
                  width="100%"
                  ref={videoRef}
                  className="h-full w-screen video-js vjs-default-skin vjs-big-play-centered"
                  controls
                  preload="auto"
                >
                  <source src={state.file} type="application/x-mpegURL" />
                </video>
              )}
            </div>
          )}

          {!state.unlocked && state.file && (
            <div onClick={unlock}>
              <div className="bg-black bg-opacity-100">
                <img
                  src={state.data.gif}
                  className="h-screen w-screen object-cover"
                />
              </div>
              <div className="absolute top-0 left-0 w-screen h-screen">
                <div className="flex ml-4 mt-6">
                  <ProfileHeader />
                  <Link href="../">
                    <Icon className="fixed top-0 right-0 w-12 h-12 ml-4 mt-6 mr-6" icon={timesCircle} color="white" />
                  </Link>
                </div>
              </div>
              {/*<div className="fixed top-0 right-0 w-screen h-screen">
                  <div className="ml-4 mt-6">
                    <Icon className="top-0 right-0 w-12 h-12" icon={timesCircle} color="white" />
                  </div>
          </div>*/}
              <div className="w-full fixed bottom-0">
                <div className="w-full ml-8 text-white mb-4 font-bold break-words text-4xl text-opacity-100">{videoObj.title}</div>
                <button className="mr-6 mb-20 text-white font-bold text-3xl rounded shadow content-center uppercase shadow focus:shadow-outline focus:outline-none tracking-wide py-1 px-auto rounded-lg items-center button-gradient transition duration-500 ease-in-out hover:bg-indigo-400 ">
                  <style jsx>{`
        .button-gradient {
          background: linear-gradient(90deg, #3BDEFF 0%, #635BFF 100%);
          box-shadow: 0px 2px 10px rgba(11, 3, 32, 0.05);
          width: 90%;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
                  <div className="w-full content-center">
                    Watch Now
                  </div>
                  <div className="font-medium text-sm tracking-wide">With Your {videoObj.tokens} {videoObj.tokenName}</div>
                </button>
              </div>
            </div>)}
          {/*<div className="absolute top-0 mx-auto w-auto max-w-lg justify-center">
                <div className="flex pt-3 pl-3">
                  <ProfileHeader />
                  <Link href="../">
                    <Icon className="w-10 h-10 bg-gray-300 ml-auto object-right" icon={windowClose} color="black" />
                  </Link>
                </div>
                <div className="justify-center mx-auto w-screen max-w-lg border-double">
                  <div className="ml-10 mt-16 font-bold text-lg mb-2 text-white">
                    {state.data.title}
                  </div>
                </div>
                <div className="flex ml-10 mt-2">
                  <div className="flex py-4">
                    <button className="flex mr-3 text-black hover:bg-gray-300 font-extrabold text-lg font-extrabold py-1 px-2 rounded-lg tracking-widest mr-2 bg-white hover:bg-gray-300 w-64 rounded-lg mr-2 items-center border-b-8 border-gray-500">
                      <Icon className="m-1" icon={dollarSignSolid} />
                      Unlock Tier 4 Membership
                </button>
                  </div>
                </div>
              </div>
              <div className="abolute bottom-0">
                <div className="font-bold text-xl mb-2 text-white text-center">
                  {state.data && state.data.title}
                </div>
              </div>
            </div>
          )}*/}

          {state.unlocked && state.file && (
            <div className="h-screen w-screen object-cover">

              < div className="absolute bottom-0 right-0 space-y-8 mb-32 mr-4">
                <Icon
                  icon={heartSolid}
                  height="2em"
                  className="animate-pulse text-red-700 cursor-pointer"
                />

                <Icon
                  icon={baselineShare}
                  height="2em"
                  className="text-blue-600 cursor-pointer"
                />
              </div>
            </div>
          )}
        </div>
      </div >
    </>
  ));
}

export default Wall;

/*
<Icon icon={commentsSolid} height="3em" className="text-gray-600" />

  <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
    Tags:
</div>
  */

                // Original set up in previous iteration

// <div className="flex h-screen w-screen justify-center">
//   <div id="video" >
//     {state.file && (
//       <video
//         ref={videoRef}
//         id="my-video"
//         className="video-js h-screen"
//         controls
//         preload="auto"
//       >
//         <source src={state.file} type="application/x-mpegURL" />
//       </video>
//     )}
//   </div>
// </div>

// Text in previous iteration

// <div className="text-center">
//   <h1 className="block text-x1 font-bold text-center underline py-4">
//     CONGRATULATIONS!
//   </h1>
//   <h3 className="block text-x1 text-center font-semibold text-gray-800 pb-4">
//     You've Unlocked Exclusive Content Below!
//   </h3>
//   <h3 className="block text-x1 text-center font-semibold text-gray-800 pb-4">
//     Click Below to Claim.
//   </h3>
//
//   <button class="bg-transparent hover:bg-gray-400 text-gray-800 font-bold px-4 rounded inline-flex items-center">
//     <Icon icon={openPadlock} width="70" height="70" />
//     <span className="block">Press to Play</span>
//   </button>
// </div>
