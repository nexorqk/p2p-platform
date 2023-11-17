import axios from "axios";

export const baseApi = axios.create({
  baseURL: "http://localhost:3004",
});

export const endpoints = {
  SPORT_TYPES: "sportTypesArr",
  GENDER: "gender",
  SPECIFIC_SPORT: "specificSport",

  GET_USER: "getUser",
};
