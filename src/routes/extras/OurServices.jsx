import React from "react";
import styles from "./Common2.module.css";

function OurServices() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Service</h1>
      <div className={styles.content}>
        <p className={styles.intro}>
          We are a restaurant management system project, built with MERN stack.
          This project is created by Rayan Ahmad, Gaurav Raj, and Chandan Kumar,
          who are students of University of Kalyani, doing B.Tech in Information
          Technology. Our project aims to provide a comprehensive and
          easy-to-use solution for restaurant owners and managers, as well as
          customers who love dining out.
        </p>
        <p className={styles.intro}>
          Our project offers the following features and benefits for our users:
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701353273/images/inventory_management_xt7ozc.jpg"
              alt="Inventory management"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Inventory management</h2>
            <p className={styles.text}>
              Our project helps you to keep track of your inventory levels,
              costs, and expiry dates. You can also automate your ordering and
              replenishment processes, and avoid stock-outs or wastage.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701353273/images/order_management_gfp7tc.jpg"
              alt="Order management"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Order management</h2>
            <p className={styles.text}>
              Our project enables you to manage your orders from multiple
              channels, such as online, phone, or walk-in. You can also accept
              payments, print receipts, and send notifications to your kitchen
              staff and delivery partners.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701353273/images/menu_management_nllcwy.jpg"
              alt="Menu management"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Menu management</h2>
            <p className={styles.text}>
              Our project allows you to create and update your menu items,
              prices, and descriptions. You can also customize your menu
              according to different categories, cuisines, and dietary
              preferences. You can also display your menu on your website or
              app, and attract more customers.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701353273/images/reservation_management_yea5ha.jpg"
              alt="Reservation management"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Reservation management</h2>
            <p className={styles.text}>
              Our project helps you to manage your reservations from various
              sources, such as online, phone, or walk-in. You can also optimize
              your table layout, seating capacity, and waiting time. You can
              also send reminders and confirmations to your customers, and
              reduce no-shows and cancellations.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701353273/images/customer_management_l0tccg.jpg"
              alt="Customer management"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Customer management</h2>
            <p className={styles.text}>
              Our project helps you to build and maintain a loyal customer base.
              You can collect and store customer data, such as contact details,
              preferences, and feedback. You can also segment your customers and
              send them personalized offers, promotions, and newsletters.
            </p>
          </div>
          <div className={styles.card}>
            <img
              src="https://res.cloudinary.com/dex9pejve/image/upload/v1701353273/images/analytics_management_palf4k.jpg"
              alt="Analytics and reporting"
              className={styles.icon}
            />
            <h2 className={styles.heading}>Analytics and reporting</h2>
            <p className={styles.text}>
              Our project helps you to monitor and improve your restaurant
              performance. You can access and analyze various metrics, such as
              sales, revenue, expenses, profit, customer satisfaction, and more.
              You can also generate and export reports, and make data-driven
              decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
