import Box from "3box";
import { ethers } from "ethers";
import useAddress from "./Address";

// ---- IPFS stuf ----

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
  const userProfile = await getBoxProfile(address);
  console.log('Accessing user profile...');
  const space = await box.openSpace(SPACE_APP);
  console.log('syncing...');
  box.onSyncDone(() => console.log('sync done'));
  await box.public.setMultiple(fields, values);
}