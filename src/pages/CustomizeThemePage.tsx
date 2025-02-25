import { Box } from "@mui/material";
import React, { useContext } from "react";
import HomePage from "./HomePage";
import { UpperPanel } from "../components/UpperPanel";
import { LeftSidePanel } from "../components/LeftSidePanel";
import { ThemeContext } from "../App";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
const CustomizeThemePage = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { view } = context;

  const deviceMap = {
    desktop: { device: "MacBook Pro", width: "100%", height: "100%" },
    mobile: { device: "iPhone 8", width: "430px", height: "932px" },
  };

  const { device, width, height } = deviceMap[view] || deviceMap.desktop;

  return (
    <>
      <UpperPanel />
      <Box sx={{ display: "flex", height: "calc(100vh-64px)" }}>
        <LeftSidePanel />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh-64px)",
          }}
        >
          {view === "mobile" ? (
            <DeviceFrameset device={"iPhone 8"}>
              <Box
                sx={{
                  width,
                  height,
                  overflowY: "auto",
                }}
              >
                <HomePage />
              </Box>
            </DeviceFrameset>
          ) : (
            <Box
              key={view}
              sx={{
                width: "100%", // Full screen for desktop view
                height: "calc(100vh - 64px)", // Subtract height of AppBar
                overflowY: "auto",
                transition: "width 0.3s ease-in-out, margin 0.3s ease-in-out",
              }}
            >
              <HomePage />
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CustomizeThemePage;
