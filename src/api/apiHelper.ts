import axios from "axios";

export const commonApi = axios.create({
  baseURL: "http://localhost:3004",
});
