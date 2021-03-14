import "./App.css";
import React from "react";
import { Control } from "./components/Control.component";

function App() {
  return (
    <>
      <h1 className="title">Game of Life</h1>
      <Control />
    </>
  );
}

export default App;
