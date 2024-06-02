import pizza from "../../assets/images/pizza.jpg";
import burger from "../../assets/images/burgers.jpg";
import dessert from "../../assets/images/dessert.jpg";
import salad from "../../assets/images/salad.jpg";
import pasta from "../../assets/images/pasta.jpg";
import sandwich from "../../assets/images/sandwich.jpg";

const OfferData = [
  {
    id: 1,
    title: "Buy one get one free",
    description:
      "Order any pizza and get another one of equal or lesser value for free.",
    image: pizza,
  },
  {
    id: 2,
    title: "20% off on burgers",
    description: "Enjoy our juicy and delicious burgers at a discounted price.",
    image: burger,
  },
  {
    id: 3,
    title: "Free dessert with any meal",
    description:
      "Satisfy your sweet tooth with a free dessert of your choice when you order any meal.",
    image: dessert,
  },
  {
    id: 4,
    title: "Salad of the day",
    description:
      "Try our fresh and healthy salad of the day, made with seasonal ingredients and dressing.",
    image: salad,
  },
  {
    id: 5,
    title: "Pasta combo",
    description:
      "Get a pasta dish of your choice, along with a soup and a drink.",
    image: pasta,
  },
  {
    id: 6,
    title: "Sandwich deal",
    description:
      "Enjoy a sandwich of your choice, with a side of fries and a soda.",
    image: sandwich,
  },
];

export default OfferData;
