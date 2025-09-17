// import React, { useState } from "react";

const RandomColor = () => {
  return (
    <div
      className="t-container flex flex-col justify-center items-center gap-3"
      style={{ backgroundColor: `${"blue"}` }}
    >
      <h1 className="t-h1">Project 2 : Random Color Generator</h1>
      <div className="">
        Select Color Type
        <button className="btn">Hex Color</button>
        <button className="btn">RGB Color</button>
      </div>
      <button className="btn">Generate</button>
    </div>
  );
};

export default RandomColor;
