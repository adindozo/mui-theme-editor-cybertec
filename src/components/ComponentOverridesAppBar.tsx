import { MenuItem, Select } from "@mui/material";
import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

export const ComponentOverridesAppBar = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme, setLightTheme, setDarkTheme } =
    context;
  return (
    <TreeItem itemId="appBar" label="App Bar">
      <p variant="h6" style={{ margin: "0px" }}>
        Position
      </p>
      <Select
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiAppBar.defaultProps.position
            : darkTheme.components.MuiAppBar.defaultProps.position
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiAppBar: {
                  ...lightTheme.components.MuiAppBar,
                  defaultProps: {
                    ...lightTheme.components.MuiAppBar.defaultProps,
                    position: e.target.value,
                  },
                },
              },
            });
          } else {
            setDarkTheme({
              ...darkTheme,
              components: {
                ...darkTheme.components,
                MuiAppBar: {
                  ...darkTheme.components.MuiAppBar,
                  defaultProps: {
                    ...darkTheme.components.MuiAppBar.defaultProps,
                    position: e.target.value,
                  },
                },
              },
            });
          }
        }}
      >
        <MenuItem value={"sticky"}>Sticky</MenuItem>
        <MenuItem value={"static"}>Static</MenuItem>
      </Select>
    </TreeItem>
  );
};
