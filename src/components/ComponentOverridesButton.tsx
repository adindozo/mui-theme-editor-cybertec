import { MenuItem, Select } from "@mui/material";
import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

export const ComponentOverridesButton = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme, setLightTheme, setDarkTheme } =
    context;
  return (
    <TreeItem itemId="buttons" label="Button">
      <p variant="h6" style={{ margin: "0px" }}>{`Button Size`}</p>
      <Select
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiButton.defaultProps.size
            : darkTheme.components.MuiButton.defaultProps.size
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiButton: {
                  ...lightTheme.components.MuiButton,
                  defaultProps: {
                    ...lightTheme.components.MuiButton.defaultProps,
                    size: e.target.value,
                  },
                },
              },
            });
          } else {
            setDarkTheme({
              ...darkTheme,
              components: {
                ...darkTheme.components,
                MuiButton: {
                  ...darkTheme.components.MuiButton,
                  defaultProps: {
                    ...darkTheme.components.MuiButton.defaultProps,
                    size: e.target.value,
                  },
                },
              },
            });
          }
        }}
        sx={{ mb: 2 }}
      >
        <MenuItem value={"small"}>Small</MenuItem>
        <MenuItem value={"medium"}>Medium</MenuItem>
        <MenuItem value={"large"}>Large</MenuItem>
      </Select>
      <p variant="h6" style={{ margin: "0px" }}>{`Button Variant`}</p>
      <Select
        sx={{ mb: 2 }}
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiButton.defaultProps.variant
            : darkTheme.components.MuiButton.defaultProps.variant
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiButton: {
                  ...lightTheme.components.MuiButton,
                  defaultProps: {
                    ...lightTheme.components.MuiButton.defaultProps,
                    variant: e.target.value,
                  },
                },
              },
            });
          } else {
            setDarkTheme({
              ...darkTheme,
              components: {
                ...darkTheme.components,
                MuiButton: {
                  ...darkTheme.components.MuiButton,
                  defaultProps: {
                    ...darkTheme.components.MuiButton.defaultProps,
                    variant: e.target.value,
                  },
                },
              },
            });
          }
        }}
      >
        <MenuItem value={"text"}>Text</MenuItem>
        <MenuItem value={"outlined"}>Outlined</MenuItem>
        <MenuItem value={"contained"}>Contained</MenuItem>
      </Select>
      <p variant="h6" style={{ margin: "0px" }}>{`Button Color`}</p>
      <Select
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiButton.defaultProps.color
            : darkTheme.components.MuiButton.defaultProps.color
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiButton: {
                  ...lightTheme.components.MuiButton,
                  defaultProps: {
                    ...lightTheme.components.MuiButton.defaultProps,
                    color: e.target.value,
                  },
                },
              },
            });
          } else {
            setDarkTheme({
              ...darkTheme,
              components: {
                ...darkTheme.components,
                MuiButton: {
                  ...darkTheme.components.MuiButton,
                  defaultProps: {
                    ...darkTheme.components.MuiButton.defaultProps,
                    color: e.target.value,
                  },
                },
              },
            });
          }
        }}
      >
        <MenuItem value={"default"}>Default</MenuItem>
        <MenuItem value={"primary"}>Primary</MenuItem>
        <MenuItem value={"secondary"}>Secondary</MenuItem>
        <MenuItem value={"warning"}>Warning</MenuItem>
        <MenuItem value={"info"}>Info</MenuItem>
        <MenuItem value={"error"}>Error</MenuItem>
        <MenuItem value={"success"}>Success</MenuItem>
      </Select>
    </TreeItem>
  );
};
