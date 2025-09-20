import React, { useState } from "react";
import MenuList from "./MenuList";

const MenuItem = ({ label, children, level }) => {
  const [toOpen, setToOpen] = useState(false);
  const handleClickMenu = (e) => {
    e.stopPropagation();
    setToOpen(!toOpen);
  };
  return (
    <div
      className="  flex flex-col gap-2 my-2 
      "
      style={{ marginLeft: `${level * 1}rem` }}
      onClick={(e) => handleClickMenu(e)}
    >
      <span className={` bg-blue-400 p-3 rounded-xl`}>
        Level : {level} --
        {label} {children && "+"}
      </span>
      <div className={`${toOpen ? "block" : "hidden"}`}>
        {children &&
          children.map((ele) => (
            <MenuItem key={ele.label} {...ele} level={level + 1} />
          ))}
      </div>
    </div>
  );
};

export default MenuItem;
