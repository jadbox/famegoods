import axios from "axios";
import { ethers } from "ethers";
import { useOvermind } from "../stores/Overmind";

// const { state: ostate, actions } = useOvermind();

const provider = ethers.getDefaultProvider();

const TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint amount) returns (boolean)"
]

export function getWalletData() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const address = urlParams.get("account");
  const sig = urlParams.get("signature");

  if (address && sig) {
    localStorage.setItem("address", address);
    localStorage.setItem("signature", sig);

    return {
      address: address,
      signature: sig,
      hasAccess: true,
    };
  } else {
    const addr = localStorage.getItem("address");
    const sign = localStorage.getItem("signature");

    if (!addr && !sign) return null;

    return {
      address: addr,
      signature: sign,
      hasAccess: true,
    };
  }
  return null;
}

export function checkForWebWallet() {
  const walletAccess = localStorage.getItem("address");
  if (!walletAccess) return false;
  return true;
}

export function createPrivateKey() {
  const newWallet = ethers.Wallet.createRandom();
  const mnemonic = ethers.Wallet.fromMnemonic(newWallet.mnemonic.phrase);
  const privateKey = mnemonic.privateKey; // mnemonic.address for address
  return privateKey;
}

export async function getTokenData() {
	const tokens = await axios.get("https://api.tryroll.com/v1/tokens/exchange");
	return tokens.data;
}

export async function findTokenMatch(symbol) {
	const data = await getTokenData();
	if (!data) return;

	const matchedToken = data.filter(function(entry) {
		return entry.token.symbol == symbol;
	})
	return matchedToken;
}

export async function getTokenBalance(symbol) {
	const address = localStorage.getItem("address");
  if (address === null) {
    return;
  }
	const privKey = createPrivateKey();
  const wallet = new ethers.Wallet(privKey, provider);

	const tokenData = await findTokenMatch(symbol);
	const tokenContract = tokenData[0].token.contractAddress;
	const token = new ethers.Contract(tokenContract, TOKEN_ABI, wallet);

	let balance = await token.balanceOf(address);
  balance = ethers.utils.formatUnits(balance, 4);
  const r = {
    balances: balance,
  };
  return r;
}

// Redundant step; can be added into getTokenBalance with 2-3 lines

export async function walletBalanceCheck(symbol) {
  const balance = await getTokenBalance(symbol);
  const r = {
    balances: balance,
  };
  return r;
}

// WIP; may just scrap

export function getWalletBalance() {
  const address = localStorage.getItem("address");
  if (address === null) {
    return;
  }
  // Add a checks for address (& API tokens in getUserData) from Overmind

  const res = axios.get("https://api.tryroll.com/v1/tokens/exchange");
  console.log(res);

  // Unfinished bc getInitialProps worked in page test2.js. Finish?
}