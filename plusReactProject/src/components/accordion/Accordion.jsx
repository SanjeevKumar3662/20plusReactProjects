import "./accordion.css";
import data from "./data";
import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [isSingleMode, setMode] = useState(true);
  const [multiSelect, setMultiSelect] = useState([]);

  function handleSingleSelect(id) {
    console.log(id);
    if (isSingleMode) {
      id === selected ? setSelected(null) : setSelected(id);
    } else {
      multiSelect.includes(id)
        ? setMultiSelect(()=> multiSelect.filter((ele) => ele != id))
        : setMultiSelect(() => [...multiSelect, id]);
      // id === selected?setSelected(null):setSelected(id);
    }
  }

  return (
    <div className="container">
      <h1 className="text-3xl">Project 1 : Accordion</h1>
      <button
        onClick={() => setMode(() => !isSingleMode)}
        className=" border-solid border-black border-1 rounded-md p-1"
      >
        {isSingleMode?"Single Select Mode":"Multi Select Mode"}
      </button>

      {data && data.length > 0
        ? data.map((ele) => {
            return isSingleMode ? (
              <div key={ele.id} className="item">
                <div
                  onClick={() => handleSingleSelect(ele.id)}
                  className="title"
                >
                  {ele.question}
                </div>
                
                {selected === ele.id ? (
                  <div className="answer">{ele.answer}</div>
                ) : (
                  <span></span>
                )}
              </div>
            ) : (
              <div key={ele.id} className="item">
                <div
                  onClick={() => handleSingleSelect(ele.id)}
                  className="title"
                >
                  {ele.question}
                </div>
                
                {multiSelect.includes(ele.id) ? (
                  <div className="answer">{ele.answer}</div>
                ) : (
                  <span></span>
                )}
              </div>
            );
          })
        : "no"}
    </div>
  );
}
