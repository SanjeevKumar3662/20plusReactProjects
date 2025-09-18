import { useState } from "react";

const StarRating = ({ noOfStars }) => {
  const [starsToShow, setStarsToShow] = useState(noOfStars);
  const [rating, setRating] = useState(-1);
  const [hoverRating, setHoverRating] = useState(-1);
  const [isHover, setIsHover] = useState(false);

  const stars = new Array(starsToShow).fill(0);
  // console.log(starsToShow);

  const handleChange = (event) => {
    setStarsToShow(Number(event.target.value));
  };

  return (
    <div className="t-container">
      <h1 className="t-h1">Project 3 : Star Rating</h1>
      <div className="">
        Set no of stars :{" "}
        <input
          className="border-1 p-1"
          type="range"
          min={1}
          max={10}
          value={starsToShow}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div
        className="border-1 rounded-2xl flex flex-wrap sm"
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
              className="text-8xl text-amber-300 font-semi-bold max-sm:text-6xl"
            >
              ☆
            </span>
          ) : (
            <span
              onClick={() => setRating(index)}
              onMouseLeave={() => setHoverRating(-1)}
              onMouseEnter={() => setHoverRating(index)}
              key={index}
              className="text-8xl font-semi-bold max-sm:text-6xl"
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
