import React from "react";
import Styles from "./PopularCard.module.css";

const PopularCard = (props) => {
  return (
    <div className={Styles.PopularCard}>
      <img src={props.img} alt={props.alt} />
      <h3>{props.name}</h3>
      <p>{props.number}</p>
    </div>
  );
};

export default PopularCard;
