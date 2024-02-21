import axios, { AxiosInstance } from "axios";
import { config } from "dotenv";
config();

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_URL ??
    "https://www.sdddsdghjfkglgfdsafghkjlgfdsa.shop/",
});

export default axiosInstance;
