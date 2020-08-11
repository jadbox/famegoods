import axios from "axios";
import { ethers } from "ethers";

export function getBalanceObject(balances, tokenName) {
  const tokenBalance = balances.filter((x) => x.token.symbol === tokenName);
  if (tokenBalance.length === 0) return null;
  return tokenBalance[0];
}

export function hasEnough(balances, tokenName, amount) {
  const balance = getBalanceObject(balances, tokenName);
  if (!balance) return null;
  return balance.decAmount >= amount;
}

export function getToken() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const apiTokenRef = urlParams.get("token");
  const refreshTokenRef = urlParams.get("refreshToken");

  console.log("apiTokenRef", apiTokenRef, refreshTokenRef, urlParams);

  if (apiTokenRef && refreshTokenRef) {
    localStorage.setItem("apiToken", apiTokenRef);
    localStorage.setItem("apiRefreshToken", refreshTokenRef);

    return {
      token: apiTokenRef,
      refreshToken: refreshTokenRef,
      hasAccess: true,
    };
  } else {
    const apiToken = localStorage.getItem("apiToken");
    const apiRefreshToken = localStorage.getItem("apiRefreshToken");

    if (!apiToken || !apiRefreshToken) return null;

    return {
      token: apiToken,
      refreshToken: apiRefreshToken,
      hasAccess: true,
    };
  }
  return null;
}
export function loginUrl(url) {
  return `https://roll.collab.land?serverURL=${url}&redirect=true&id=recI424YZv232Rg0a`;
}

export function getUserData() {
  const localToken = localStorage.getItem("apiRefreshToken");
  if (localToken === null) {
    console.log("No refresh token found in localStorage");
    return Promise.resolve(null);
  }

  return axios
    .get("https://api.tryroll.com/v2/users/session", {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    })
    .then((output) => {
      let balances = output.data.wallets[0].balances;
      // console.log(balances);

      // const tokenAmount = tokenBalance[0].amount;
      balances = balances.map((balance) => {
        const tokenAmount = balance.amount;
        const decAmount = ethers.utils.formatUnits(tokenAmount, 4);
        balance.decAmount = decAmount;
        return balance;
      });

      const r = {
        name: output.data.name,
        username: output.data.username,
        email: output.data.email,
        userTestID: output.data.userID,
        wallets: output.data.wallets,
        balances: balances,
      };

      // console.log("userData", r);

      return r;
    });
}
