export const filter = (value, posts) =>
  !value ? posts : [...posts].filter((el) => el.category === value);

export const sort = (value, posts) => {
  if (!value) {
    return posts;
  }
  return value === 'inc'
    ? [...posts].sort((x, y) => x.rating - y.rating)
    : [...posts].sort((x, y) => y.rating - x.rating);
};
