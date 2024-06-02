import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Styles from "./Footer.module.css"; // Import your CSS module
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const serviceId = import.meta.env.VITE_Service_ID;
const templateId = import.meta.env.VITE_Template_ID;
const userId = import.meta.env.VITE_User_ID;

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send email using emailjs
    emailjs.sendForm(serviceId, templateId, event.target, userId).then(
      (response) => {
        console.log("Email sent successfully:", response);
        toast.success("Email sent successfully"); // Add toast notification
      },
      (error) => {
        console.error("Email sending failed:", error);
        toast.error("Email sending failed"); // Add toast notification for failure
      }
    );
  };
  
  return (
    <footer className={Styles.footer}>
      <div className={Styles.footerLinks}>
        <ul>
          <li>
            <Link to={"/aboutus"}>About us</Link>
          </li>
          <li>
            <Link to={"/termsofuse"}>Terms of Use</Link>
          </li>
          <li>
            <Link to={"/ourservices"}>Our services</Link>
          </li>
          <li>
            <Link to={"/privacypolicy"}>Privacy policy</Link>
          </li>
        </ul>
      </div>
      <div className={Styles.footerLinks}>
        <ul>
          <li>
            <Link to={"/security"}>Security</Link>
          </li>
          <li>
            <Link to={"/paymentoptions"}>Payment options</Link>
          </li>
          <li>
            <Link to={"/advertise"}>Advertise With Us</Link>
          </li>
          <li>
            <Link to={"adsinfo"}>Ads Info</Link>
          </li>
        </ul>
      </div>
      <div className={Styles.footerLinks}>
        <div className={Styles.SocialLinks}>
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
      <section className={Styles.contactSection}>
        <h2>Contact Us</h2>
        <form className={Styles.contactForm} onSubmit={handleSubmit}>
          <div className={Styles.formGroup}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={Styles.formGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={Styles.formGroup}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setsubject(e.target.value)}
              required
            />
          </div>
          <div className={Styles.formGroup}>
            <textarea
              name="message"
              rows="4"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={Styles.submitButton}>
            Send
          </button>
        </form>
      </section>

      <p className={Styles.copyRight}>
        © 2023 All rights reserved | Restaurant Management System
      </p>
    </footer>
  );
};

export default Footer;
