import Box from "3box";
import { ethers } from "ethers";
import useAddress from "./Address";

// ---- IPFS stuf ----

// Used to format image data from IPFS then submit to 3box
export const formatIpfsImageObject = (returnedData) => {
  const format = [{
    "@type": "ImageObject",
    "contentUrl": {
      "/": returnedData.path
    }
  }];

  return format;
};

// ---- 3box stuff ----

export const SPACE_APP = "DFAME";

export async function getBoxProfile(address) {
  const userProfile = await Box.getProfile(address);
  return userProfile;
}

export async function setBoxProfile(address, fields, values) {
  const box = await Box.openBox(address, window.ethereum);
  console.log('Opening 3Box...');
  
  const space = await box.openSpace(SPACE_APP);
  console.log('syncing...');
  box.onSyncDone(() => console.log('sync done'));
  await box.public.setMultiple(fields, values);
}

// Used to format image data from 3box then save in state
// TODO: consolidate formatIpfsImageObject & below func into 1 with conditional (e.g. if (returnedData.path) {...})
export const formatImageObject = (ipfsHash) => {
  const format = [{
    "@type": "ImageObject",
    "contentUrl": {
      "/": ipfsHash
    }
  }];

  return format;
};