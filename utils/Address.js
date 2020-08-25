import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function useAddress() {
  const [address, setAddress] = useState();
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    if (address) return;
    async function setup() {
      let provider = ethers.getDefaultProvider();
      let metaMask = window.ethereum;
      if (!metaMask) {
        setRefresh(Math.random());
        return
      };
      const requestAccounts = await metaMask.request({ method: "eth_requestAccounts" });
      if (requestAccounts) {
        const accounts = await metaMask.request({ method: "eth_accounts" });
        const account = accounts[0];
        setAddress(account);
      }      
    }
    setup();
  }, [refresh]);

  return address;
}

