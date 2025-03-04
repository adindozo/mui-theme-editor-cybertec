import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { Menu, MenuItem, Select } from "@mui/material";
import { ComponentOverridesButton } from "./ComponentOverridesButton";

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
      <TreeItem itemId="appBar" label="App Bar" />
      <TreeItem itemId="textField" label="Text Field" />
    </TreeItem>
  );
};
