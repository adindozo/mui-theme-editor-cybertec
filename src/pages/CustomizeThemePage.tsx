import { Box } from "@mui/material";
import React, { useContext } from "react";
import HomePage from "./HomePage";
import { UpperPanel } from "../components/UpperPanel";
import { LeftSidePanel } from "../components/LeftSidePanel";
import { ThemeContext } from "../App";

const CustomizeThemePage = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { view } = context;
  return (
    <>
      <UpperPanel />
      <LeftSidePanel />
      <Box
        key={view}
        sx={{
          width: view === "desktop" ? "100%" : "430px",
          height: view === "desktop" ? "100%" : "932px",
          overflowY: "auto",

          transition: "width 0.3s ease-in-out, margin 0.3s ease-in-out",
        }}
      >
        <HomePage />
      </Box>
    </>
  );
};

export default CustomizeThemePage;
