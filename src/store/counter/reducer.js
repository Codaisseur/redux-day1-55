// src/store/balance/reducer.js
const initialState = {
  amount: 10,
  debt: 0,
  happy: true,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // add cases here so the reducer actually does something
    default: {
      return state;
    }
  }
}
