// import { useState } from 'react'
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/ramdomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";


function App() {
  return (
    <>
      <Accordion></Accordion>
      <RandomColor></RandomColor>
      <StarRating noOfStars={7}></StarRating>
      {/* <Slider limit={5}></Slider> */}
      {/* <LoadMoreData></LoadMoreData> */}
    </>
  );
}

export default App;
