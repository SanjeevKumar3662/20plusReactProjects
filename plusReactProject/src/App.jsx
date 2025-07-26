// import { useState } from 'react'
import Accordion from './components/accordion/Accordion'
import RandomColor from './components/randomColorGen/RandomColor'
import StarRating from './components/starRating/StarRating'
import Slider from './components/slider/Slider'


function App() {

  return (
    <>
      {/* <Accordion></Accordion> */}
      {/* <RandomColor></RandomColor> */}
      {/* <StarRating noOfStars={7}></StarRating> */}
      <Slider limit={5}></Slider>
    </>
  )
}

export default App
