import axios, { AxiosInstance } from "axios";
import { config } from "dotenv";
config();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000",
});

export default axiosInstance;
