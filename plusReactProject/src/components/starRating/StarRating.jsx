import React, { startTransition } from "react";

const StarRating = ({ noOfStars }) => {
  const stars = new Array(noOfStars).fill(0);
  console.log(stars);

  return (
    <div className="t-container">
      <h1 className="t-h1">Project 3 : Star Rating</h1>
      <h1>no of stars : {noOfStars}</h1>

      <div className="border-1">{
          stars.map((ele,index)=>{
            return <span key={index} className="text-4xl">☆</span>
          })
        }
        </div>
    </div>
  );
};

export default StarRating;
