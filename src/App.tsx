import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
import { multiplyby10 } from "./multiplyBy10";

export default function App() {
  const count = useSelector((state: any) => state.counter.value);
  const multiply = useSelector((state: any) => state.multiply.val);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-8 items-center">
      <h1 className="text-indigo-700 text-3xl font-semibold">
        redux shopping cart
      </h1>

      <div>
        <div className="flex flex-col gap-y-6">
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>

          <button
            aria-label="mulitply by 10"
            onClick={() => dispatch(multiplyby10())}
          >
            multiply by 10
          </button>
          <span>{multiply}</span>
        </div>
      </div>
    </div>
  );
}
