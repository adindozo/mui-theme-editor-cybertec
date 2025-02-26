import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { SketchPicker } from "react-color";
import { ThemeContext } from "../App";

export const Colors = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme, setLightTheme, setDarkTheme } =
    context;

  return (
    <TreeItem itemId="colors" label="Colors">
      <TreeItem itemId="primaryColor" label="Primary Color">
        <SketchPicker
          color={
            themeSwitch === "light"
              ? lightTheme.palette.primary.main
              : darkTheme.palette.primary.main
          }
          onChange={(color) => {
            if (themeSwitch === "light") {
              setLightTheme((prevTheme) => ({
                ...prevTheme,
                palette: {
                  ...prevTheme.palette, // Keep other palette properties intact
                  primary: {
                    ...prevTheme.palette.primary, // Keep other primary properties intact
                    main: color.hex, // Update only 'main'
                  },
                },
              }));
            } else {
              setDarkTheme((prevTheme) => ({
                ...prevTheme,
                palette: {
                  ...prevTheme.palette,
                  primary: {
                    ...prevTheme.palette.primary,
                    main: color.hex,
                  },
                },
              }));
            }
          }}
          disableAlpha
        />
      </TreeItem>
      <TreeItem itemId="secondaryColor" label="Secondary Color">
        <SketchPicker
          color={
            themeSwitch === "light"
              ? lightTheme.palette.secondary.main
              : darkTheme.palette.secondary.main
          }
          onChange={(color) => {
            if (themeSwitch === "light") {
              setLightTheme((prevTheme) => ({
                ...prevTheme,
                palette: {
                  ...prevTheme.palette, // Keep other palette properties intact
                  secondary: {
                    ...prevTheme.palette.secondary, // Keep other secondary properties intact
                    main: color.hex, // Update only 'main'
                  },
                },
              }));
            } else {
              setDarkTheme((prevTheme) => ({
                ...prevTheme,
                palette: {
                  ...prevTheme.palette,
                  secondary: {
                    ...prevTheme.palette.secondary,
                    main: color.hex,
                  },
                },
              }));
            }
          }}
          disableAlpha
        />
      </TreeItem>
      <TreeItem itemId="backgroundColor" label="Background Color">
        <SketchPicker
          color={
            themeSwitch === "light"
              ? lightTheme.palette.background.default
              : darkTheme.palette.background.default
          }
          onChangeComplete={(color) => {
            if (themeSwitch === "light") {
              setLightTheme((prevTheme) => ({
                ...prevTheme,
                palette: {
                  ...prevTheme.palette,
                  background: {
                    ...prevTheme.palette.background,
                    default: color.hex,
                  },
                },
              }));
            } else {
              setDarkTheme((prevTheme) => ({
                ...prevTheme,
                palette: {
                  ...prevTheme.palette,
                  background: {
                    ...prevTheme.palette.background,
                    default: color.hex,
                  },
                },
              }));
            }
          }}
          disableAlpha
        />
      </TreeItem>
      <TreeItem itemId="textColor" label="Text Color">
        <SketchPicker
          color={
            themeSwitch === "light"
              ? lightTheme.palette.text.primary
              : darkTheme.palette.text.primary
          }
          onChangeComplete={(color) => {
            if (themeSwitch === "light") {
              setLightTheme((prevTheme) => ({
                ...prevTheme,
                palette: {
                  ...prevTheme.palette,
                  text: {
                    ...prevTheme.palette.text,
                    primary: color.hex,
                  },
                },
              }));
            } else {
              setDarkTheme((prevTheme) => ({
                ...prevTheme,
                palette: {
                  ...prevTheme.palette,
                  text: {
                    ...prevTheme.palette.text,
                    primary: color.hex,
                  },
                },
              }));
            }
          }}
          disableAlpha
        />
      </TreeItem>
    </TreeItem>
  );
};
