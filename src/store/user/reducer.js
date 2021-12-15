// src/store/user/reducer.js
const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/FAV": {
      // update the favs array.
      // payload === pizzaId
      const pizzaId = action.payload;

      // check if its already there

      const isFav = state.favorites.includes(pizzaId); // true or a false

      let newFavs;
      if (isFav) {
        // if its there => remove it
        newFavs = state.favorites.filter((id) => id !== pizzaId);
      } else {
        // not there => we add.
        newFavs = [...state.favorites, pizzaId];
      }

      return {
        ...state,
        favorites: newFavs,
      };
    }
    default: {
      return state;
    }
  }
}
