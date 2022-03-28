import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: localStorage.getItem("user"),
    status: localStorage.getItem("authToken") ? true : false,
    authToken: localStorage.getItem("authToken"),
  });
  console.log(auth.status);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("Auth context error");
  }
  return context;
};

export { useAuth, AuthProvider };
