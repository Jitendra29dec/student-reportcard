export const getItemFromStore = (key, defaultValue, store = localStorage) => {
  try {
    return store.getItem(key) === null
      ? defaultValue
      : JSON.parse(store.getItem(key));
  } catch {
    return store.getItem(key) || defaultValue;
  }
};

export const setItemToStore = (key, payload, store = localStorage) =>
  store.setItem(key, payload);
