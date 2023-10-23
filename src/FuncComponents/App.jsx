import React from "react";
import Clicker from "./less_6.2/Clicker";
import Timer from "./less_6.5/Timer";
import { Context } from "./less_7.3/Context";
import Books from "./less_7.3/Books";


export default function App() {

  return (
    <div className="App">
      <Clicker />
      <Timer />
      <Context>
        <Books/>
      </Context>
    </div>
  );
};

