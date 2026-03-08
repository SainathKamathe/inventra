import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user] = useState({ id: 1, name: "Demo User" });

  const value = useMemo(() => ({ user, isAuthenticated: true }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
