export const getFilteredArray = (data,category) => {
  return data.filter((x) => x.category === category);
};
