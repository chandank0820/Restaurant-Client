import React, { useState } from "react";
import styles from "./Payment.module.css";

const Payment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !paymentMethod) {
      alert("Please fill in all the fields and select a payment method");
      return;
    }
    // Replace the alert with your actual payment logic when the backend is set up
    alert("Simulating payment process!");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "paymentMethod":
        setPaymentMethod(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.payment}>
      <div className={styles.card}>
        <div className={styles.header}>Payment Form</div>
        <div className={styles.body}>
          <form onSubmit={handleSubmit}>
            <div className={styles.group}>
              <label className={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={phone}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Payment Method</label>
              <select
                name="paymentMethod"
                value={paymentMethod}
                onChange={handleChange}
                className={styles.input}
                required
              >
                <option value="">Select a payment method</option>
                <option value="card">Credit/Debit Card</option>
                <option value="netbanking">Net Banking</option>
                <option value="upi">UPI</option>
              </select>
            </div>
            {paymentMethod === "card" && (
              <div className={styles.group}>
                <label className={styles.label}>Card Details</label>
                {/* Add your Card component here */}
                <div className={styles.cardDetails}>
                  Card Number, Expiration Date, CVV, Postal Code fields
                </div>
              </div>
            )}
            <button type="submit" className={styles.button}>
              Pay Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
