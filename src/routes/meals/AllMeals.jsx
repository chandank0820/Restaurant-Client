import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Styles from "./AllMeals.module.css";
import AllMealsCard from "./AllMealsCard";
import axios from "axios";

const AllMeals = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const { category } = useParams();

  const fetchItems = async () => {
    const url = import.meta.env.VITE_API_URL;
    let apiUrl;
    if (!category) {
      apiUrl = `${url}/products`;
    } else if (category === "veg") {
      apiUrl = `${url}/products/type/veg`;
    } else if (category === "non veg") {
      apiUrl = `${url}/products/type/non veg`;
    } else {
      apiUrl = `${url}/products/category/${category}`;
    }
    const { data: res } = await axios.get(apiUrl);
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  const filteredItems = items.filter((item) =>
    item.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={Styles.container}>
      <div className={Styles.searchBar}>
        <input
          type="text"
          placeholder="Search for a meal..."
          className={Styles.search}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className={Styles.searchButton}
          onClick={() => setSearchTerm("")}
        >
          Clear
        </button>
      </div>
      <div className={Styles.cardContainer}>
        {filteredItems.map((menuItem) => (
          <div key={menuItem._id} className={Styles.activeCard}>
            <AllMealsCard
              id={menuItem._id}
              img={menuItem.image}
              caption={menuItem.caption}
              description={menuItem.description}
              price={menuItem.price}
              rating={menuItem.rating}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMeals;
