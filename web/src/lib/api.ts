import axios from "axios";

export const api = axios.create({
  // variavel de ambient
  baseURL: import.meta.env.VITE_API_URL
})