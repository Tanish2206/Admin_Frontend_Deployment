import axios from "axios";
import secureLocalStorage from "react-secure-storage";

/**get Token for LocalStorage.................*/
const token:any = secureLocalStorage.getItem("authToken");
const instance = axios.create({
  baseURL: process.env.backendBaseUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config) {
    const authToken= JSON.parse(secureLocalStorage.getItem("authToken")as any);
    config.headers["Authorization"] = authToken;
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
