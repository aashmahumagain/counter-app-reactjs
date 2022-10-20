import React from "react";
import ReactDOM, { useState } from "react";
import "../src/style.css";
const App = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1 className="text-display">{number}</h1>
      <div className="btn-section">
        <button onClick={() => setNumber(number + 1)} className="button">
          Add
        </button>
        <button
          onClick={() => {
            setNumber(number - 1);
          }}
          className="button"
        >
          less
        </button>
        <button
          onClick={() => {
            setNumber(0);
          }}
          className="button"
        >
          reset
        </button>
      </div>
    </div>
  );
};
export default App;
