import axios from "axios";
import { ethers } from "ethers";

export function checkForRoll() {
  if (typeof window !== 'undefined') {
    const rollAccess = localStorage.getItem("apiRefreshToken");
    if (!rollAccess) return false;
    return true;
  } else {
    return false;
  }
}

export function getBalanceObject(balances, tokenName) {
  const tokenBalance = balances.filter((x) => x.token.symbol === tokenName);
  if (!tokenBalance) return null;
  console.log("Token balance after getBalanceObject:", tokenBalance[0]);
  return tokenBalance[0];
}

export function getToken() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const apiTokenRef = urlParams.get("token");
  const refreshTokenRef = urlParams.get("refreshToken");

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

// Original Roll redirect link: https://roll.collab.land?serverURL=${url}&redirect=true&id=recI424YZv232Rg0a
// Params for new server: /connect?id=${id}&callbackURL=${callback}&redirect=true

// For Roll login, these are the redirect params:
// redirectURL?token=${token}&refreshToken=${refreshToken}&id=${id}

// Metamask or other web3 wallet login redirect url params: 
// redirectURL?account=WALLET_ADDR&signature=SIG

export function loginUrl(url) {
  if (!url) url = window.location.href;

  const _url = new URL(url);
  const s = new URLSearchParams(_url.search);
  s.delete('token');
  s.delete('apiToken');
  s.delete('apiRefreshToken');
  s.delete('refreshToken');
  s.delete('callbackURL');
  s.delete('signature');
  const qs = s.toString().replace('?', '');
  const result = encodeURIComponent(location.protocol + '//' + location.host + location.pathname);

  // the auth server give these params back to us after the redirect
  let params = '';
  s.forEach((v, k) => {
    params += '&' + k + '=' + v;
  })
  return `https://roll.collab.land/connect?id=recI424YZv232Rg0a&callbackURL=${result}&redirect=true` + params;
}

export function getUserData() {
  const localToken = localStorage.getItem("apiRefreshToken");
  if (!localToken) return;
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
