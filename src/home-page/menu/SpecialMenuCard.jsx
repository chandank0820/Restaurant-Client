import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Styles from "./SpecialMenuCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const truncate = (str) => {
  const limit = 200;
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }
  return str;
};

const SpecialMenuCard = (props) => {

  const mealId = props.id;
  return (
    <Link to={`/specific-meal/${mealId}`} className={Styles.card}>
      <div className={Styles.availContatent}>
        <div className={Styles.availItems}>
          <p>Available</p>
        </div>
      </div>
      <figure>
        <img src={props.image} alt="Cuisine" />
        <figcaption>{props.caption}</figcaption>
      </figure>
      <p className={Styles.description}>{truncate(props.description)}</p>
      <h3 className={Styles.price}>₹{props.price}</h3>
      <div className={Styles.rating}>
        <FontAwesomeIcon icon={faStar} />
        <p>{props.rating}</p>
      </div>
    </Link>
  );
};

export default SpecialMenuCard;
