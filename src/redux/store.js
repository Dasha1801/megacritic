import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const initStore = {
  isLangEn: true,
  isLogin: false,
  isAdmin: false,
  posts: [],
  review: {
    category: '',
    id: '',
    title: '',
    post: '',
    tags: [],
    image: [],
  },
};

export const store = configureStore({
  reducer: reducer,
  preloadedState: initStore,
});
