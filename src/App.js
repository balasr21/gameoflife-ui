import "./App.css";
import React from "react";
import { Control } from "./components/Control.component";

function App() {
  return (
    <>
      <h1 className="title">Game of Life - Glider Pattern</h1>
      <Control />
      <h5>Modify the matrix dimension and click on START</h5>
    </>
  );
}

export default App;
