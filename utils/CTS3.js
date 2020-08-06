const shortid = require("shortid");
const UserData = require("./UserData");
const AWS = require("aws-sdk/global");
const S3 = require("aws-sdk/clients/s3");
AWS.S3 = S3;
// import { AmazonCognitoIdentity } from 'amazon-cognito-identity-js';

const albumBucketName = "collabtube-public-east1";
const bucketRegion = "us-east-1";
const IdentityPoolId = "us-east-1:4b27a1a5-db26-4125-bd3d-959c1a594db9";

// AWS.Cognito.config.update({accessKeyId: 'anything', secretAccessKey: 'anything'});

let init = false;
async function setup() {
  if (init) return;
  init = true;

  const cred = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  });
  AWS.config.credential = cred;
  AWS.config.update({
    region: bucketRegion,
    credentials: cred,
  });

  await new Promise((r) =>
    AWS.config.getCredentials(function (err) {
      if (err) {
        console.log(err);
        return;
      }
      r();
      console.log("Access Key:", AWS.config.credentials.accessKeyId);
    })
  );
}

export async function getVideo(id) {
  return _getVideo(id);
}

function _getVideo(id) {
  const address = "0x" + id.split("-")[0];
  return {
    address: address,
    uuid: id.split("-")[1],
    gif: `https://collabtube-encoded-east1.s3.amazonaws.com/g_${id}.gif`,
    video: `https://collabtube-encoded-east1.s3.amazonaws.com/v_${id}.m3u8`,
    img: "https://collabtube-encoded-east1.s3.amazonaws.com/i_${id}.jpg",
    id: id,
    title: id,
    tags: [id],
  };
}

export async function getVideos(onVideos) {
  await setup();

  const cred = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId,
  });

  const BUCKET_VIDS = "collabtube-encoded-east1";

  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: BUCKET_VIDS },
    region: bucketRegion,
  });

  var params = {
    Bucket: BUCKET_VIDS,
    MaxKeys: 100,
    Prefix: "g_",
  };

  let videos = [];
  s3.listObjectsV2(params, function (err, data) {
    if (err) {
      throw new Error(err);
      return;
    }
    // console.log(data.Contents);

    videos = data.Contents.map((x) => {
      const id = x.Key.replace(".gif", "").replace("g_", "");
      return _getVideo(id);
    });
    onVideos(videos);
  });
}

export async function addVideo(files, address, videoObj, onProgress) {
  if (!files[0] || !files[0].type) throw new Error("no video file");
  if (files[0].type.indexOf("video") === -1)
    throw new Error("not a video file");
  if (files[0].size > 1000000 * 80)
    throw new Error("video file is too large: try a shorter video");

  if (!address) throw new Error("No address provided");

  const sizeTotal = files[0].size;

  setup();

  var s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: { Bucket: albumBucketName },
  });

  const albumName = "";
  // var files = document.getElementById("photoupload").files;
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }
  var file = files[0];
  var fileName = file.name;
  var albumPhotosKey = encodeURIComponent(albumName) + "/";

  const id = shortid.generate();
  const addressFormat = address.replace("0x", "");
  var photoKey = `${addressFormat}-${id}`; // fileName; // albumPhotosKey +
  photoKey = photoKey || Math.floor(Math.random() * 10000); // in case of failure

  console.log("generating id", photoKey);

  await UserData.global.init(address);

  const vo = _getVideo(photoKey);
  const v = { ...vo, ...videoObj };

  await UserData.global.save(v);
  // console.log("finished");
  // return;

  // Use S3 ManagedUpload class as it supports multipart uploads
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: albumBucketName,
      Key: photoKey,
      Body: file,
      // ACL: "public-read"
    },
  });

  upload.on("httpUploadProgress", function (e) {
    const loadedTotal = e.loaded;
    var progress = Math.round((loadedTotal / sizeTotal) * 100);
    // console.log('httpUploadProgress', progress);
    if (onProgress) onProgress(progress);
  });

  var promise = upload.promise();

  return promise
    .then(
      function (data) {
        // if(onProgress) onProgress(100);
        return _getVideo(photoKey); // return the key
      },
      function (err) {
        console.log("err", err);
        // return alert("There was an error uploading your video: ", err.message);
      }
    )
    .then(async (videoObj) => {
      console.log("saving metadata to 3box");
      // await UserData.global.init();

      return videoObj;
    });
}
