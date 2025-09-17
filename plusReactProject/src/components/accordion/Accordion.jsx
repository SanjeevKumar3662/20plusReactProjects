import "./accordion.css";
import data from "./data";
import { useState } from "react";

export default function Accordion() {
  const [toggleStatus, setToggleStatus] = useState("single"); //single or multi
  const [isSingleSelected, setSingleSeleted] = useState(null);
  const [isMultiSelect, setMultiSelect] = useState(new Array(0).fill(0));

  function handleClick(id) {
    if (toggleStatus === "single") {
      setSingleSeleted(id === isSingleSelected ? null : id);
    } else if (toggleStatus === "multi") {
      const index = isMultiSelect.indexOf(id);

      setMultiSelect(
        index === -1
          ? [...isMultiSelect, id]
          : isMultiSelect.filter((ele) => ele !== id)
      );
    }
  }

  return (
    <div className="t-container flex flex-col justify-center items-center gap-3">
      <h1 className="t-h1">Project 1 : Accordion</h1>
      <button
        onClick={() =>
          setToggleStatus(() =>
            toggleStatus === "single" ? "multi" : "single"
          )
        }
        className="border-solid border p-1 rounded bg-gray-400"
      >
        Enable : {toggleStatus === "single" ? "Multi" : "Single"} Select Mode
      </button>

      {data &&
        data.map((ele) => {
          {
            return (
              <div
                onClick={() => handleClick(ele.id)}
                key={ele.id}
                className="item gap-5 w-full"
              >
                <span className="text-xl">{ele.question}</span>

                {(() => {
                  switch (toggleStatus) {
                    case "single":
                      return (
                        isSingleSelected === ele.id && (
                          <p className="bg-blue-200 p-3 rounded-md">
                            {ele.answer}
                          </p>
                        )
                      );

                    case "multi":
                      return (
                        isMultiSelect.indexOf(ele.id) !== -1 && (
                          <p className="bg-blue-200 p-3 rounded-md">
                            {ele.answer}
                          </p>
                        )
                      );
                  }
                })()}
              </div>
            );
          }
        })}
    </div>
  );
}
