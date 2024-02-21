import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_URL ??
    "https://app-clone-chatgpt-nnc4y78yz-luiz-mouras-projects.vercel.app/",
});

export default axiosInstance;
