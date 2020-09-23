import React, { useState } from "react";
import { addVideo } from "../../utils/CTS3";
import { TextField, Slider, Typography, Button } from "@material-ui/core";
import { Icon, InlineIcon } from "@iconify/react";
import data from "../../data/Data";
import UploadTokenMenu from "./UploadTokenMenu";
import Link from "next/link";

import LoadingOverlay from "../LoadingOverlay";

function SetTicket({ onChange, tokens }) {

  return (
    <div>
      <div className="flex justify-center"></div>
      <div className="justify-center lg:mt-0 md:ml-10 lg:ml-10">
        <h1 className="m-2 md:mt-0 font-extrabold text-2xl text-gray-900 text-opacity-100">
          <span alt="ticket-emoji">🎟️</span> Set pricing
        </h1>
      </div>
      <div className="mt-2 flex justify-center">
        <UploadTokenMenu tokens={tokens} onChange={onChange} />
      </div>
    </div>
  );
}

export default SetTicket;
