import React from "react";
import styles from "./Common1.module.css";

function Security() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Security</h1>
      <div className={styles.content}>
        <p className={styles.intro}>
          We take security very seriously and we do our best to protect your
          data and privacy when you use our restaurant management system
          project, built with MERN stack. This project is created by Rayan
          Ahmad, Gaurav Raj, and Chandan Kumar, who are students of University
          of Kalyani, doing B.Tech in Information Technology. This security page
          explains how we secure our project and what you can do to enhance your
          security. Please read this page carefully before you proceed.
        </p>
        <h2 className={styles.heading}>How we secure our project</h2>
        <p className={styles.text}>
          We secure our project using the following methods and technologies:
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Encryption: We use encryption to protect your data in transit and at
            rest. We use HTTPS protocol to encrypt the communication between
            your browser and our server. We also use AES-256 algorithm to
            encrypt your data in our database and storage.
          </li>
          <li className={styles.item}>
            Authentication: We use authentication to verify your identity and
            prevent unauthorized access to your account. We use JWT (JSON Web
            Token) to generate and validate your access token. We also use
            bcrypt to hash and salt your password before storing it in our
            database.
          </li>
          <li className={styles.item}>
            Authorization: We use authorization to control your access to
            different resources and functionalities on our project. We use RBAC
            (Role-Based Access Control) to assign different roles and
            permissions to different users, such as restaurant owners, managers,
            staff, customers, and delivery partners.
          </li>
          <li className={styles.item}>
            Firewall: We use firewall to filter and block malicious traffic and
            requests to our server. We use AWS WAF (Web Application Firewall) to
            configure and manage our firewall rules and policies.
          </li>
          <li className={styles.item}>
            Monitoring: We use monitoring to detect and respond to any anomalies
            or incidents on our project. We use AWS CloudWatch to collect and
            analyze various metrics and logs from our server and application. We
            also use AWS SNS (Simple Notification Service) to send alerts and
            notifications to our team and users.
          </li>
        </ul>
        <h2 className={styles.heading}>
          What you can do to enhance your security
        </h2>
        <p className={styles.text}>
          You can also take some steps to enhance your security when you use our
          project, such as:
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            Use a strong and unique password for your account. Do not use the
            same password for other accounts or websites. Do not share your
            password with anyone or write it down anywhere.
          </li>
          <li className={styles.item}>
            Change your password regularly and update your account details if
            they change. Do not use your old password or any personal
            information as your new password.
          </li>
          <li className={styles.item}>
            Log out of your account when you are done using our project. Do not
            leave your account logged in on a public or shared device or
            network. Do not allow your browser to remember your password or
            autofill your login details.
          </li>
          <li className={styles.item}>
            Beware of phishing and spoofing attacks. Do not click on any
            suspicious links or attachments in emails or messages that claim to
            be from us or our project. Do not provide your password or any
            sensitive information to anyone who asks for it over email or phone.
            Always check the URL and the sender's address before entering your
            login details or any other information on a website or form.
          </li>
          <li className={styles.item}>
            Use a reputable antivirus and firewall software on your device and
            keep them updated. Scan your device regularly for any viruses or
            malware and remove them as soon as possible. Do not download or
            install any software or application from unknown or untrusted
            sources.
          </li>
        </ul>
        <h2 className={styles.heading}>How to contact us?</h2>
        <p className={styles.text}>
          If you have any questions or feedback about our project or this
          security page, please feel free to contact us at
          restaurant.project@gmail.com. We appreciate your support and
          cooperation.
        </p>
      </div>
    </div>
  );
}

export default Security;
