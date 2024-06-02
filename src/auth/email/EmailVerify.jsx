import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Success from "../../assets/images/success.png";
import styles from "./EmailVerify.module.css";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(true);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = import.meta.env.VITE_API_URL;
        const apiUrl = `${url}/users/${param.id}/verify/${param.token}`;
        const { data: res } = await axios.get(apiUrl);
        console.log(res);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <>
      {validUrl ? (
        <div className={styles.container}>
          <img
            src={Success}
            alt="success image"
            className={styles.success_img}
          />
          <h1 className={styles.heading}>Email verified successfully</h1>
          <Link to="/login">
            <button className={styles.green_btn}>Login</button>
          </Link>
        </div>
      ) : (
        <h1 className={styles.error}>404 Not Found</h1>
      )}
    </>
  );
};

export default EmailVerify;
