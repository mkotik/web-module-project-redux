import {
  ADD_FAVORITE,
  REM_FAVORITE,
  TOGGLE_FAVORITE_LIST,
} from "../actions/favoriteActions";

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case REM_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((cur) => cur !== action.payload),
      };
    case TOGGLE_FAVORITE_LIST:
      return {
        ...state,
        displayFavorites: state.displayFavorites ? false : true,
      };
    default:
      return state;
  }
};

export default reducer;
