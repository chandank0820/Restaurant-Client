// src/socket.js
import { io } from "socket.io-client";

const URL = import.meta.env.VITE_API_URL;
const socket = io(URL, {
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd",
  },
});

export default socket;
