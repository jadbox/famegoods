import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function useAddress() {
  const [address, setAddress] = useState();

  useEffect(() => {
    async function setup() {
      let provider = ethers.getDefaultProvider();
      let metaMask = window.ethereum;
      if (!metaMask) return;
      if (metaMask?.enable) await metaMask.enable();
      const accounts = await metaMask.send("eth_accounts");
      const account = accounts.result[0];

      setAddress(account);
      // signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
      return account;
    }
    setup();
  }, []);

  return address;
}

