import React, { useState, useEffect } from "react";
import PopularCard from "./PopularCard";
import { Link } from "react-router-dom";
import Styles from "./Popular.module.css";
import mainDish from "../../assets/images/main_dish.png";
import breakFast from "../../assets/images/breakfast.png";
import dessert from "../../assets/images/dessert_caption.png";
import browseAll from "../../assets/images/browse_all.png";
import veg from "../../assets/images/veg.png";
import nonVeg from "../../assets/images/non-veg.png";
import axios from "axios";

const Popular = () => {
  const [mainDishLen, setMainDishLen] = useState();
  const [breakFastLen, setBreakFastLen] = useState();
  const [dessertLen, setDessertLen] = useState();
  const [browseAllLen, setBrowseAllLen] = useState();
  const [vegLen, setVegLen] = useState();
  const [nonVegLen, setNonVegLen] = useState();

  const fetchData = async () => {
    const url = import.meta.env.VITE_API_URL;
    const mainDishUrl = `${url}/products/category/mainDish`;
    const breakFastUrl = `${url}/products/category/breakFast`;
    const dessertUrl = `${url}/products/category/desserts`;
    const vegUrl = `${url}/products/type/veg`;
    const nonVegUrl = `${url}/products/type/non veg`;

    const { data: mainDishRes } = await axios.get(mainDishUrl);
    const { data: breakFastRes } = await axios.get(breakFastUrl);
    const { data: dessertRes } = await axios.get(dessertUrl);
    const { data: vegRes } = await axios.get(vegUrl);
    const { data: nonVegRes } = await axios.get(nonVegUrl);
    setMainDishLen(mainDishRes.data.length);
    setBreakFastLen(breakFastRes.data.length);
    setDessertLen(dessertRes.data.length);
    setVegLen(vegRes.data.length);
    setNonVegLen(nonVegRes.data.length);
    setBrowseAllLen(
      mainDishRes.data.length +
        breakFastRes.data.length +
        dessertRes.data.length
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={Styles.Popular}>
      <h2>CUSTOMER FAVORITES</h2>
      <h1>Popular Categories</h1>
      <div className={Styles.card_container}>
        <Link to="/allmeals/mainDish" className={Styles.link}>
          <PopularCard
            img={mainDish}
            name="Main Dish"
            number={mainDishLen}
            alt="dish"
          />
        </Link>
        <Link to="/allmeals/breakFast" className={Styles.link}>
          <PopularCard
            img={breakFast}
            name="Breakfast"
            number={breakFastLen}
            alt="dish"
          />
        </Link>
        <Link to="/allmeals/desserts" className={Styles.link}>
          <PopularCard
            img={dessert}
            name="Dessert"
            number={dessertLen}
            alt="dish"
          />
        </Link>
        <Link to="/allmeals/veg" className={Styles.link}>
          <PopularCard img={veg} name="Vegetarian" number={vegLen} alt="dish" />
        </Link>
        <Link to="/allmeals/non veg" className={Styles.link}>
          <PopularCard
            img={nonVeg}
            name="Non Veg"
            number={nonVegLen}
            alt="dish"
          />
        </Link>
        <Link to="/allmeals" className={Styles.link}>
          <PopularCard
            img={browseAll}
            name="Browse All"
            number={browseAllLen}
            alt="dish"
          />{" "}
        </Link>
      </div>
    </div>
  );
};

export default Popular;
