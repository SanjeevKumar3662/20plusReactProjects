import menu from "./data";
import MenuList from "./MenuList";
const TreeView = () => {
  // console.log(menu);
  return (
    <div className="t-container p-0">
      <h1>Project 6 : Tree View</h1>
      <div className=" item border flex flex-col items-start ">
        {menu.map((ele) => {
          return <MenuList {...ele} level={0} key={ele.label} />;
        })}
      </div>
    </div>
  );
};

export default TreeView;
