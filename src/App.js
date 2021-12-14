import "./App.css";
import Counter from "./pages/Counter";
import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode } from "./store/counter/selectors";

function App() {
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const pageStyles = darkMode
    ? { backgroundColor: "blue", color: "white" }
    : { backgroundColor: "white", color: "black" };

  const switchDarkMode = () => {
    // flip the value of darkMode in balance reducer
    const action = { type: "counter/FLIP_MODE" };
    dispatch(action);
  };

  return (
    <div className='App' style={pageStyles}>
      <button onClick={switchDarkMode}>
        {darkMode ? "Light mode" : "Dark Mode"}
      </button>
      <Counter />
    </div>
  );
}

export default App;
