import "./accordion.css";
import data from "./data";
import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelect(id) {
    setSelected(id);
  }

  return (
    <>
      <h1>Component Accordion</h1>
      {data.length > 0
        ? data.map((ele) => {
            return (
              <div className="item">
                <div
                  onClick={() => handleSingleSelect(ele.id)}
                  className="title"
                >
                  {ele.question}
                </div>
                <div>+</div>
                {selected === ele.id ? (
                  <span>{ele.answer}</span>
                ) : (
                  <span></span>
                )}
              </div>
            );
          })
        : "no"}
    </>
  );
}
