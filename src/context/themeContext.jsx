import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Light / dark holati
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  
  const [accentColor, setAccentColor] = useState(() => {
    return localStorage.getItem("accentColor") || "rgb(255, 72, 0)";
  });

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent-color", accentColor);
    localStorage.setItem("accentColor", accentColor);
  }, [accentColor]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
