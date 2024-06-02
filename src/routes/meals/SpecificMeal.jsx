import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./SpecificMeal.module.css";
import axios from "axios";
import { setCartLength } from "../../redux/cart/cartLengthSlice";
import { useDispatch } from "react-redux";

const Star = ({ filled }) => {
  return <span className={styles.star}>{filled ? "\u2605" : "\u2606"}</span>;
};

const Rating = ({ value }) => {
  const roundedValue = Math.round(value * 2) / 2;
  // Create an array of five elements with true or false
  const stars = Array.from({ length: 5 }, (_, i) => i < roundedValue);
  //   console.log(stars);
  return (
    <div className={styles.rating}>
      {stars.map((star, i) => (
        <Star key={i} filled={star} />
      ))}
    </div>
  );
};
// Used to Find Meal Item

const SpecificMeal = () => {
  const { mealId } = useParams();
  const [mealData, setMealData] = useState();
  const url = import.meta.env.VITE_API_URL;
  const JWT_TOKEN = localStorage.getItem("token");
  const dispatch = useDispatch();

  const findItemById = async () => {
    const apiUrl = `${url}/products/${mealId}`;
    const { data: res } = await axios.get(apiUrl);
    setMealData(res.data);
  };

  const handleAddToCart = async () => {
    const apiUrl = `${url}/cart/add`;
    const data = {
      productId: mealId,
      quantity: 1,
    };
    try {
      const { data: res } = await axios.post(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${JWT_TOKEN}`,
        },
      });
      console.log(res.message);
      toast.success(res.message);
      dispatch(setCartLength(res.data.length));
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    findItemById();
  }, []);
  if (!mealData) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={mealData.image} alt="Meal Image" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.caption}>{mealData.caption}</h3>
        <p className={styles.description}>{mealData.description}</p>
        <div className={styles.info}>
          <span className={styles.price}>₹{mealData.price}</span>
          <Rating value={mealData.rating} />
        </div>
        <button onClick={handleAddToCart} className={styles.button}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SpecificMeal;
