import { useState } from "react";
import "./starRating.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(-1);
  // const [hover, setHover] = useState(0);

  function handleClickStar(id) {
    setRating(id);
  }

  const stars = [...Array(noOfStars)].map((_, i) => i + 1);
  console.log(stars);
  return (
    <div className="container">
      {stars.map((ele, i) => {
        if (ele <= rating) {
          console.log(ele);
          return (
            <i
              key={i}
              onClick={() => handleClickStar(ele)}
              onMouseEnter={() => handleClickStar(ele)}
              onMouseLeave={() => handleClickStar(ele)}
              style={{ color: "red" }}
            >
              ❂
            </i>
          );
        } else {
          return (
            <i
              key={i}
              onClick={() => handleClickStar(ele)}
              onMouseEnter={() => handleClickStar(ele)}
              onMouseLeave={() => handleClickStar(ele)}
              style={{ color: "black" }}
            >
              ❂
            </i>
          );
        }
      })}
    </div>
  );
}
