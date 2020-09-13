import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import { getVideos } from "../utils/CTS3.js";

import WallCard from "./WallCard";
import Header from "./header";

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

  // Being undone by new conditional in actions.refreshUser(); is it necessary here?
  console.log("Ostate user balance from Page.js:", ostate.user.balances);
  useEffect(() => {
    if (ostate.user.balances.length === 0) actions.refreshUser();
  }, [ostate.user.balances, ostate.user]);

  return (
    <>
      <Head>
        <title>DFAME</title>
      </Head>

      <div className="flex flex-col">
        <Header></Header>
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
