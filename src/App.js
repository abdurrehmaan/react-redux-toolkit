import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  console.log("App -> count", count);

  return (
    <div className="App">
      <h1>Counter Value : {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
