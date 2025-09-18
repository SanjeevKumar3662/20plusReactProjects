import React, { useState } from "react";

const StarRating = ({ noOfStars }) => {
  const [rating, setRating] = useState(-1);
  const [hoverRating, setHoverRating] = useState(-1);
  const [isHover, setIsHover] = useState(false);

  const stars = new Array(noOfStars).fill(0);
  // console.log(stars);

  return (
    <div className="t-container">
      <h1 className="t-h1">Project 3 : Star Rating</h1>
      <h1>no of stars : {noOfStars}</h1>

      <div
        className="border-1 rounded-2xl "
        onMouseLeave={() => {
          setHoverRating(-1);
          setIsHover(false);
        }}
      >
        {stars.map((ele, index) => {
          return hoverRating >= index || (index <= rating && !isHover) ? (
            <span
              onClick={() => setRating(index)}
              onMouseEnter={() => {
                setHoverRating(index);
                setIsHover(true);
              }}
              key={index}
              className="text-8xl text-amber-300 font-semi-bold p-0"
            >
              ☆
            </span>
          ) : (
            <span
              onClick={() => setRating(index)}
              onMouseLeave={() => setHoverRating(-1)}
              onMouseEnter={() => setHoverRating(index)}
              key={index}
              className="text-8xl font-semi-bold"
            >
              ☆
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
