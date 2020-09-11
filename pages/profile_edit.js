import { useEffect, useState, useRef } from "react";
import useAddress from "../utils/Address";
import { useRouter } from "next/router";
import * as UserData from "../utils/UserData";
import Box from "3box";
import { 
  setBoxProfile, 
  getBoxProfile, 
  formatImageObject,
  formatIpfsImageObject 
} from "../utils/EditProfiles";

const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

const ProfileEditor = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState({
    version: 0,
    name: "",
    description: "",
    location: "",
    website: "",
    image: [{
      "@type": "ImageObject",
      "contentUrl": {
        "/": ""
      }
    }],
  });
  const [state, setState] = useState({
    buffer: null,
    file: null,
    ipfsHash: "",
  });

  // ---- IPFS stuff ----

  const captureFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setState(() => ({ file: file }));
  };

  const handleIpfsSubmit = async () => {
    try {
      const file = await ipfs.add(state.buffer);
      const formattedFile = formatIpfsImageObject(file);
      setState((x) => ({ ...x, ipfsHash: file.path }));
      setUserProfile((x) => ({ ...x, 
        image: formattedFile, 
        version: x.version++ 
      }));
      //setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!state.file) return;
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(state.file);
    reader.onloadend = () => {
      setState((x) => ({ buffer: Buffer(reader.result), ...x }));
    };
    //setIsLoading(true);
    handleIpfsSubmit();
  }, [state.file, state.ipfsHash]);

  // ---- 3Box stuff ----

  const handleProfileChange = (e) => {
    e.preventDefault();
    setUserProfile((x) => ({ ...x, [event.target.name]: event.target.value }));
  };

  const address = useAddress();

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const fields = Object.keys(userProfile);
    const values = Object.values(userProfile);
    try {
      console.log("Connecting to 3Box...");
      setIsLoading(true);
      await setBoxProfile(address, fields, values);
      console.log("Edits completed");
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const get3BoxProfile = async (addr) => {
    const userProfile = await getBoxProfile(addr);
    //console.log("userProfile: ", userProfile);
    setUserProfile((x) => ({
      version: x.version + 1,
      name: userProfile.name,
      description: userProfile.description,
      location: userProfile.location,
      website: userProfile.website,
      [userProfile.image ? "image" : "noop"]: userProfile.image,
    }));
  };

  useEffect(() => {
    if (!address) return;
    if (userProfile.version > 0) return;
    get3BoxProfile(address);
  }, [userProfile, address]);

  let imageDisplay
  if (userProfile.image == undefined || !userProfile.image[0].contentUrl) {
    imageDisplay = null;
  } else {
    imageDisplay = 
      <img
        src={`https://ipfs.infura.io/ipfs/${userProfile.image[0].contentUrl["/"]}`}
        className="rounded-full border-solid border-white border-2 -mt-3"
      />
  }

  return (
    <div>
      {userProfile.image && address ? (
        <div className="flex justify-center mt-10">
          {imageDisplay}
        </div>
      ) : null}
      <div className="flex justify-center mt-10">
        <input type="file" onChange={captureFile} />
      </div>

      <div className="flex justify-center mt-4">
        <form onSubmit={handleProfileSubmit} className="w-full max-w-lg">
          <span className="block ml-3">Name:</span>
          <div className="flex justify-center pb-6">
            <input
              name="name"
              value={userProfile.name || ""}
              onChange={handleProfileChange}
              placeholder={userProfile.name}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <span className="block ml-3">Description:</span>
          <div className="flex justify-center pb-6">
            <textarea
              name="description"
              value={userProfile.description || ""}
              onChange={handleProfileChange}
              placeholder={userProfile.description}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <span className="block ml-3">Location:</span>
          <div className="flex justify-center pb-6">
            <input
              name="location"
              value={userProfile.location || ""}
              onChange={handleProfileChange}
              placeholder={userProfile.location}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          <span className="block ml-3">Website:</span>
          <div className="flex justify-center pb-6">
            <input
              name="website"
              value={userProfile.website || ""}
              onChange={handleProfileChange}
              placeholder={userProfile.website}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>

          {isLoading ? (
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-blue-500 flex justify-center w-40 text-white rounded font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                disabled
              >
                <svg
                  className="animate-spin h-5 w-5 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 w-40 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Save
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProfileEditor;