import React from "react";
import Styles from "./Common1.module.css";

function TermsOfUse() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Terms of Use</h1>
      <div className={Styles.content}>
        <p className={Styles.intro}>
          Welcome to our restaurant management system project, built with MERN
          stack. This project is created by Rayan Ahmad, Gaurav Raj, and Chandan
          Kumar, who are students of University of Kalyani, doing B.Tech in
          Information Technology. By using our project, you agree to abide by
          the following terms and conditions. Please read them carefully before
          you proceed.
        </p>
        <h2 className={Styles.heading}>1. License</h2>
        <p className={Styles.text}>
          We grant you a limited, non-exclusive, non-transferable, and revocable
          license to use our project for your personal, educational, or
          non-commercial purposes only. You may not modify, copy, distribute,
          sell, or rent any part of our project or its source code, unless you
          have our written permission. You may not use our project for any
          illegal or unauthorized purpose. You agree to comply with all
          applicable laws and regulations when using our project.
        </p>
        <h2 className={Styles.heading}>2. Use of our Website</h2>
        <p className={Styles.text}>
          By using our website, you agree to abide by all applicable laws and
          not engage in any illegal or unauthorized activities. You confirm that
          you are of legal age to enter into a binding contract. Additionally,
          you agree not to interfere with the website's network or security
          features, and you commit to providing accurate personal information in
          accordance with our Privacy Policy.
        </p>
        <h2 className={Styles.heading}>3. Privacy</h2>
        <p className={Styles.text}>
          We respect your privacy and do not collect any personal information
          from you when you use our project. We do not share your data with any
          third parties, unless required by law. We may use cookies and other
          technologies to enhance your user experience and improve our project.
          You can disable cookies in your browser settings, but this may affect
          some features of our project.
        </p>
        <h2 className={Styles.heading}>4. Changes</h2>
        <p className={Styles.text}>
          We reserve the right to modify or terminate our project or these terms
          of use at any time, without prior notice. You are responsible for
          reviewing these terms of use periodically and continuing to use our
          project after any changes. Your continued use of our project
          constitutes your acceptance of the modified terms of use.
        </p>
        <h2 className={Styles.heading}>5. Contact</h2>
        <p className={Styles.text}>
          If you have any questions or feedback about our project or these terms
          of use, please feel free to contact us at
          restaurant.project@gmail.com. We appreciate your support and
          cooperation.
        </p>
      </div>
    </div>
  );
}

export default TermsOfUse;
