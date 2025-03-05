import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { Box, Menu, MenuItem, Select } from "@mui/material";
import { ComponentOverridesButton } from "./ComponentOverridesButton";
import { ComponentOverridesAppBar } from "./ComponentOverridesAppBar";
import { ComponentOverridesTextField } from "./ComponentOverridesTextField";

export const ComponentOverridesEditor = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const {
    themeSwitch,
    darkTheme,
    lightTheme,
    setLightTheme,
    setDarkTheme,
    googlefonts,
  } = context;
  return (
    <TreeItem itemId="componentOverrides" label="Component Overrides">
      <ComponentOverridesButton />
      <ComponentOverridesAppBar />
      <ComponentOverridesTextField />
    </TreeItem>
  );
};
