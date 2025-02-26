import { Box, Input, Slider, TextField } from "@mui/material";
import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

export const Typography = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme, setLightTheme, setDarkTheme } =
    context;

  return (
    <TreeItem itemId="typography" label="Typography">
      <TreeItem itemId="fontFamily" label="Font Family" />
      <TreeItem itemId="headingSizes" label="Heading Sizes (h1-h6)" />
      <TreeItem itemId="bodyTextSize" label="Body Text & Captions Size" />
      <TreeItem itemId="letterSpacing" label="Font Weight & Letter Spacing">
        <Box sx={{ ml: 2 }}>
          <Box>
            Font Weight Light
            <Input
              sx={{ ml: 4 }}
              type="number"
              value={
                themeSwitch === "light"
                  ? lightTheme.typography.fontWeightLight
                  : darkTheme.typography.fontWeightLight
              }
              size="small"
              onChange={(e) => {
                if (themeSwitch === "light") {
                  setLightTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      fontWeightLight: e.target.value,
                    },
                  }));
                } else {
                  setDarkTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      fontWeightLight: e.target.value,
                    },
                  }));
                }
              }}
              onBlur={(e) => {
                if (e.target.value < 100) {
                  e.target.value = 100;
                } else if (e.target.value > 900) {
                  e.target.value = 900;
                }
              }}
              inputProps={{
                step: 100,
                min: 100,
                max: 900,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Box>
          <Slider
            label="Font Weight Light"
            value={
              themeSwitch === "light"
                ? lightTheme.typography.fontWeightLight
                : darkTheme.typography.fontWeightLight
            }
            min={100}
            max={900}
            step={100}
            onChange={(e, newValue) => {
              if (themeSwitch === "light") {
                setLightTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontWeightLight: newValue,
                  },
                }));
              } else {
                setDarkTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontWeightLight: newValue,
                  },
                }));
              }
            }}
            valueLabelDisplay="auto"
          />
          <Box>
            Font Weight Regular
            <Input
              sx={{ ml: 2 }}
              type="number"
              value={
                themeSwitch === "light"
                  ? lightTheme.typography.fontWeightRegular
                  : darkTheme.typography.fontWeightRegular
              }
              size="small"
              onChange={(e) => {
                if (themeSwitch === "light") {
                  setLightTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      fontWeightRegular: e.target.value,
                    },
                  }));
                } else {
                  setDarkTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      fontWeightRegular: e.target.value,
                    },
                  }));
                }
              }}
              onBlur={(e) => {
                if (e.target.value < 100) {
                  e.target.value = 100;
                } else if (e.target.value > 900) {
                  e.target.value = 900;
                }
              }}
              inputProps={{
                step: 100,
                min: 100,
                max: 900,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Box>
          <Slider
            label="Font Weight Regular"
            value={
              themeSwitch === "light"
                ? lightTheme.typography.fontWeightRegular
                : darkTheme.typography.fontWeightRegular
            }
            min={100}
            max={900}
            step={100}
            onChange={(e, newValue) => {
              if (themeSwitch === "light") {
                setLightTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontWeightRegular: newValue,
                  },
                }));
              } else {
                setDarkTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontWeightRegular: newValue,
                  },
                }));
              }
            }}
            valueLabelDisplay="auto"
          ></Slider>
          <Box>
            Font Weight Medium
            <Input
              sx={{ ml: 2 }}
              type="number"
              value={
                themeSwitch === "light"
                  ? lightTheme.typography.fontWeightMedium
                  : darkTheme.typography.fontWeightMedium
              }
              size="small"
              onChange={(e) => {
                if (themeSwitch === "light") {
                  setLightTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      fontWeightMedium: e.target.value,
                    },
                  }));
                } else {
                  setDarkTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      fontWeightMedium: e.target.value,
                    },
                  }));
                }
              }}
              onBlur={(e) => {
                if (e.target.value < 100) {
                  e.target.value = 100;
                } else if (e.target.value > 900) {
                  e.target.value = 900;
                }
              }}
              inputProps={{
                step: 100,
                min: 100,
                max: 900,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Box>
          <Slider
            label="Font Weight Medium"
            value={
              themeSwitch === "light"
                ? lightTheme.typography.fontWeightMedium
                : darkTheme.typography.fontWeightMedium
            }
            min={100}
            max={900}
            step={100}
            onChange={(e, newValue) => {
              if (themeSwitch === "light") {
                setLightTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontWeightMedium: newValue,
                  },
                }));
              } else {
                setDarkTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontWeightMedium: newValue,
                  },
                }));
              }
            }}
            valueLabelDisplay="auto"
          ></Slider>

          <Box>
            Font Weight Bold
            <Input
              sx={{ ml: 2 }}
              type="number"
              value={
                themeSwitch === "light"
                  ? lightTheme.typography.fontWeightBold
                  : darkTheme.typography.fontWeightBold
              }
              size="small"
              onChange={(e) => {
                if (themeSwitch === "light") {
                  setLightTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      fontWeightBold: e.target.value,
                    },
                  }));
                } else {
                  setDarkTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      fontWeightBold: e.target.value,
                    },
                  }));
                }
              }}
              onBlur={(e) => {
                if (e.target.value < 100) {
                  e.target.value = 100;
                } else if (e.target.value > 900) {
                  e.target.value = 900;
                }
              }}
              inputProps={{
                step: 100,
                min: 100,
                max: 900,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Box>
          <Slider
            label="Font Weight Bold"
            value={
              themeSwitch === "light"
                ? lightTheme.typography.fontWeightBold
                : darkTheme.typography.fontWeightBold
            }
            min={100}
            max={900}
            step={100}
            onChange={(e, newValue) => {
              if (themeSwitch === "light") {
                setLightTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontWeightBold: newValue,
                  },
                }));
              } else {
                setDarkTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontWeightBold: newValue,
                  },
                }));
              }
            }}
            valueLabelDisplay="auto"
          ></Slider>
        </Box>
        {/* Letter Spacing TODO*/}
        {/* <TextField
          label="Letter Spacing"
          type="number"
          value={letterSpacing}
          onChange={(e) => setLetterSpacing(e.target.value + "px")}
          fullWidth
        /> */}
      </TreeItem>
    </TreeItem>
  );
};
