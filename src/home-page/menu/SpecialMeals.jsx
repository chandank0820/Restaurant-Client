import { React, useState, useEffect } from "react";
import SpecialMenuCard from "./SpecialMenuCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Styles from "./SpecialMeals.module.css";
import axios from "axios";

const SpecialMeals = () => {
  const [menuItems, setMenuItems] = useState([]);
  const itemsPerPage = 4; // Number of items to show per page
  //Defining which page to show
  const [currentPage, setCurrentPage] = useState(0);
  // Saving the state of input changes
  const [searchTerm, setSearchTerm] = useState("");
  // Calculating the total number of pages
  const fetchSpecialItems = async () => {
    const url = import.meta.env.VITE_API_URL;
    const apiUrl = `${url}/products/special`;
    const { data: res } = await axios.get(apiUrl);
    setMenuItems(res.data);
  };

  if (!menuItems) {
    return <div>Loading...</div>;
  }
  const totalPages = Math.ceil(menuItems.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  // Filtering Items to see searched Item
  const filteredItems = menuItems.filter((item) =>
    item.caption.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const displayedItems = searchTerm ? filteredItems : menuItems;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = displayedItems.slice(startIndex, endIndex);

  useEffect(() => {
    fetchSpecialItems();
  }, []);

  return (
    <div className={Styles.container} id="meals-component">
      <div className={Styles.heading}>
        <h2>Our Delicious and Special Meals</h2>
      </div>
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
      <div className={Styles.main}>
        <FontAwesomeIcon
          icon={faAnglesLeft}
          size="2x"
          color="black"
          className={`${Styles.icon} ${Styles.leftIcon}`}
          onClick={handlePrev}
        />
        <div className={Styles.card_container}>
          {visibleItems.map((menuItem, index) => (
            <div key={index} className={`${Styles.activeCard}`}>
              <SpecialMenuCard
                id={menuItem._id}
                image={menuItem.image}
                caption={menuItem.caption}
                description={menuItem.description}
                price={menuItem.price}
                rating={menuItem.rating}
              />
            </div>
          ))}
        </div>
        <FontAwesomeIcon
          icon={faAnglesRight}
          size="2x"
          color="black"
          className={`${Styles.icon} ${Styles.rightIcon}`}
          onClick={handleNext}
        />
      </div>
      <div className={Styles.btn}>
        <button onClick={handlePrev}>Previous Items</button>
        <button onClick={handleNext}>Load More</button>
      </div>
    </div>
  );
};

export default SpecialMeals;
