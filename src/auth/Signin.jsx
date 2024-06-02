import React, { useState } from "react";
import axios from "axios";
import AuthForm from "./AuthForm.jsx";
import { toast } from "react-toastify";

const Signin = () => {
  const [error, setError] = useState("");
  const url = import.meta.env.VITE_API_URL;
  const apiUrl = `${url}/users/signin`;
  const signinHandler = async (email, password) => {
    // console.log(username, password);
    const data = { email, password };
    try {
      const { data: res } = await axios.post(apiUrl, data);
      console.log(res);
      localStorage.setItem("token", res.token);
      window.location = "/";
      setError("");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return <AuthForm signin signinHandler={signinHandler} error={error} />;
};

export default Signin;
