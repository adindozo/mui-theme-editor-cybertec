import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CustomizeThemePage from "./pages/CustomizeThemePage";
import {
  darkTheme as defaultDarkTheme,
  lightTheme as defaultLightTheme,
} from "./Themes";
import { createContext, useEffect, useState } from "react";
import { createTheme } from "@mui/material";
import useLoadGoogleFonts from "./components/useLoadGoogleFonts";
type Theme = "light" | "dark";
type ViewMode = "mobile" | "desktop";

interface ThemeContextType {
  themeSwitch: Theme;
  setThemeSwitch: React.Dispatch<React.SetStateAction<Theme>>;
  darkTheme: object;
  setDarkTheme: React.Dispatch<React.SetStateAction<object>>;
  lightTheme: object;
  setLightTheme: React.Dispatch<React.SetStateAction<object>>;
  view: ViewMode;
  setView: React.Dispatch<React.SetStateAction<ViewMode>>;
  googlefonts: string[];
  setGooglefonts: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

function App() {
  const [googlefonts, setGooglefonts] = useState<string[]>([]);

  const getStoredTheme = (key: string, defaultValue: object) => {
    const storedTheme = localStorage.getItem(key);
    if (!storedTheme) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue;
    }
    const parsedTheme = JSON.parse(storedTheme);

    return parsedTheme;
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

  const [view, setView] = useState<ViewMode>("desktop");

  useEffect(() => {
    localStorage.setItem("themeSwitch", themeSwitch);
  }, [themeSwitch]);
  useEffect(() => {
    const storedGooglefonts = localStorage.getItem("googlefonts");
    if (storedGooglefonts) {
      setGooglefonts(JSON.parse(storedGooglefonts));
    } else {
      const defaultFonts: string[] = [
        "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap",
      ];
      setGooglefonts(defaultFonts);
      localStorage.setItem("googlefonts", JSON.stringify(defaultFonts));
    }
  }, []);
  useLoadGoogleFonts(googlefonts);
  return (
    <ThemeContext.Provider
      value={{
        themeSwitch,
        setThemeSwitch,
        darkTheme,
        setDarkTheme,
        lightTheme,
        setLightTheme,
        view,
        setView,
        googlefonts,
        setGooglefonts,
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
