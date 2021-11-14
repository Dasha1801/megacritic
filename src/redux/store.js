import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const initStore = {
  isLangEn: true,
  isLogin: false,
  user: {
    name: '',
    photo: '',
  },
};

export const store = configureStore({
  reducer: reducer,
  preloadedState: initStore,
});
