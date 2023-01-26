import React, { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, onUserStateChange } from '../api/firebase';

const AuthContext = createContext();

export function AuthContextProvider({children}){
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
      console.log(user);
    })
  }, [])

  return(
    <AuthContextProvider value={{user, login: login, logout: logout}}>
      {children}
    </AuthContextProvider>
  );
}

export function useAuthContext(){
  return useContext(AuthContext);
}