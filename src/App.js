import { useState } from "react";
import "./index.css";

export default function App() {
  const [val, setVal] = useState("");
  const [fvar, setFvar] = useState("");
  const [svar, setSvar] = useState("");
  const [sym, setSym] = useState("");

  function handleSymbol(e) {
    setFvar(val);
    setSym(e.target.innerText);
    setVal("");
  }

  function handleTask() {
    const currentValue = val;
    setSvar(currentValue);
    setVal("");
    return calculate(fvar, currentValue, sym);
  }

  // svar && console.log(svar);

  function addition(a, b) {
    return a + b;
  }
  function subtraction(a, b) {
    return a - b;
  }
  function multiplication(a, b) {
    return a * b;
  }
  function division(a, b) {
    return a / b;
  }

  function calculate(a, b, sym) {
    if (sym === "+") {
      return addition(a, b);
    }
    if (sym === "-") {
      return subtraction(a, b);
    }
    if (sym === "*") {
      return multiplication(a, b);
    }
    if (sym === "/") {
      return division(a, b);
    }
  }

  return (
    <div className="App">
      <h1>Simple Calculator</h1>
      <div className="calculator">
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(Number(e.target.value))}
        />
        <div className="buttons">
          <>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              7
            </button>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              8
            </button>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              9
            </button>
            <button onClick={handleSymbol}>/</button>
          </>
          <>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              4
            </button>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              5
            </button>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              6
            </button>
            <button onClick={handleSymbol}>*</button>
          </>
          <>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              3
            </button>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              2
            </button>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              1
            </button>
            <button onClick={handleSymbol}>-</button>
          </>
          <>
            <button
              onClick={(e) =>
                setVal((prev) => Number(prev + e.target.innerText))
              }
            >
              0
            </button>
            <button onClick={() => setVal("")}>C</button>
            <button onClick={() => setVal(handleTask())}>=</button>
            <button onClick={handleSymbol}>+</button>
          </>
        </div>
      </div>
    </div>
  );
}
