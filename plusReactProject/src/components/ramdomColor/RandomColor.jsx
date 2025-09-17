import React, { useState } from "react";

const RandomColor = () => {
  const [curType, setCurType] = useState("Hex");
  const [color, setColor] = useState("white");

  const handleGenClick = () => {
    if (curType === "Hex") {
      const hexCode = "0123456789ABCDEF".split("");

      let code = "";
      for (let i = 0; i < 6; i++) {
        code += hexCode[Math.floor(Math.random() * 15)];
        console.log(code);
      }
      setColor(`#${code}`);
    } else {
      setColor("green");
    }
  };

  return (
    <div
      className="t-container flex flex-col justify-center items-center gap-3"
      style={{ backgroundColor: `${color}` }}
    >
      <h1 className="t-h1">Project 2 : Random Color Generator</h1>
      <div className="">
        Select Color Type
        <button onClick={() => setCurType("Hex")} className="btn">
          Hex Color
        </button>
        <button onClick={() => setCurType("rgb")} className="btn">
          RGB Color
        </button>
      </div>
      <div>
        Currently {curType} is Selected :{" "}
        <button onClick={handleGenClick} className="btn">
          Generate
        </button>
      </div>
    </div>
  );
};

export default RandomColor;
