import axios from "axios";
import { ethers } from "ethers";

const provider = ethers.getDefaultProvider();

const TOKEN_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint amount) returns (boolean)"
]

// Not working with current setup. Refocus on OM solution, cookies, or URL object to avoid localStorage use?

// export function clearParams() {

//   const url = new URL(window.location);
//   console.log('url params: ', url);
//   const isWallet = url.searchParams.has("account")
//   const isRoll = url.searchParams.has("token")

//   if(isWallet) {
//     localStorage.removeItem("token");
//     localStorage.removeItem("refreshToken");
//   }
  
//   if(isRoll) {
//     localStorage.removeItem("account");
//     localStorage.removeItem("signature");
//   }
// }

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
  if (typeof window !== 'undefined') {
    const walletAccess = localStorage.getItem("address");
    if (!walletAccess) return false;
    return true;
  } else {
    return false;
  }
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

export async function listRollTokens() {
  const data = await getTokenData();
  if (!data) return;

  const allTokens = data.map((entry) => {
    return entry.token.symbol;
  })
  return allTokens;
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
  if (!address) return;

	const privKey = createPrivateKey();
  const wallet = new ethers.Wallet(privKey, provider);

	const tokenData = await findTokenMatch(symbol);
	const tokenContractAddress = tokenData[0].token.contractAddress;
	const tokenContract = new ethers.Contract(tokenContractAddress, TOKEN_ABI, wallet);

	let balance = await tokenContract.balanceOf(address);
  balance = ethers.utils.formatUnits(balance, 4);
  const r = {
    balances: balance,
  };
  return r;
}