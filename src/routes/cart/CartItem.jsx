import React from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import Styles from "./CartItem.module.css";
import { setCartLength } from "../../redux/cart/cartLengthSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const url = import.meta.env.VITE_API_URL;
  const JWT_TOKEN = localStorage.getItem("token");
  const dispatch = useDispatch();
  const updateQuantity = async (quantity) => {
    try {
      const apiUrl = `${url}/cart/update/${item.product._id}`;
      const { data: res } = await axios.put(
        apiUrl,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${JWT_TOKEN}`,
          },
        }
      );
      // console.log(response);
      toast.success(res.message);
      dispatch(setCartLength(res.data.length));
    } catch (error) {}
  };
  const removeItem = async () => {
    try {
      const apiUrl = `${url}/cart/remove/${item.product._id}`;
      const { data: response } = await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      toast.success(response.message);
      dispatch(setCartLength(response.data.length));
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className={Styles.cartItem}>
      <div className={Styles.itemInfo}>
        <img
          src={item.product.image}
          alt={item.caption}
          className={Styles.image}
        />
        <h4>{item.product.caption}</h4>
        <p>Price: ₹{item.product.price}</p>
      </div>
      <div className={Styles.buttons}>
        <div className={Styles.quantityControl}>
          <button
            onClick={() => updateQuantity(-1)} // Decrease quantity
            className={Styles.quantityControlButton}
          >
            -
          </button>
          <span>{item.quantity}</span> {/* Display the item's quantity */}
          <button
            onClick={() => updateQuantity(1)} // Increase quantity
            className={Styles.quantityControlButton}
          >
            +
          </button>
        </div>
        <button onClick={removeItem} className={Styles.removeItem}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
