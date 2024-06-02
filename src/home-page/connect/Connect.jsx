import React from "react";
import Styles from "./Connect.module.css"; // Import your CSS module
import Footer from "./Footer";

const Connect = () => {
  return (
    <div className={Styles.connectContainer}>
      <div className={Styles.connectSection}>
        <p className={Styles.connectHeading}>Connect with Us</p>
        <div className={Styles.subscribeForm}>
          <input
            type="text"
            placeholder="Type your email and get new offers"
            className={Styles.emailInput}
          />
          <button className={Styles.subscribeButton}>Subscribe</button>
        </div>
      </div>
      <div className={Styles.footer}>
        <Footer/>
      </div>
    </div>
  );
};

export default Connect;
