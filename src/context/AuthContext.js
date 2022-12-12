import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { auth } from "../firebase";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const userCall = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      userCall();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
