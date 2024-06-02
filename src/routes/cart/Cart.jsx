import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import Styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCartLength } from "../../redux/cart/cartLengthSlice";
import { setOrderLength } from "../../redux/order/orderLengthSlice";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();
  const JWT_TOKEN = localStorage.getItem("token");
  const url = import.meta.env.VITE_API_URL;
  const fetchItems = async () => {
    const apiUrl = `${url}/cart`;
    const { data: response } = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });
    setCartItems(response.data);
  };

  const navigate = useNavigate();

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };
  const total = calculateTotal() + calculateTotal() * 0.05;

  const handleOrder = async () => {
    // Place order logic
    const apiUrl = `${url}/orders`;
    const { data: res } = await axios.post(
      apiUrl,
      { total },
      {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      }
    );
    dispatch(setOrderLength(res.data.products.length));
    dispatch(setCartLength(0));
    navigate(`/orders`);
  };

  useEffect(() => {
    fetchItems();
  });
  if (cartItems.length == 0) {
    return (
      <div className={Styles.cartContainer}>
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className={Styles.container}>
      <h2 className={Styles.heading}>Your Cart</h2>
      <div className={Styles.cartContainer}>
        <div className={Styles.cartItems}>
          {cartItems.map((item) => (
            <CartItem key={item.product._id} item={item} />
          ))}
        </div>
        <div className={Styles.cartTotal}>
          <p>Bill Details</p>
          <hr />
          <p>Subtotal: ₹{calculateTotal()}</p>
          <p>GST and Restaurant Charges: ₹{calculateTotal() * 0.05}</p>
          <p>Total: ₹{total}</p>
          <button onClick={handleOrder}>Proceed to Order</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
