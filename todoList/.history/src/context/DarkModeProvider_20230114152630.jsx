import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const DarkModeContext = createContext();

function DarkModeProvider({children}) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((darkMode) => !darkMode);
    updateDarkMode(darkMode);
  };

  useEffect(() => {
    const isDark = 
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, [darkMode])
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

const updateDarkMode = (darkMode) => {
  if(darkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }
  else{
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}


export default DarkModeProvider;