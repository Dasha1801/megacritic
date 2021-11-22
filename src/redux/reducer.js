import { initStore } from './store';

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, isLangEn: action.payload };
    case 'LOG_IN':
      return { ...state, isLogin: action.payload };
    case 'ADD_USER':
      return { ...state, user: action.payload };
    case 'GET_POSTS':
      return { ...state, posts: action.payload };
    case 'GET_REVIEW':
      return { ...state, review: action.payload };
    default:
      return state;
  }
};
