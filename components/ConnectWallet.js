import React from "react";
import * as Roll from "../utils/Roll";
import Link from "next/link";

// https://pbs.twimg.com/profile_images/1221640912050294784/XBtcYXED_400x400.jpg

export default function ConnectWallet({ redirectTo }) {
  if (!redirectTo) redirectTo = window.location.href;
  return (
    <div className="container p-6">
      <div className="h-48 w-48 mx-auto mb-16 mt-12">
        <img src="/logoName.png" alt="DFAME Logo" />
      </div>
      <p className="text-4xl font-header text-center">
        Connect a Wallet to Continue
      </p>
      <div className="mx-auto mt-12">
        <a
          href={Roll.loginUrl(redirectTo)}
          className="flex justify-center w-full p-3 text-center rounded-lg mt-4 bg-blue-500 text-white"
        >
          Connect Wallet
        </a>
        <Link href="/roll_register">
          <a className="flex justify-center w-full p-3 text-center rounded-lg mt-4 bg-transparent border border-blue-500 text-blue-500">
            Register for a Roll Wallet
          </a>
        </Link>
      </div>
    </div>
  );
}
