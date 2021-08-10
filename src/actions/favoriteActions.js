export const ADD_FAVORITE = "ADD_FAVORITE";
export const REM_FAVORITE = "REM_FAVORITE";
export const TOGGLE_FAVORITE_LIST = "TOGGLE_FAVORITE_LIST";

export const addFavorite = (value) => {
  return { type: ADD_FAVORITE, payload: value };
};

export const remFavorite = (value) => {
  return { type: REM_FAVORITE, payload: value };
};

export const toggleFavorites = () => {
  return { type: TOGGLE_FAVORITE_LIST };
};
