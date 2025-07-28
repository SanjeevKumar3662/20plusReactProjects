import { useState } from "react";
import "./starRating.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(-1);
  const [hover, setHover] = useState(-1);

  function handleClickStar(id) {
    setRating(id);
  }

  function handleMouseEnter(ele) {
    setHover(ele);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  const stars = [...Array(noOfStars)].map((_, i) => i + 1);
  console.log(stars);
  return (<div className="container">
  <h1>Project 3 : Star Rating  </h1>
    <div className="starContainer">

      {stars.map((ele, i) => {
        return hover > 0 ? (
          <button
            key={i}
            onClick={() => handleClickStar(ele)}
            onMouseEnter={() => handleMouseEnter(ele)}
            onMouseLeave={() => handleMouseLeave()}
            style={{ color: ele <= hover ? "gold" : "black" }}
          >
            ☆
          </button>
        ) : (
          <button
          key={i}
          onClick={() => handleClickStar(ele)}
          onMouseEnter={() => handleMouseEnter(ele)}
            onMouseLeave={() => handleMouseLeave()}
            style={{ color: ele <= rating ? "gold" : "black" }}
          >
            ☆
          </button>
        );
      })}
    </div>
        </div>
  );
}
