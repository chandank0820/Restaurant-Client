import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AuthForm.module.css";

const AuthForm = ({
  signin,
  signup,
  forgotPassword,
  signinHandler,
  signupHandler,
  forgotPasswordHandler,
  message,
  error,
}) => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.signin}>
          <div className={styles.content}>
            <h2>
              {signin && "Sign In"}
              {signup && "Sign Up"}
              {forgotPassword && "Forgot Password"}
            </h2>
            {forgotPassword && (
              <p>
                Enter your email address and we will send you a link to reset
                your password
              </p>
            )}
            <div className={styles.form}>
              {signup && (
                <div className={styles.inputBox}>
                  <input
                    type="text"
                    required
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <i>Name</i>
                </div>
              )}

              <div className={styles.inputBox}>
                <input
                  type="text"
                  required
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i>
                  {signin && "Username/Email"}
                  {signup && "Email"}
                  {forgotPassword && "Email"}
                </i>
              </div>

              {(signup || signin) && (
                <div className={styles.inputBox}>
                  <input
                    type="password"
                    required
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <i>Password</i>
                </div>
              )}

              <div className={styles.links}>
                {(signup || signin) && (
                  <Link to="/forgot-password">Forgot Password</Link>
                )}
                {signin && <Link to="/signup">Signup</Link>}
                {signup && <Link to="/login">Signin</Link>}
                {forgotPassword && <Link to="/login">Back to Login</Link>}
              </div>

              <div className={styles.inputBox}>
                <input
                  type="submit"
                  onClick={
                    signin
                      ? () => signinHandler(Email, Password)
                      : signup
                      ? () => signupHandler(Name, Email, Password)
                      : forgotPassword
                      ? () => forgotPasswordHandler(Email)
                      : null
                  }
                  value={
                    signin
                      ? "SignIn"
                      : signup
                      ? "SignUp"
                      : forgotPassword
                      ? "Send Email"
                      : ""
                  }
                />
              </div>
            </div>
            {message && <p className={styles.message}>{message}</p>}
            {error && <p className={styles.error}>{error}</p>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthForm;
