import React, { createContext, useCallback } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";

export const AuthContext = createContext({
  isAuthenticated: false,
});

export function AuthenticationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    "isAuthenticated",
    null
  );

  const logIn = useCallback((userData) => setIsAuthenticated(userData), [
    setIsAuthenticated,
  ]);

  const logOut = useCallback(() => setIsAuthenticated(null), [
    setIsAuthenticated,
  ]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!isAuthenticated,
        user: isAuthenticated,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
