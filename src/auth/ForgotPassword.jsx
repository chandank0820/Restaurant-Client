import React, { useState } from "react";
import AuthForm from "./AuthForm.jsx";
import { toast } from "react-toastify";
import axios from "axios";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const forgotPasswordHandler = async (Email) => {
    console.log("Email: ", Email);
    const url = import.meta.env.VITE_API_URL;
    const apiUrl = `${url}/users/forgot-password`;
    try {
      const { data: res } = await axios.post(apiUrl, { email: Email });
      toast.success(res.message);
      setMessage(res.message);
      setError("");
    } catch (error) {
      toast.error(error.response.data.message);
      setError(error.response.data.message);
      setMessage("");
    }
  };
  return (
    <AuthForm
      forgotPassword
      forgotPasswordHandler={forgotPasswordHandler}
      message={message}
      error={error}
    />
  );
};

export default ForgotPassword;
