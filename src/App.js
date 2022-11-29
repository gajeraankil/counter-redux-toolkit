import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementAsync } from "./redux/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(incrementAsync(2))}>+</button>
    </>
  );
};

export default App;
