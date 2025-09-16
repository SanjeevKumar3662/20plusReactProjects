import "./accordion.css";
import data from "./data";
import { useState } from "react";

export default function Accordion() {
  

  return (
    <div className="t-container flex flex-col justify-center items-center">
      <h1 className="text-3xl">Project 1 : Accordion</h1>
      <button className="border-solid border-1 p-1 rounded-md">Toggle Button</button>
    
    {data&& data.map(ele=>{
      <span>{ele.id}</span>
    })}
    </div>
  );
}
