import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

export const initStore = {
  isLangEn: true,
  isLogin: false,
};

export const store = configureStore({
  reducer: reducer,
  preloadedState: initStore,
});
