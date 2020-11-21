import { createOvermind } from "overmind";
import { createHook } from "overmind-react";
import * as Roll from "../utils/Roll";
import * as Wallet from "../utils/Web3Wallet";

export const useOvermind = createHook();

export const overmind = createOvermind(
  {
    state: {
      application: {
        walletConnectModal: false,
        redirectTo: null,
      },
      currentStep: 1,
      username: "",
      roll: {
        apiToken: null,
        apiRefreshToken: null,
        hasAccess: false,
      },
      user: {
        isAuthenticated: false,
        // name: null,
        // username: null,
        // email: null,
        // userTestID: null,
        wallets: {
          address: null,
          signature: null,
          hasAccess: false,
        },
        balances: [],
        // refresh: 0,
      },
    },
    actions: {
      async refreshUser({ state, actions }, symbol) {
        if (!symbol) return;
        let user = await Wallet.getTokenBalance(symbol);
        //console.log("User after web3 check", user);  
        if (!user) user = await Roll.getUserData();
        //console.log("User after Roll check", user);  

        state.user.isAuthenticated = true;
        actions.updateUser(user);
        //console.log("Final user in ostate", user);  
      },
      updateUser({ state }, user) {
        if (!user) return;
        state.user = { ...state.user, ...user };

        // if (user.balances.length > 0) state.user.refresh++;
      },
      updateTokens({ state }, params) {
        const { token, refreshToken, hasAccess } = params;

        // console.log("apiRefreshToken", token, refreshToken, params);
        state.roll.apiToken = token;
        state.roll.apiRefreshToken = refreshToken;
        state.roll.hasAccess = hasAccess;

        if (state.roll.apiToken) {
          state.user.isAuthenticated = true;
        }
      },
      updateWalletData({ state }, params) {
        const { address, signature, hasAccess } = params;

        state.user.wallets.address = address;
        state.user.wallets.signature = signature;
        state.user.wallets.hasAccess = hasAccess;

        if (state.user.wallets.address) {
          state.user.isAuthenticated = true;
        }
      },
      resetBalance({ state }, balance) {
        state.user.balances = balance;
      },
      updateStep({ state }, step) {
        state.currentStep = step;
      },
      updateUsername({ state }, username) {
        state.username = username;
      },
      toggleWalletConnectModal({ state }, url) {
        state.application.walletConnectModal = !state.application
          .walletConnectModal;
        state.application.redirectTo = url;
      },
    },
  },
  {
    devtools: true,
  }
);
