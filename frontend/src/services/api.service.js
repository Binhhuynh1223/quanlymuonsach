import axios from "axios";

const commonConfig = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

const serverURL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default (baseURL) => {
  const instance = axios.create({
    baseURL: `${serverURL}${baseURL}`,
    ...commonConfig,
  });

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return instance;
};