import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import TPPCard from "../components/tpp/TPPCard"

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

      <div className="flex flex-col">
        <div className="snap snap-mandatory snap-y bg-top-blur bg-cover bg-fixed bg-no-repeat">
          <TPPCard></TPPCard>
          <TPPCard></TPPCard>
          <TPPCard></TPPCard>
          {/*{videos.map((videoDetail, index) => {
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
          })}*/}
        </div>
      </div>
    </>
  );
}

export default Page;
