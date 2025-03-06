import {
  AppBar,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
} from "@mui/material";
import React, { useContext, useState } from "react";
import MaterialUISwitch from "./MaterialUISwitch";
import { ThemeContext } from "../App";
import DownloadIcon from "@mui/icons-material/Download";
import { UploadFile, LockReset } from "@mui/icons-material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";
import {
  darkTheme as defaultDarkTheme,
  defaultFonts,
  lightTheme as defaultLightTheme,
} from "../Themes";

export const UpperPanel = () => {
  const [file, setFile] = useState<File | null>(null);
  const context = useContext(ThemeContext);
  if (!context) return null;
  const {
    themeSwitch,
    setThemeSwitch,
    setLightTheme,
    setDarkTheme,
    setView,
    darkTheme,
    lightTheme,
    googlefonts,
    setGooglefonts,
    setCustomcssc,
  } = context;
  const handleDownload = (): void => {
    const localStorageData: Record<string, any> = {};

    // Iterate over all keys in localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const value = localStorage.getItem(key);

        try {
          localStorageData[key] = JSON.parse(value!); // Try parsing JSON values
        } catch {
          localStorageData[key] = value; // If not JSON, keep as a string
        }
      }
    }

    const jsonData: string = JSON.stringify(localStorageData, null, 2);
    const blob: Blob = new Blob([jsonData], { type: "application/json" });
    const url: string = URL.createObjectURL(blob);

    const a: HTMLAnchorElement = document.createElement("a");
    a.href = url;
    a.download = "MUIThemeConfig-Cybertec.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile) {
      setFile(uploadedFile);

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target?.result as string);

          localStorage.clear();

          Object.keys(jsonData).forEach((key) => {
            localStorage.setItem(key, JSON.stringify(jsonData[key]));
          });
          setDarkTheme(jsonData.darkTheme);
          setLightTheme(jsonData.lightTheme);
          setGooglefonts(jsonData.googlefonts);
          setCustomcssc(jsonData.customCSS);
          event.target.value = "";
        } catch (error) {
          console.error("Invalid JSON file:", error);
        }
      };

      reader.readAsText(uploadedFile);
    }
  };
  return (
    <div>
      <AppBar sx={{ bgcolor: "white", color: "black" }} position="sticky">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <MaterialUISwitch
            checked={themeSwitch === "dark"}
            onChange={() => {
              setThemeSwitch(themeSwitch === "dark" ? "light" : "dark");
            }}
          />
          <div>
            <Button
              startIcon={<DownloadIcon />}
              sx={{ textTransform: "none" }}
              onClick={handleDownload}
            >
              Download Theme
            </Button>
            <input
              type="file"
              accept="application/json"
              style={{ display: "none" }}
              id="upload-json"
              onChange={handleFileChange}
            />
            <label htmlFor="upload-json">
              <Button
                component="span"
                startIcon={<UploadFile />}
                sx={{ textTransform: "none" }}
              >
                Upload Theme
              </Button>
            </label>
            <Button
              startIcon={<LockReset />}
              sx={{ textTransform: "none" }}
              onClick={() => {
                setLightTheme(defaultLightTheme);
                setDarkTheme(defaultDarkTheme);
                setGooglefonts(defaultFonts);
                setCustomcssc("");
              }}
            >
              Reset Theme
            </Button>
          </div>

          <Button
            onClick={() => {
              localStorage.setItem("darkTheme", JSON.stringify(darkTheme));
              localStorage.setItem("lightTheme", JSON.stringify(lightTheme));
              localStorage.setItem("googlefonts", JSON.stringify(googlefonts));
            }}
          >
            Save
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
