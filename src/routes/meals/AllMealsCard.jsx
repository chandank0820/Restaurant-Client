import React from "react";
import Styles from "./AllMealsCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { AdvancedImage } from "@cloudinary/react";
const truncate = (str) => {
  const limit = 200;
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
};

const AllMealsCard = (props) => {
  // Sending mealId inside the params
  const mealId = props.id;
  return (
    // onClick={() => handleAddToCart(props.id)}
    <Link to={`/specific-meal/${mealId}`} className={Styles.card}>
      <div className={Styles.availContent}>
        <div className={Styles.availItems}>
          <p>Available</p>
        </div>
      </div>
      <figure>
        {/* <AdvancedImage
          cldImg={props.img}
          alt="Cuisine"
          className={Styles.cardImg}
        /> */}
        <img src={props.img} alt="Cuisine" className={Styles.cardImg} />
        <figcaption>{props.caption}</figcaption>
      </figure>
      <p className={Styles.description}>{truncate(props.description)}</p>
      <div className={Styles.divider}>
        <h3 className={Styles.price}>₹{props.price}</h3>
        <div className={Styles.rating}>
          <FontAwesomeIcon icon={faStar} />
          <p>{props.rating}</p>
        </div>
      </div>
    </Link>
  );
};

export default AllMealsCard;
