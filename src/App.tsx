import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CustomizeThemePage from "./pages/CustomizeThemePage";
import {
  darkTheme as defaultDarkTheme,
  lightTheme as defaultLightTheme,
} from "./Themes";
import { createContext, useEffect, useState } from "react";
type Theme = "light" | "dark";

interface ThemeContextType {
  themeSwitch: Theme;
  setThemeSwitch: React.Dispatch<React.SetStateAction<Theme>>;
  darkTheme: object;
  setDarkTheme: React.Dispatch<React.SetStateAction<object>>;
  lightTheme: object;
  setLightTheme: React.Dispatch<React.SetStateAction<object>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

function App() {
  // Load themes from local storage or use defaults
  const getStoredTheme = (key: string, defaultValue: object) => {
    const storedTheme = localStorage.getItem(key);
    return storedTheme ? JSON.parse(storedTheme) : defaultValue;
  };

  const [themeSwitch, setThemeSwitch] = useState<Theme>(
    (localStorage.getItem("themeSwitch") as Theme) || "light",
  );
  const [darkTheme, setDarkTheme] = useState<object>(
    getStoredTheme("darkTheme", defaultDarkTheme),
  );
  const [lightTheme, setLightTheme] = useState<object>(
    getStoredTheme("lightTheme", defaultLightTheme),
  );

  useEffect(() => {
    localStorage.setItem("themeSwitch", themeSwitch);
  }, [themeSwitch]);

  return (
    <ThemeContext.Provider
      value={{
        themeSwitch,
        setThemeSwitch,
        darkTheme,
        setDarkTheme,
        lightTheme,
        setLightTheme,
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customize" element={<CustomizeThemePage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
