import React from "react";
import Styles from "./ReviewCard.module.css";
const truncate = (str) => {
  const limit = 200;
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
};

const Star = ({ filled }) => {
  return <span className={Styles.star}>{filled ? "\u2605" : "\u2606"}</span>;
};
const Rating = ({ value }) => {
  const roundedValue = Math.round(value * 2) / 2;
  // Create an array of five elements with true or false
  const stars = Array.from({ length: 5 }, (_, i) => i < roundedValue);
  //   console.log(stars);
  return (
    <div className={Styles.rating}>
      {stars.map((star, i) => (
        <Star key={i} filled={star} />
      ))}
    </div>
  );
};

const ReviewCard = (props) => {
  return (
    <div className={Styles.card}>
      <div className={Styles.imageContent}>
        <span className={Styles.overlay}></span>
        <div className={Styles.cardImage}>
          <img src={props.image} alt="Profile" className={Styles.cardImg} />
        </div>
      </div>
      <div className={Styles.cardContent}>
        <h2 className={Styles.name}>{props.name}</h2>
        <Rating value={props.rating} />
        <p className={Styles.description}>{truncate(props.review)}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
