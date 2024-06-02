// Offers.js
import React from "react";
import styles from "./Offers.module.css";
import OfferData from "./OfferData";

const Offers = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Special Offers</h1>
      <div className={styles.grid}>
        {OfferData.map((offer) => (
          <div key={offer.id} className={styles.card}>
            <img src={offer.image} alt={offer.title} className={styles.image} />
            <div className={styles.content}>
              <h2 className={styles.cardTitle}>{offer.title}</h2>
              <p className={styles.description}>{offer.description}</p>
                <button className={styles.button}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
