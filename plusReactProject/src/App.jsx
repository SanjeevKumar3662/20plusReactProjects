// import { useState } from 'react'
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/ramdomColor/RandomColor";
import StarRating from "./components/starRating/StarRating";
import ImageSlider from "./components/imageSlider/ImageSlider";


function App() {
  return (
    <>
      <Accordion></Accordion>
      <RandomColor></RandomColor>
      <StarRating noOfStars={7}></StarRating>
      <ImageSlider limit={5}></ImageSlider>
      {/* <LoadMoreData></LoadMoreData> */}
    </>
  );
}

export default App;
