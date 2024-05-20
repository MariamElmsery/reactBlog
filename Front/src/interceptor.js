import axios from "axios";

// Create an instance of Axios
const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("jwtToken");
    //   console.log(token);
      if (token) {
        config.headers["jwttoken"] = `${token}`;
      }
      return config;
    },
    (error) => {
        console.log(error);
      return Promise.reject(error);
    }
  );
  export default axiosInstance;