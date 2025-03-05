import { MenuItem, Select, TextField } from "@mui/material";
import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

export const SpacingAndBreakpoints = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme, setLightTheme, setDarkTheme } =
    context;
  return (
    <TreeItem itemId="spacing" label="Spacing & Breakpoints">
      <TreeItem itemId="spacingScale" label="Spacing Scale in px">
        <Select
          value={
            themeSwitch === "light" ? lightTheme.spacing : darkTheme.spacing
          }
          onChange={(e) => {
            if (themeSwitch === "light") {
              setLightTheme({
                ...lightTheme,
                spacing: e.target.value,
              });
            } else {
              setDarkTheme({
                ...darkTheme,
                spacing: e.target.value,
              });
            }
          }}
          sx={{ mb: 2 }}
        >
          <MenuItem value={2}>2px</MenuItem>
          <MenuItem value={4}>4px</MenuItem>
          <MenuItem value={8}>8px</MenuItem>
          <MenuItem value={16}>16px</MenuItem>
          <MenuItem value={32}>32px</MenuItem>
          <MenuItem value={64}>64px</MenuItem>
          <MenuItem value={128}>128px</MenuItem>
        </Select>
      </TreeItem>
      <TreeItem itemId="breakpoints" label="Breakpoints (xs, sm, md, lg, xl)">
        {["xs", "sm", "md", "lg", "xl"].map((spacing) => (
          <TextField
            onKeyDown={(e) => {
              e.stopPropagation();
            }}
            sx={{ mt: 1, mb: 1 }}
            label={spacing}
            type="number"
            key={spacing}
            value={
              context[themeSwitch === "light" ? "lightTheme" : "darkTheme"]
                .breakpoints.values[spacing]
            }
            onChange={(e) => {
              const value = e.target.value;
              if (themeSwitch === "light") {
                setLightTheme({
                  ...lightTheme,
                  breakpoints: {
                    ...lightTheme.breakpoints,
                    values: {
                      ...lightTheme.breakpoints.values,
                      [spacing]: value,
                    },
                  },
                });
              } else {
                setDarkTheme({
                  ...darkTheme,
                  breakpoints: {
                    ...darkTheme.breakpoints,
                    values: {
                      ...darkTheme.breakpoints.values,
                      [spacing]: value,
                    },
                  },
                });
              }
            }}
          />
        ))}
      </TreeItem>
    </TreeItem>
  );
};
