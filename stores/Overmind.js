import { createOvermind } from "overmind";
import { createHook } from "overmind-react";
import * as Roll from "../utils/Roll";

export const useOvermind = createHook();

export const overmind = createOvermind({
  state: {
    currentStep: 1,
    username: "",
    roll: {
      apiToken: null,
      apiRefreshToken: null,
      hasAccess: false,
    },
    user: {
      isUnauthenticated: false,
      isAuthenticated: false,
      // name: null,
      // username: null,
      // email: null,
      // userTestID: null,
      wallets: [],
      balances: [],
      // refresh: 0,
    },
  },
  actions: {
    async refreshUser({ state, actions }) {
      const user = await Roll.getUserData();

      if (!user) {
        state.user.isUnauthenticated = true;
        return;
      }
      state.user.isUnauthenticated = false;
      actions.updateUser(user);
    },
    updateUser({ state }, user) {
      if (!user) return;
      state.user = user;

      // if (user.balances.length > 0) state.user.refresh++;
    },
    updateTokens({ state }, params) {
      const { token, refreshToken, hasAccess } = params;

      // console.log("apiRefreshToken", token, refreshToken, params);
      state.roll.apiToken = token;
      state.roll.apiRefreshToken = refreshToken;
      state.roll.hasAccess = hasAccess;

      if (state.roll.apiToken) {
        state.user.isUnauthenticated = false;
        state.user.isAuthenticated = true;
      }
    },
    updateStep({ state }, step) {
      state.currentStep = step;
    },
    updateUsername({ state }, username) {
      state.username = username;
    },
  },
});
