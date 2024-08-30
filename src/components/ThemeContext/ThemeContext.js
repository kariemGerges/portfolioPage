import React, { createContext, useState, useEffect } from 'react';

// Create a context for the theme
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

  const toggleTheme = () => {
    // setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
