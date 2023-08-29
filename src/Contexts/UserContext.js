import React, { createContext, useContext} from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let user = {};
  const setUser = (newUser) => {
    user = newUser;
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
