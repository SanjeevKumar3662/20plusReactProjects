import { useState } from "react";

const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  function onClickButton(status) {
    setDarkMode(() => status);
    localStorage.setItem("darkMode", status);
  }

  return (
    <div
      className={`t-container ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="t-h1">Project 8 : DarkMode</h1>
      <span>Status in Local Storage ? {localStorage.getItem("darkMode")}</span>
      <button onClick={() => onClickButton(!isDarkMode)} className="btn ">
        Change Theme
      </button>
    </div>
  );
};

export default DarkMode;
