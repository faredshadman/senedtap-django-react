import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKENDURL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosInstance;