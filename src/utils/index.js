export const filter = (value, state, setState) => {
  if (value === '') {
    setState(state);
  } else {
    const filterPosts = [...state].filter((el) => el.category === value);
    setState(filterPosts);
  }
};

export const sort = (value, state, setState) => {
  if (!value) {
    setState(state);
  } else if (value === 'inc') {
    const sortPosts = [...state].sort((x, y) => x.rating - y.rating);
    setState(sortPosts);
  } else {
    const sortPosts = [...state].sort((x, y) => y.rating - x.rating);
    setState(sortPosts);
  }
};


