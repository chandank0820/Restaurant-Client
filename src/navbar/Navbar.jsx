import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faUtensils,
  faShoppingCart,
  faPhone,
  faClipboardList,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./Navbar.module.css"; // Import your custom CSS file for styling
import axios from "axios";
import { setCartLength } from "../redux/cart/cartLengthSlice";
import { setOrderLength } from "../redux/order/orderLengthSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartLength = useSelector((state) => state.cartLength.value);
  const orderLength = useSelector((state) => state.orderLength.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const JWT_TOKEN = localStorage.getItem("token");
  const calculateCartLength = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const apiUrl = `${url}/cart`;
      const { data: res } = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      // console.log(res.data);
      if (res.data.length === 0) {
        dispatch(setCartLength(0));
      }
      dispatch(setCartLength(res.data.length));
    } catch (error) {
      // console.log(error);
    }
  };
  const calculateOrderLength = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const apiUrl = `${url}/orders`;
      const { data: res } = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      dispatch(setOrderLength(res.data.length));
    } catch (error) {
      // console.log(error);
    }
  };
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    calculateCartLength();
    calculateOrderLength();
  }, [dispatch]); // Include dispatch in the dependency array to re-fetch cart length when it updates

  const location = useLocation();
  const handleLogout = async () => {
    try {
      const url = import.meta.env.VITE_API_URL;
      const apiUrl = `${url}/users/logout`;
      await axios.post(apiUrl);
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className={Styles.navbar}>
      <Link to="/" className={Styles.navbar_link}>
        <div className={Styles.navbar_brand}>
          <FontAwesomeIcon icon={faUtensils} className={Styles.navbar_icon} />
          <span className={Styles.navbar_text}>Delight Dine</span>
        </div>
      </Link>

      <div
        className={`${Styles.navbar_links} ${menuOpen ? `${Styles.open}` : ""}`}
      >
        <Link
          to="/"
          className={`${Styles.navbar_link} ${
            location.pathname === "/" ? Styles.active : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/allmeals"
          className={`${Styles.navbar_link} ${
            location.pathname === "/allmeals" ? Styles.active : ""
          }`}
        >
          Products
        </Link>
        <Link
          to="/orders"
          className={`${Styles.navbar_link} ${
            location.pathname === "/orders" ? Styles.active : ""
          }`}
        >
          Orders
        </Link>
        <Link to="/offers">
          <button className={Styles.navbar_button}>Special Offer</button>
        </Link>
        <div className={Styles.navbar_phone}>
          <FontAwesomeIcon icon={faPhone} className={Styles.navbar_icon} />
          <span className={Styles.navbar_text}>8507545405</span>
        </div>
        <button onClick={handleLogout}>
          <FontAwesomeIcon icon={faPowerOff} className={Styles.navbar_icon} />
        </button>
      </div>

      <div className={Styles.navbar_info}>
        <div className={Styles.navbar_orders}>
          <Link to="/orders">
            <FontAwesomeIcon
              icon={faClipboardList}
              className={Styles.navbar_icon}
            />
          </Link>
          <span className={Styles.navbar_text}>{orderLength}</span>
          <Link to="/cart">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className={Styles.navbar_icon}
            />
          </Link>
          <span className={Styles.navbar_text}>{cartLength}</span>
        </div>
      </div>
      <div className={Styles.navbar_toggle} onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={menuOpen ? faTimes : faBars}
          className={Styles.navbar_icon}
        />
      </div>
    </nav>
  );
};

export default Navbar;
