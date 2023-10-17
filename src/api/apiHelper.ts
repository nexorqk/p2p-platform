import axios from "axios";
import { baseUrl } from "../constants";

export const getRequest = (method: string, obj?: any) => {
  return axios.get(`${baseUrl}/${method}`, obj);
};
