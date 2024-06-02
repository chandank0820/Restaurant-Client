import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import pastaImage from "../../assets/images/pasta.jpg";
import Styles from "./Home.module.css"; // Import the CSS file for styling

const Home = () => {
  const scrollToMeals = () => {
    // Scroll to the "Meals" component
    const mealsComponent = document.getElementById("meals-component");
    mealsComponent.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.text_section}>
        <h1>All Delicious Cuisines</h1>
        <p>
          Pizza, Salad, Burger, Pasta, Sandwiches, Desserts, Roti Sabzi, Drinks
          and more
        </p>

        {/* <a className={Styles.btn} href="#meals-component"> */}
        <button onClick={scrollToMeals} className={Styles.btn}>
          Find out more
        </button>
        {/* </a> */}
      </div>
      <div className={Styles.image_section}>
        <img src={pastaImage} alt="Pasta on a plate" />
        <div className={Styles.social_icons}>
          <div className={Styles.icon}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>
          <div className={Styles.icon}>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>
          <div className={Styles.icon}>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
