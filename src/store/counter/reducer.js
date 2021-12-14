// src/store/balance/reducer.js
const initialState = {
  amount: 10,
  debt: 0,
  darkMode: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    // add cases here so the reducer actually does something
    case "counter/ADD_BALANCE": {
      // here goes the state updating logic.
      console.log("im in the reducer!", action);

      // whatever we return is going to be the new state
      // state right now:
      return {
        ...state, // copying the contents of the variable state
        // { amount, debt, happy }
        amount: state.amount + action.payload, // (payload = 10)
      };
    }
    case "counter/DEBIT_AMOUNT": {
      // substract X money from the amount
      // we need the value of X (how much)
      // payload => number (amount).
      return {
        ...state,
        amount: state.amount - action.payload,
      };
    }
    case "counter/RESET_AMOUNT": {
      // no need for payload here, I have everything I need
      return {
        ...state,
        amount: 0,
      };
    }
    case "counter/FLIP_MODE": {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    default: {
      return state;
    }
  }
}
