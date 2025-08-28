// https://zync-backend.vercel.app/api

import axios from "axios";

// const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "https://zync-backend.vercel.app/api";

const BASE_URL = import.meta.env.VITE_API_BASE_URL

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,  // Sending Cookies
});