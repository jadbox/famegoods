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
      </div>
      <br />
      <div className="justify-center">
        <h1 className="m-2 font-extrabold text-2xl text-gray-900 text-opacity-100">
          <span alt="ticket-emoji">🎟️</span> Set token price
          </h1>
      </div>
      <div className="mt-4 flex justify-center">
        <Converter />
      </div>
    </div>
  );
}

export default SetTicket;
