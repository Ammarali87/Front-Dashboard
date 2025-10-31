"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material';

type ThemeContextType = {
  darkMode: boolean;
  toggleTheme: () => void;
};  

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
   //  only in intial load   
  useEffect(() => {   
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);  


  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    }, 
  });

 const toggleTheme = ()=>{
   setDarkMode(!darkMode);
    localStorage.setItem("darkMode",(!darkMode).toString() )
 }   

  return (      
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext); 
