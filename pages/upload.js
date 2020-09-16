import React, { useState, useRef, useEffect } from "react";
import Page from "../components/Page";
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { addVideo } from "../utils/CTS3";
import { Alert, AlertTitle } from "@material-ui/lab";
import axios from "axios";
import { ethers } from "ethers";
import LoadingOverlay from "../components/LoadingOverlay";
import { Icon, InlineIcon } from "@iconify/react";
import cloudUploadAltSolid from "@iconify/icons-la/cloud-upload-alt-solid";
import uploadSolid from "@iconify/icons-la/upload-solid";
import Link from "next/link";
import SetTicket from "../components/upload/SetTicket";
import useAddress from "../utils/Address";
import Lottie from "react-lottie";
import { useOvermind } from "../stores/Overmind";
import MetaMask from "../components/MetaMask";
import blueConfirmation from "../src/lotties/blueConfirmation";
import CloseOut from "../components/closeOut";
import ExternalContentSubmitForm from "../components/upload/ExternalContentSubmitForm";
import * as Wallet from "../utils/Web3Wallet";

export default function Tabs({ color="black", data }) {
  const [openTab, setOpenTab] = React.useState(1);
  const [state, setState] = useState({ progress: 0 });
  const [formdata, setFormData] = useState({ tokens: 1 });

  const { state: ostate, actions } = useOvermind();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: blueConfirmation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const address = useAddress();

  async function onSubmit() {
    const _files = hiddenFileInput.current; // document.getElementById("videoupload");
    if (!_files.files || _files.files.length === 0) {
      alert("Please add a video");
      return;
    }
    console.log(_files.files);

    const title = window.document.getElementById("videoTitle").value;
    // console.log("title", title);

    if (!title || title.length === 0) {
      alert("please add a title");
      return;
    }

    const onProgress = (p) => {
      setState((x) => ({ ...x, progress: p || 0 }));
    };

    try {
      setState((x) => ({ ...x, loading: true, progress: 0 }));

      const videoObj = {
        title: title,
        tokenSet: formdata.tokens,
        tokens: formdata.tokens["1"].amount,
        tokenName: formdata.tokens["1"].name,
      };

      // console.log("videoObj", videoObj);
      // return;
      addVideo(_files.files, address, videoObj, onProgress)
        .then((x) => {
          // if() setState((x) => ({ ...x, progress: 99 }));
          setTimeout((_) => {
            setState((x) => ({ ...x, loading: false }));
            alert(
              "Video uploaded! After processing completes in a few minutes it will be publically available."
            );
          }, 100);
        })
        .catch((e) => {
          throw new Error(e);
        });
    } catch (e) {
      //window.alert(e);
      setState((x) => ({ ...x, error: e.toString(), loading: false }));
      return;
    }
  }

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  function onFileChange() {
    const fileUploaded = hiddenFileInput.current.files;
    if (!fileUploaded || fileUploaded.length === 0) return;

    setState((x) => ({
      ...x,
      fileUploaded: fileUploaded[0],
      uploadFilename: fileUploaded[0].name,
    }));
  }

  function onTokenChange(tokens) {
    // console.log("onTokenChange", tokens);

    setFormData((x) => ({ ...x, tokens }));
  }

  if (!address && !data) {
    return <MetaMask></MetaMask>;
  }

  return (
    <>
      <div className="h-screen flex justify-center align-middle overflow-visible max-w-md mx-auto">
        <figure className="flex-auto bg-white rounded-md m-2 p-4 w-full">
          {state.error && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {state.error}
            </Alert>
          )} 
          {state.gif && <img src={state.gif} width="200" height="200" />}

        
          <div className="flex flex-wrap">
            <div className="w-full">
              <ul
                className="flex mb-0 list-none flex-wrap pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-" + color + " bg-white"
                        : "text-" + color + " bg-white text-opacity-25")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    <span alt="camera-emoji">📷</span> Publish a Video
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-" + color + " bg-white"
                        : "text-" + color + " bg-white text-opacity-25")
                    }
                    onClick={e => {
                      e.preventDefault();
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    <span alt="camera-emoji">🌐</span> Share a Link
                  </a>
                </li>              
              </ul>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="px-4 flex-auto">
                  <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <div className="mb-2">
                      <div className="mt-6">

                      {state.loading 
                        ? (
                          <LoadingOverlay open={state.loading} progress={state.progress} />
                        ) : (
                          <>
                            <input
                              className="leading-tight text-xl appearance-none border-2 border-gray-500 rounded w-full p-2 placeholder-gray-400 font-medium leading-tight focus:outline-none focus:shadow-outline pt-3 pb-2 mt-2 tracking-wide"
                              id="videoTitle"
                              placeholder="Video Title"
                              type="text"
                            />
                            <div className="relative mt-4">
                              <textarea
                                id="VideoDescription"
                                style={{}}
                                name="description"
                                cols="40"
                                rows="3"
                                placeholder="Add a video description..."
                                className="leading-tight tracking-wide appearance-none border-2 border-gray-500 mt-2 p-2 rounded-lg w-full placeholder-gray-600 font-normal leading-tight focus:outline-none focus:shadow-outline"
                              ></textarea>
                            </div>

                            <div className="flex-col items-center">
                              <button
                                onClick={handleClick}
                                className="mt-4 bg-gray-100 hover:bg-gray text-md text-black font-semibold w-full p-2 rounded-md border-b-8 border-gray-800 shadow-lg"
                              >
                                {state.fileUploaded && (
                                  <div className="flex flex-row items-center justify-between m-auto">
                                    <div className="ml-2 flex-1">
                                      <Lottie
                                        options={defaultOptions}
                                        height={60}
                                        width={60}
                                      />
                                    </div>
                                    <label className="text-blue-600 text-md font-normal lowercase">
                                      {state.uploadFilename}
                                    </label>
                                    <span className="flex-1"></span>
                                  </div>
                                )}

                                {!state.fileUploaded && (
                                  <div className="flex flex-row items-center justify-between m-auto">
                                    <Icon
                                      icon={uploadSolid}
                                      className="h-8 w-8 ml-2 flex-1"
                                    />
                                    <label className="text-md uppercase tracking-normal">
                                      Upload a Video File
                                    </label>
                                    <span className="flex-1"></span>
                                  </div>
                                )}
                              </button>

                              <input
                                ref={hiddenFileInput}
                                style={{
                                  display: "none",
                                }}
                                onChange={onFileChange}
                                id="videoupload"
                                type="file"
                                name="myfile"
                                accept="video/*;capture=camcorder"
                              />
                              <SetTicket
                                tokens={data}
                                onChange={onTokenChange}
                              />                            
                              <button
                                onClick={onSubmit}
                                className="overflow-visible mb-8 mt-4 w-full h-12 bg-black rounded-lg hover:bg-gray-700 text-white font-semibold rounded shadow-lg sm:h-16"
                              >
                                Publish Video
                              </button>
                            </div>
                          </>
                        )}
                        
                      </div>
                    </div>
                    </div>
                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                      <ExternalContentSubmitForm />
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const data = await Wallet.listRollTokens();
  return {
    props: { data },
    revalidate: 3600
  }
}