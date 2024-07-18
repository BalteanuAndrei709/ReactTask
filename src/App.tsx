import React, { useState } from "react";
import NumberList from "./components/NumberList";
import TriangleArea from "./components/TriangleArea";
import "./App.css";

const App: React.FC = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const [width, setWidth] = useState<number | undefined>(undefined);

  return (
    <div className="App">
      <h1>React TypeScript Simple App</h1>
      <div>
        <label>
          Number:
          <input
            type="number"
            value={number === undefined ? "" : number}
            onChange={(e) => setNumber(Number(e.target.value))}
          />
        </label>
      </div>
      <NumberList number={number} />
      <div>
        <label>
          Height:
          <input
            type="number"
            value={height === undefined ? "" : height}
            onChange={(e) => setHeight(Number(e.target.value))}
          />
        </label>
        <label>
          Width:
          <input
            type="number"
            value={width === undefined ? "" : width}
            onChange={(e) => setWidth(Number(e.target.value))}
          />
        </label>
      </div>
      <TriangleArea height={height} width={width} />
    </div>
  );
};

export default App;
