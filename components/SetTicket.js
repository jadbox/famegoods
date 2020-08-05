import React, { useState } from "react";
import { addVideo } from "../utils/CTS3";
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { Icon, InlineIcon } from "@iconify/react";
import data from "../data/Data";
import Converter from "./tokenConverter2";
import Link from "next/link";

import LoadingOverlay from "./LoadingOverlay";

function SetTicket() {
  return (
    <div>
      <div className="flex justify-center">
        <hr className="bg-gray-400 h-1 border-transparent w-1/2 mx-8"></hr>
      </div>
      <br />
      <div className="shadow-xl group container rounded-md bg-white max-w-lg mx-auto content-div">
        <div className="flex justify-center">
          {/*Ticket icon*/}
          <svg
            className="justify-center align-middle h-12 w-12"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M2 7v7h1c1.191 0 2 .809 2 2c0 1.191-.809 2-2 2H2v7h28v-7h-1c-1.191 0-2-.809-2-2c0-1.191.809-2 2-2h1V7zm2 2h24v3.188c-1.715.449-3 1.957-3 3.812c0 1.855 1.285 3.363 3 3.813V23H4v-3.188c1.715-.449 3-1.957 3-3.812c0-1.855-1.285-3.363-3-3.813z"
              fill="#626262"
            />
          </svg>
        </div>

        <div className="justify-center">
          <div className="flex items-center"></div>
          <h1 className="mt-2 mb-2 text-center font-extrabold text-2xl text-gray-900 text-opacity-100">
            Tokens to Unlock
          </h1>
        </div>

        <div className="mt-10 flex justify-center">
          <Converter />
        </div>
      </div>
    </div>
  );
}

export default SetTicket;
