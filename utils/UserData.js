import Box from "3box";
import { ethers } from "ethers";
// const Box = require("3box");

export function test() {
  return { test: "hello" };
}

const SPACE_APP = "DFAME";
const defaultProvider = ethers.getDefaultProvider();

export function getNewVideos(address) {
  const s = Box.getSpace(address, SPACE_APP);

  return s.public.all().videos || [];
}

// const box = await Box.create(window.ethereum);

export class DataStore {
  constructor() {
    // this.box = box;
  }

  async init(address) {
    if (this.box) return;
    if (this.mutex) {
      console.log("waiting");
      await this.mutex;
      return;
    }
    console.log("opening", address);

    this.mutex = new Promise(async (res) => {
      const box = await Box.openBox(address, defaultProvider);
      this.box = box;

      this.box.openSpace(SPACE_APP);
      this.space = await this.box.openSpace(SPACE_APP);

      res();
      this.mutex = null;
    });

    await this.mutex;

    //addr[0]

    // return this.space;
  }

  async getVideo(id) {
    return await await this.space.public.get("v_" + id);
  }

  async getVideos(address) {
    const vs = (await this.space.public.get("videos-list")) || [];
    const ps = vs.map((x) => this.space.public.get("v_" + x));
    return await Promise.all(...ps);
  }

  async save(video) {
    if (!video || !video.id) throw new Error("null video");

    const videos = (await this.space.public.get("videos-list")) || [];
    videos.push(video.id);
    await this.space.public.set("videos-list", videos);

    await this.space.public.set("v_" + video.id, video);

    // const d = await this.space.public.get("hello");
    // console.log("data get:", d);
  }
}

export const global = new DataStore();

const stores = {};
export async function forUser(address) {
  if (stores[address]) {
    const c = stores[address];
    await c.init(address);
    return c;
  }

  const d = new DataStore();
  stores[address] = d;
  await d.init(address);

  return d;
}
