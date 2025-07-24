import { useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUitility(len) {
    return Math.floor(Math.random() * len);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUitility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    let r = randomColorUitility(256);
    let g = randomColorUitility(256);
    let b = randomColorUitility(256);

    console.log(`rgb${r},${g},${b}`);
    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div
      className="container"
      style={{ width: "100vw", height: "100vh", background: color }}
    >
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <button onClick={() => setTypeOfColor("hex")}>Create Hex Color</button>
      <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
    </div>
  );
}
