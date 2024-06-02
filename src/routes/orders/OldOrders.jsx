import React, { useEffect, useState } from "react";
import OldOrderItem from "./OldOrderItem";
import Styles from "./Orders.module.css";
import axios from "axios";

const OldOrders = () => {
  const [orders, setOrders] = useState([]);
  const JWT_TOKEN = localStorage.getItem("token");
  const url = import.meta.env.VITE_API_URL;

  const fetchOrders = async () => {
    const apiUrl = `${url}/old-orders/all-orders`;
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });
    setOrders(res.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (!orders.length) {
    return (
      <div className={Styles.emptyContainer}>
        <h1>Orders</h1>
        <p>No orders found.</p>
        <p>Please Order something.</p>
        <p>We will update you when we have something.</p>
      </div>
    );
  }

  return (
    <div className={Styles.ordersContainer}>
      <h1>Orders</h1>
      <table className={Styles.orderTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OldOrderItem key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OldOrders;
