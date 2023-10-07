import React from "react";
import style from "./rating.module.css";

const Rating = ({ star }: { star: number }) => {
  const filledStars = Math.floor(star);
  const emptyStars = 5 - filledStars;

  return (
    <div className={style.rating}>
      <div className={style.ratingText}>Rating:</div>
      <div className={style.starContainer}>
        {[...Array(filledStars)].map((_, index) => (
          <span key={index} className={style.star}>
            &#9733;
          </span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={index} className={style.starEmpty}>
            &#9733;
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
