export const sortById = (a, b) => a.id - b.id;

export const sortByDate = (a, b) =>
  new Date(b.webformatURL) - new Date(a.webformatURL);
