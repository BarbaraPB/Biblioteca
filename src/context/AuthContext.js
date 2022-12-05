import { createContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const userJSON = window.localStorage.getItem("user");
    if (userJSON) {
      setUser(JSON.parse(userJSON));
    }
  }, []);

  useEffect(() => {
    if (user) {
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const value = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user, setUser]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
