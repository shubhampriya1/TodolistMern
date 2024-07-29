import axios from "axios";
import React, { useEffect, useState, createContext, Children } from "react";
const initialState = {
  user: null,
  loading: true,
  logout: () => null,
};
export const AuthContext = createContext(initialState);

const AuthuserProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  async function userDetsils() {
    const token = Cookies.get("authtoken");
    if (!token) {
      throw new Error("Authentication token not found");
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await axios.get(
      `${import.meta.env.VITE_PUBIC_BACKEND_URL}/user/`,
      config
    );
    setUser(res);
    setLoading(false);
  }
  useEffect(() => {
    userDetsils();
  }, []);

  const value = {
    user,
    loading,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthuserProvider;
