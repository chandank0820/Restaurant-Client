import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { toast } from "react-toastify";
import axios from "axios";
import DeleteFeedbackPopup from "./DeleteFeedbackPopup";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Styles from "./Review.module.css";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Review = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  const [userId, setUserId] = useState("");
  const url = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");
  // fetch userId
  const fetchUserId = async () => {
    const apiUrl = `${url}/users/profile`;
    try {
      const { data: res } = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(res);
      setUserId(res.user._id);
    } catch (error) {
      console.log(error);
    }
  };
  // function to fetch feedbacks from the server
  const fetchFeedbacks = async () => {
    const apiUrl = `${url}/feedbacks/all`;
    try {
      const { data: res } = await axios.get(apiUrl);
      // console.log(res.data);
      setFeedbacks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFeedback = async () => {
    const apiUrl = `${url}/feedbacks`;
    try {
      await axios.delete(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowPopup(false);
      fetchFeedbacks();
      toast.success("Feedback deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete feedback");
    }
  };
  useEffect(() => {
    fetchFeedbacks();
    fetchUserId();
  }, []);

  // Function to handle the delete button click
  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  // Function to close the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className={Styles.review_container}>
      <div className={Styles.heading}>
        <h1>Our Delight Dine Restaurant Happy Customers</h1>
        <p>
          Your feedback is invaluable to us! Share your dining experience at
          Delight Dine and help us continue to create exceptional moments for
          you and all our cherished customers.
        </p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={25}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        fadeEffect={{ crossFade: true }}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          520: {
            slidesPerView: 2,
          },
          950: {
            slidesPerView: 3,
          },
        }}
        scrollbar={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className={Styles.mySwiper}
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index} className={Styles.cardWrapper}>
            <ReviewCard
              image={feedback.image}
              review={feedback.comments}
              name={feedback.name}
              rating={feedback.rating}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Link to={"/give-feedback"} className={Styles.btn}>
        Give feedback
      </Link>
      <Link to={`/update-feedback/${userId}`} className={Styles.btn}>
        Update feedback
      </Link>
      <button onClick={handleDeleteClick} className={Styles.btn}>
        Delete feedback
      </button>
      {/* Call the popup component and pass the required props */}
      <DeleteFeedbackPopup
        isOpen={showPopup}
        onClose={handleClosePopup}
        onDelete={deleteFeedback}
      />
    </div>
  );
};

export default Review;
