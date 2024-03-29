import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
dotenv.config();

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000",
});

export default axiosInstance;
