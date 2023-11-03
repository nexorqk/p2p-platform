import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { baseApi, endpoints } from "../api";

export function useUser() {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  function getTokenFromLocalStorage() {
    return localStorage.getItem("token");
  }

  async function getAuthenticatedUser() {
    const defaultReturnObject = { authenticated: false, user: null };
    try {
      const token = getTokenFromLocalStorage();
      if (!token) {
        return defaultReturnObject;
      }
      const response = await baseApi.get(endpoints.GET_USER);
      const { authenticated = false } = response.data;
      return authenticated ? response.data : false;
    } catch (err) {
      console.log("getAuthenticatedUser, Something Went Wrong", err);
      return defaultReturnObject;
    }
  }

  useEffect(() => {
    async function getUserDetails() {
      const { authenticated, user } = await getAuthenticatedUser();
      if (!authenticated) {
        navigate(APP_ROUTES.SIGN_IN);
        return;
      }
      setUser(user);
      setAuthenticated(authenticated);
    }
    getUserDetails();
  }, []);

  return { user, authenticated };
}
