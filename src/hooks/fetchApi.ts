import { SelectType } from "../types/sign-up";

export const fetchApi = async (
  helper: any,
  endpoint: string,
  setState: React.Dispatch<React.SetStateAction<SelectType[] | undefined>>
) => {
  try {
    const response = await helper(endpoint);
    setState(response.data);
  } catch (error) {
    console.error(error);
  }
};
