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
import { UploadFile } from "@mui/icons-material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";

export const UpperPanel = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { themeSwitch, setThemeSwitch, view, setView } = context;

  const handleViewChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
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
            <Button startIcon={<DownloadIcon />} sx={{ textTransform: "none" }}>
              Download Theme
            </Button>
            <Button startIcon={<UploadFile />} sx={{ textTransform: "none" }}>
              Upload Theme
            </Button>
          </div>
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleViewChange}
            sx={{ mx: 2 }}
          >
            <ToggleButton value="mobile" sx={{ px: 2 }}>
              <PhoneAndroidIcon
                color={view === "mobile" ? "primary" : "inherit"}
              />
            </ToggleButton>

            <ToggleButton value="desktop" sx={{ px: 2 }}>
              <ComputerIcon
                color={view === "desktop" ? "primary" : "inherit"}
              />
            </ToggleButton>
          </ToggleButtonGroup>
          <Button>Save</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
