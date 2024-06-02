import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Styles from "./GiveFeedback.module.css";
import { toast } from "react-toastify";
import axios from "axios";

const GiveFeedback = () => {
  // get Id if there is update
  const { id } = useParams();
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [readImg, setReadImg] = useState(null);
  const [comments, setComments] = useState("");
  const [rating, setRating] = useState(0);

  const JWT_Token = localStorage.getItem("token");
  const url = import.meta.env.VITE_API_URL;

  const fetchFeedbackData = async () => {
    const apiUrl = `${url}/feedbacks/${id}`;
    try {
      const { data: res } = await axios.get(apiUrl, null, {
        headers: {
          Authorization: `Bearer ${JWT_Token}`,
        },
      });
      setName(res.data.name);
      setReadImg(res.data.image);
      setComments(res.data.comments);
      setRating(res.data.rating);
    } catch (err) {
      console.log(err);
    }
  };
  // Function to handle the image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setReadImg(reader.result);
    };
    reader.readAsDataURL(file);
    setImage(file);
  };

  const addOrUpdateHandler = async (e) => {
    e.preventDefault();
    // Create a FormData object to store the form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("comments", comments);
    formData.append("rating", rating);

    // Set the API URL based on the environment variable
    let apiUrl = `${url}/feedbacks`;
    try {
      // Make the POST or PATCH request according to the API
      if (id) {
        const { data: res } = await axios.patch(apiUrl, formData, {
          headers: {
            Authorization: `Bearer ${JWT_Token}`,
          },
        });
        toast.success(res.message);
      } else {
        const { data: res } = await axios.post(apiUrl, formData, {
          headers: {
            Authorization: `Bearer ${JWT_Token}`,
          },
        });
        toast.success(res.message);
      }
      setName("");
      setImage(null);
      setReadImg(null);
      setRating("");
      setComments("");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };
  // fectch feedback data when id is there
  useEffect(() => {
    if (id) {
      fetchFeedbackData();
    }
  }, [id]);
  return (
    <div className={Styles.feedbackContainer}>
      <h2>We Value Your Feedback</h2>
      <form className={Styles.form} onSubmit={addOrUpdateHandler}>
        {id && (
          <div className={Styles.input_cell}>
            <label htmlFor="id">Id:</label>
            <input type="text" id="id" value={id} disabled />
          </div>
        )}
        <div className={Styles.input_cell}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Your Name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={Styles.input_cell}>
          <label htmlFor="image">Image</label>
          <div>
            {readImg ? (
              <img
                src={readImg}
                alt="Uploaded image"
                className={Styles.image}
              />
            ) : (
              <p className={Styles.text}>No image uploaded</p>
            )}
          </div>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className={Styles.input_cell}>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            min={1}
            max={5}
            placeholder="Your Rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className={Styles.input_cell}>
          <label htmlFor="feedback">Comments:</label>
          <textarea
            placeholder="Your Feedback"
            id="feedback"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
        </div>
        <button className={Styles.btn} type="submit">
          Give FeedBack
        </button>
      </form>
    </div>
  );
};

export default GiveFeedback;
