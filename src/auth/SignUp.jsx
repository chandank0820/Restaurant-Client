import React, { useState } from "react";
import AuthForm from "./AuthForm";
import { toast } from "react-toastify";
import axios from "axios";

const SignUp = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const url = import.meta.env.VITE_API_URL;
  const apiUrl = `${url}/users/signup`;
  const signupHandler = async (name, email, password) => {
    // console.log("Name:", Name);
    // console.log("Email:", Email);
    // console.log("Password:", Password);
    try {
      const data = { name, email, password };
      const { data: res } = await axios.post(apiUrl, data);
      toast.success(res.message);
      setMessage(res.message);
      setError("");
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setError(error.response.data.message);
      setMessage("");
    }
  };

  return (
    <AuthForm
      signup
      signupHandler={signupHandler}
      message={message}
      error={error}
    />
  );
};

export default SignUp;
