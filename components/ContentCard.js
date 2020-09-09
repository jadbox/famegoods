import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ProfileHeader from "./profileHeader";
import * as UserData from "../utils/UserData";
import { useOvermind } from "../stores/Overmind";

export default function ContentCard({ url }) {
	return (
    <div className="pb-24">
      <iframe 
        className="max-w-screen w-full min-h-screen" 
        style={{marginTop: "-68px"}} 
        src={url}
      />
    </div>
  );
}

function UnlockButton({ children }) {
  return (
    <button className="flex bg-white hover:bg-gray-300 text-black font-medium tracking-wide py-2 px-4 w-9/12 rounded-lg mr-2 items-center button-gradient w-full">
      <Icon className="m-1" icon={playSolid} color="black" />
      <span>{children}</span>
    </button>
  );
}