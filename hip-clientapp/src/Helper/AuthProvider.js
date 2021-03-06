import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user) => {
    console.log("login", user);
    setUser(user);
  };

  const logout = () => {
    console.log("logout", user);
    setUser(null);
  };

  const valueData = { user, login, logout };

  return (
    <AuthContext.Provider value={valueData}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
