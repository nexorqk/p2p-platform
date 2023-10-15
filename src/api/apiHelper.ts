import { baseUrl } from "../constants";

export const myFetch = (method: string, obj: any) => {
  return fetch(`${baseUrl}/${method}`, obj);
};
