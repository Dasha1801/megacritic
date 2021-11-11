export const setLang = (result) => {
  return {
    type: 'SET_LANG',
    payload: result,
  };
};

export const logIn = (result) => {
  return {
    type: 'LOG_IN',
    payload: result,
  };
};
