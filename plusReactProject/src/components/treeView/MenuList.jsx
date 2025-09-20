import { useState } from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ label, children, level }) => {
  const [toOpen, setToOpen] = useState(false);

  const handleClickMenu = (e) => {
    e.stopPropagation();
    setToOpen(!toOpen);
  };
  // console.log(toOpen);
  return (
    <div className=" p-3 flex flex-col gap-1" key={label}>
      <span>
        <button
          className="border p-2 bg-red-400"
          onClick={(e) => handleClickMenu(e)}
        >
          Level:{level}
          {label} {children && "+"}
        </button>
      </span>
      <div className={`${toOpen ? "inline" : "hidden"}`}>
        {children &&
          children.map((ele) => (
            <MenuItem key={ele.label} {...ele} level={level + 1} />
          ))}
      </div>
    </div>
  );
};

export default MenuList;
