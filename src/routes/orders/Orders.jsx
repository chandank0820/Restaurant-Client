import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import Styles from "./Orders.module.css"; // Assuming you have a CSS module for styling
import axios from "axios";
import { toast } from "react-toastify";
import { setOrderLength } from "../../redux/order/orderLengthSlice";
import socket from "../../socket.js";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();
  const JWT_TOKEN = localStorage.getItem("token");
  const url = import.meta.env.VITE_API_URL;

  const fetchOrders = async () => {
    const apiUrl = `${url}/orders`;
    const { data: res } = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });
    setOrders(res.data);
    let total = 0;
    res.data.map((order) => {
      total += order.totalMoney;
    });
    total = total * 100;
    setTotalAmount(total);
    res.data.products && dispatch(setOrderLength(res.data.products.length));
  };

  const deleteOrder = async (id) => {
    const apiUrl = `${url}/orders/${id}`;
    const { data: res } = await axios.delete(apiUrl, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });
    console.log(res);
    fetchOrders();
    dispatch(setOrderLength(orders.length - 1));
  };

  // Update Payment Status
  const changePaymentStatus = async (id, status) => {
    const apiUrl = `${url}/orders/payment/${id}`;
    const { data: res } = await axios.put(
      apiUrl,
      {
        status,
      },
      {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      }
    );
    // console.log(res);
    fetchOrders();
  };
  // funtion to pay the amount
  const checkoutHandler = async (event) => {
    try {
      const {
        data: { key },
      } = await axios.get(`${url}/payments/razorpay-key`, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      const { data: response } = await axios.post(
        `${url}/payments/capture-payment`,
        {
          amount: totalAmount,
          currency: "INR",
          orders,
        },
        {
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
          },
        }
      );

      // console.log(response);
      const paymentResponse = response.data;
      const user = response.user;

      const options = {
        key,
        amount: totalAmount,
        currency: "INR",
        name: "Restaurant management system",
        description: "Payment from the restaurant management system",
        image:
          "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
        order_id: paymentResponse.id,
        // callback_url: `${url}/payments/verify-payment`,
        handler: async function (response) {
          const data = { ...response };

          const { data: res } = await axios.post(
            `${url}/payments/verify-payment`,
            { data }
          );

          // console.log("Response", res);
          if (res.success) {
            toast.success("Payment successful!");
            const orderId = orders[0]._id;
            changePaymentStatus(orderId, "Paid");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#a520a7",
        },
      };
      const razor = new Razorpay(options);
      razor.open();
      event.preventDefault();
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage); // You can also use the error message in your application
      } else {
        console.error("An error occurred:", error.message);
      }
    }
  };

  // If the food is delivered add it to old order and remove it from order
  const moveOrderToOldOrder = async () => {
    try {
      const apiUrl = `${url}/old-orders`;
      const { data: res } = await axios.post(apiUrl, null, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      // console.log(res);
      fetchOrders();
      dispatch(setOrderLength(orders.length - 1));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (orders.length !== 0 && orders[0].status === "Delivered") {
        moveOrderToOldOrder();
      }
    }, 60 * 1000); // 1 minutes in milliseconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount or re-render
  }, [orders]); // Run the effect whenever orders change

  useEffect(() => {
    fetchOrders();
    // Listen for order updates
    socket.on("orderUpdated", (updatedOrder) => {
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === updatedOrder._id ? updatedOrder : order
        )
      );
    });

    socket.on("orderDeleted", (deletedOrderId) => {
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== deletedOrderId)
      );
    });
  }, []); // Run once on component mount

  if (!orders.length) {
    return (
      <div className={Styles.emptyContainer}>
        <div className={Styles.header}>
          <h1>Orders</h1>
          <Link className={Styles.btn} to="/orders/old-orders">
            Old Orders
          </Link>
        </div>
        <p>No orders found.</p>
        <p>Please Order something.</p>
        <p>We will update you when we have something.</p>
      </div>
    );
  }

  return (
    <div className={Styles.ordersContainer}>
      <div className={Styles.header}>
        <h1>Orders</h1>
        <Link className={Styles.btn} to="/orders/old-orders">
          Old Orders
        </Link>
      </div>
      <table className={Styles.orderTable}>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Image</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderItem
              key={order._id}
              order={order}
              deleteOrder={deleteOrder}
            />
          ))}
        </tbody>
      </table>
      <h2>Total Orders: {orders.length}</h2>
      <button className={Styles.btn} onClick={checkoutHandler}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default Orders;
