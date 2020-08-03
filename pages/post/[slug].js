import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { inject, observer, useObserver } from "mobx-react";
import Clock from "../../components/Clock";
import { Button } from "@material-ui/core";
import TestCard from "../../components/TestCard";
import SortBy from "../../components/SortBy";
import Head from "next/head";
import useScript from "react-script-hook";
import { useRouter } from "next/router";
import { Icon, InlineIcon } from '@iconify/react';
import heartSolid from '@iconify/icons-la/heart-solid';
import commentsSolid from '@iconify/icons-la/comments-solid';
import shareAltSquareSolid from '@iconify/icons-la/share-alt-square-solid';
import baselineShare from '@iconify/icons-ic/baseline-share';
import * as Server from "../../utils/CTS3";

const init = {
  feed: [{ file: "small", refresh: 0 }],
};

// @inject('store')
function Wall() {
  const [state, setState] = useState(init);
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
      console.log("o", o);
      setState((x) => ({ ...x, file: o.video }));
    });
  }, [slug]);

  useEffect(
    (x) => {
      setup();
    },
    [state, videoRef]
  );

  const name = "small";
  const file = `https://collabtube-encoded-east1.s3.amazonaws.com/${name}.m3u8`;

  return useObserver(() => (
    <>
      <Head>
        <title>Player</title>
        <link
          href="https://vjs.zencdn.net/7.8.4/video-js.css"
          rel="stylesheet"
        />
      </Head>

      <div className="h-screen">
        <div className="relative flex h-full justify-center">
          <div id="video" >
            {state.file && (
              <video
                ref={videoRef}
                id="my-video"
                className="video-js h-full"
                controls
                preload="auto"
              >
                <source src={state.file} type="application/x-mpegURL" />
              </video>
            )}
          </div>
          <div className="absolute bottom-0">
            <div className="mb-16 ml-4">
              <div className="font-bold text-xl mb-2 text-white">
                Title
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
                3 $TINGLES
              </button>
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2">
                Tags:
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 space-y-8 mb-16 mr-4">
            <Icon icon={heartSolid} height="3em" className="text-red-700" />
            <Icon icon={commentsSolid} height="3em" className="text-gray-600" />
            <Icon icon={baselineShare} height="3em" className="text-blue-600" />
          </div>

        </div>

      </div>


    </>
  ));
}

export default Wall;

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
