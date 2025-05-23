import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: parseInt(import.meta.env.VITE_API_TIMEOUT || "5000"),
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Response interceptor
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (import.meta.env.VITE_DEBUG === "true") {
      console.error("API Error:", error);
    }
    return Promise.reject(error.response?.data?.message || error.message);
  }
);

export default api;
