/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Clicker from "./less_6.2/Clicker";
import Timer from "./less_6.5/Timer";
import { Context } from "./less_7.3/Context";
import Books from "./less_7.3/Books";
import RenderAfter from "./less_7.4/renderAfter";
import MemoizationComp from "./less_7.5/memoization";
import Lesson7_6 from "./less_7.6/Lesson7_6";


export default function App() {

  return (
    <div className="App">
      <Clicker />
      <Timer />
      <Context>
        <Books/>
      </Context>
      <RenderAfter/>
      <MemoizationComp/>
      <Lesson7_6/>
    </div>
  );
};

