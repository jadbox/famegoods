import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { getVideos } from "../utils/CTS3.js";

import WallCard from "./WallCard";
import Header from "./header";
import PostButton from "./navigation/postButton"

import { useOvermind } from "../stores/Overmind";

function mf(i) {
  const file = "b";
  return { file, id: Math.random() };
}

const init = {
  feed: new Array(6).fill(0).map((x, i) => mf(i)),
};

// @inject('store')
function Page() {
  const [openTab, setOpenTab] = React.useState(1);
  const [state, setState] = useState(init);
  const [sampleData, setSampleData] = useState([]);
  const [videos, setVideos] = useState([]);

  const { state: ostate, actions } = useOvermind();

  useEffect(() => {
    try {
      getVideos(setVideos);
      // console.log(videos);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Head>
        <title>DFAME</title>
      </Head>

      <Header></Header>

      <div className="flex flex-wrap mt-16 md:mt-20 lg:mt-20 fixed w-full items-center">
        <div className="align-center items-center justify-center mx-auto">
          <ul
            className="flex list-none flex-wrap pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs lg:text-base lg:tracking-wide lg:normal-case font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal " +
                  (openTab === 1
                    ? "text-" + "black" + " bg-white"
                    : "text-" + "black" + " bg-white text-opacity-50")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <span>Discovery</span>
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs lg:text-base lg:tracking-wide lg:normal-case font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal" +
                  (openTab === 2
                    ? "text-" + "black" + " bg-white"
                    : "text-" + "black" + " bg-white text-opacity-50")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <span>Memberships</span>
              </a>
            </li>
          </ul>
        </div>
      </div>


      <div className="flex flex-col">
        <div className="snap snap-y snap-mandatory">
          {videos.map((videoDetail, index) => {
            return (
              <WallCard
                key={index}
                title={videoDetail.title}
                gif={videoDetail.gif}
                file={videoDetail}
              // tags={videoDetail.tags}
              // video={videoDetail.video}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Page;
