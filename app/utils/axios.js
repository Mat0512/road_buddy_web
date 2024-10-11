import axios from "axios";

// Create an axios instance with default configurations
const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8001/api", // This is the base URL for API requests
    timeout: 10000, // Optional timeout (in milliseconds)
    headers: {
        "Content-Type": "application/json", // Default content-type header
    },
});

// Optional: Add request/response interceptors for logging or modifying requests
axiosInstance.interceptors.request.use(
    (config) => {
        // You can modify the request config here, like adding authorization tokens
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // You can handle global responses here
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
