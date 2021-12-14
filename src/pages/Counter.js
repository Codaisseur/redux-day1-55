import { useSelector } from "react-redux";
import { selectBalanceAmount } from "../store/counter/selectors";

const Counter = () => {
  const balanceAmount = useSelector(selectBalanceAmount); // pass the selector in
  // 1. to show the balance (get data from the store) DONE
  // 2. to add to it
  // 3. substract
  // 4. reset it
  console.log("getting state?", balanceAmount);
  return (
    <div>
      <h1>Super secure bank</h1>
      <h3>Your current balance is: {balanceAmount}</h3>
    </div>
  );
};

export default Counter;
