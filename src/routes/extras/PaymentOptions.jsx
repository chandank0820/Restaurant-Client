import React from "react";
import styles from "./Common2.module.css";

function PaymentOptions() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Payment Options</h1>
      <div className={styles.content}>
        <p className={styles.intro}>
          We accept the following payment options for your convenience and
          security when you use our restaurant management system project, built
          with MERN stack. This project is created by Rayan Ahmad, Gaurav Raj,
          and Chandan Kumar, who are students of University of Kalyani, doing
          B.Tech in Information Technology. Please choose the payment option
          that suits you best and follow the instructions to complete your
          payment.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701356785/images/debit_card_ar3gsc.jpg"
              alt="Credit or debit card"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Credit or debit card</h2>
            <p className={styles.text}>
              You can pay with your credit or debit card, such as Visa,
              Mastercard, Rupay, or American Express. We use a secure and
              encrypted payment gateway to process your card details. You will
              need to enter your card number, expiry date, CVV, and OTP to
              complete your payment.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701356784/images/upi_hfmpd1.jpg"
              alt="UPI"
              className={styles.icon}
            />
            <h2 className={styles.heading}>UPI</h2>
            <p className={styles.text}>
              You can pay with UPI (Unified Payments Interface), which is a fast
              and easy way to transfer money online. You can use any UPI app,
              such as Google Pay, PhonePe, Paytm, or BHIM, to scan the QR code
              or enter the UPI ID that we provide. You will need to enter your
              UPI PIN to confirm your payment.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701356784/images/net_banking_ha3spr.jpg"
              alt="Net banking"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Net banking</h2>
            <p className={styles.text}>
              You can pay with net banking, which is a secure and convenient way
              to access your bank account online. You can choose your bank from
              the list of banks that we support, and login to your net banking
              portal with your username and password. You will need to enter the
              OTP or captcha to verify your payment.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701356784/images/wallet_t5jgm5.jpg"
              alt="Wallet"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Wallet</h2>
            <p className={styles.text}>
              You can pay with your wallet, which is a digital and cashless way
              to store and spend money. You can use any wallet app, such as
              Paytm, PhonePe, Amazon Pay, or MobiKwik, to scan the QR code or
              enter the mobile number that we provide. You will need to enter
              your wallet PIN or password to complete your payment.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701356783/images/cash_delivery_glq1eh.jpg"
              alt="Cash on delivery"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Cash on delivery</h2>
            <p className={styles.text}>
              You can pay with cash on delivery, which is a traditional and
              simple way to pay for your order. You can pay the exact amount of
              cash to the delivery person when you receive your order. Please
              note that we do not accept any other form of payment, such as
              cheque or card, on delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentOptions;
