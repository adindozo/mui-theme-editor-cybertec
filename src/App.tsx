import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CustomizeThemePage from "./pages/CustomizeThemePage";
import {
  darkTheme as defaultDarkTheme,
  defaultFonts,
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
  customcssc: string;
  setCustomcssc: React.Dispatch<React.SetStateAction<string>>;
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
  const [customcssc, setCustomcssc] = useState<string>(
    localStorage.getItem("customCSS") || "",
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
        customcssc,
        setCustomcssc,
      }}
    >
      <Routes>
        <Route path="/mui-theme-editor-cybertec" element={<HomePage />} />
        <Route
          path="/mui-theme-editor-cybertec/customize"
          element={<CustomizeThemePage />}
        />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
