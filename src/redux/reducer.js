import { initStore } from './store';

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case 'SET_LANG':
      return { ...state, isLangEn: action.payload };
    case 'LOG_IN':
      return { ...state, isLogin: action.payload };
    case 'ADD_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
