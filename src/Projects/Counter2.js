import React, { useState } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  function incNum() {
    setCount(count + 1);
    if (count % 2 === 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  function decNum() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }

    if (count % 2 === 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  return (
    <div className="App">
      <h1
        style={{
          color: color === false ? "green" : "red"
        }}
      >
        Counter: {count}
      </h1>

      <button onClick={incNum}>Increment</button>
      <br /> <br />
      <button onClick={decNum}>Decrement</button>
    </div>
  );
}

export default Counter2;
