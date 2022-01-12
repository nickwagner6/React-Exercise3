import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  function plusOne() {
    setCounter(counter + 1);
  }
  function minusOne() {
    setCounter(counter - 1);
  }
  return (
    <div className="buttons">
      <button className="up" onClick={() => plusOne()}>
        Up
      </button>
      <span>{counter}</span>
      <button className="down" onClick={() => minusOne()}>
        Down
      </button>
    </div>
  );
}

export default Counter;
