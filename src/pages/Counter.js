import { useSelector, useDispatch } from "react-redux";
import { selectBalanceAmount } from "../store/counter/selectors";
import { resetBalanceAction } from "../store/counter/actions";
import { useState } from "react";

const Counter = () => {
  const dispatch = useDispatch(); // create a dispatch
  const balanceAmount = useSelector(selectBalanceAmount); // pass the selector in

  const [debitAmount, setDebitAmount] = useState(0);

  // 1. to show the balance (get data from the store) DONE
  // 2. to add to it
  // 3. substract
  // 4. reset it

  const onAddBalance = () => {
    console.log("add balance to state");
    // to make a change in our store/state
    // we need an action
    const action = { type: "counter/ADD_BALANCE", payload: 10 };
    dispatch(action);
  };

  const onDebitClick = () => {
    // we want to debit X amount from our account/state.
    const debitAction = {
      type: "counter/DEBIT_AMOUNT",
      payload: parseInt(debitAmount),
    };
    // send it to the store
    dispatch(debitAction);
  };

  const onResetClick = () => {
    // action
    //
    dispatch(resetBalanceAction()); // { type: 'counter/RESET_AMOUNT' }
  };

  return (
    <div>
      <h1>Super secure bank</h1>
      <h3>Your current balance is: {balanceAmount}</h3>
      <div>
        <button onClick={onAddBalance}>Add $10</button>
      </div>
      <div style={{ marginTop: 20, border: "1px solid white" }}>
        <label>Debit:</label>
        <input
          type='number'
          onChange={(e) => setDebitAmount(e.target.value)}
          value={debitAmount}
        />
        <button onClick={onDebitClick}>Debit</button>
      </div>
      <div>
        <button onClick={onResetClick}>Reset balance to $0</button>
      </div>
    </div>
  );
};

export default Counter;
