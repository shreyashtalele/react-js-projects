import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decerementCounter,
} from "../features/counter/CounterSlice";

function Counter() {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter_value);

  function handleIncrement() {
    dispatch(incrementCounter());
  }

  function handleDecrement() {
    dispatch(decerementCounter());
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-80 text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">{counter}</h1>

        <div className="flex justify-center gap-4">
          <button
            onClick={handleIncrement}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2 rounded transition"
          >
            Increment
          </button>

          <button
            onClick={handleDecrement}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
