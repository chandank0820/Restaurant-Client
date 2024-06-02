import React from "react";
import Styles from "./AboutUsLink.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>About Us</h1>
      <div className={Styles.card}>
        <img
          src="https://res.cloudinary.com/dex9pejve/image/upload/v1701339724/images/1678895021669_1_-PhotoRoom_qus6yx.jpg"
          alt="Rayan Ahmad"
          className={Styles.photo}
        />
        <div className={Styles.info}>
          <h2 className={Styles.name}>Rayan Ahmad</h2>
          <p className={Styles.bio}>
            Rayan is a student at the University of Kalyani, pursuing B.Tech in
            Information Technology. His passion lies in web development, where
            he enjoys crafting visually appealing and functional websites.
            Explore his projects on &nbsp;
            <span>
              <Link
                to="https://github.com/rayan25nov"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </span>
            <br />
            &nbsp; Check out live demos of his projects on &nbsp;
            <span>
              <Link
                to="https://vercel.com/rayan25nov"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div className={Styles.card}>
        <img
          src="https://res.cloudinary.com/dex9pejve/image/upload/v1701337247/images/gaurav_xnioko.jpg"
          alt="Gaurav Raj"
          className={Styles.photo}
        />
        <div className={Styles.info}>
          <h2 className={Styles.name}>Gaurav Raj</h2>
          <p className={Styles.bio}>
            Gaurav is also a student of University of Kalyani, majoring in
            Information Technology. He is skilled in backend development and
            database management. He enjoys solving complex problems and
            optimizing algorithms. He is also curious about blockchain and
            cybersecurity.
          </p>
        </div>
      </div>
      <div className={Styles.card}>
        <img
          src="https://res.cloudinary.com/dex9pejve/image/upload/v1701338806/images/chandan_sgyy74.jpg"
          alt="Chandan Kumar"
          className={Styles.photo}
        />
        <div className={Styles.info}>
          <h2 className={Styles.name}>Chandan Kumar</h2>
          <p className={Styles.bio}>
            Chandan is also a student of University of Kalyani, studying
            Information Technology. He is mastering Data Structure and
            Algorithms. He is also passionate about web development and loves to
            create beautiful and functional websites.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
