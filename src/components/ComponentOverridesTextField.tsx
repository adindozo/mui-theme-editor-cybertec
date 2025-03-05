import { Input, MenuItem, Select } from "@mui/material";
import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { ThemeContext } from "../App";

export const ComponentOverridesTextField = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme, setLightTheme, setDarkTheme } =
    context;
  return (
    <TreeItem itemId="textField" label="Text Field">
      <p variant="h6" style={{ margin: "0px" }}>
        Variant
      </p>
      <Select
        sx={{ mb: 2 }}
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiTextField.defaultProps.variant
            : darkTheme.components.MuiTextField.defaultProps.variant
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiTextField: {
                  ...lightTheme.components.MuiTextField,
                  defaultProps: {
                    ...lightTheme.components.MuiTextField.defaultProps,
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
                MuiTextField: {
                  ...darkTheme.components.MuiTextField,
                  defaultProps: {
                    ...darkTheme.components.MuiTextField.defaultProps,
                    variant: e.target.value,
                  },
                },
              },
            });
          }
        }}
      >
        <MenuItem value={"outlined"}>Outlined</MenuItem>
        <MenuItem value={"filled"}>Filled</MenuItem>
        <MenuItem value={"standard"}>Standard</MenuItem>
      </Select>

      <p variant="h6" style={{ margin: "0px" }}>
        Error
      </p>
      <Select
        sx={{ mb: 2 }}
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiTextField.defaultProps.error
            : darkTheme.components.MuiTextField.defaultProps.error
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiTextField: {
                  ...lightTheme.components.MuiTextField,
                  defaultProps: {
                    ...lightTheme.components.MuiTextField.defaultProps,
                    error: e.target.value === "true",
                  },
                },
              },
            });
          } else {
            setDarkTheme({
              ...darkTheme,
              components: {
                ...darkTheme.components,
                MuiTextField: {
                  ...darkTheme.components.MuiTextField,
                  defaultProps: {
                    ...darkTheme.components.MuiTextField.defaultProps,
                    error: e.target.value === "true",
                  },
                },
              },
            });
          }
        }}
      >
        <MenuItem value={"true"}>True</MenuItem>
        <MenuItem value={"false"}>False</MenuItem>
      </Select>
      <p variant="h6" style={{ margin: "0px" }}>
        Disabled
      </p>
      <Select
        sx={{ mb: 2 }}
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiTextField.defaultProps.disabled
            : darkTheme.components.MuiTextField.defaultProps.disabled
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiTextField: {
                  ...lightTheme.components.MuiTextField,
                  defaultProps: {
                    ...lightTheme.components.MuiTextField.defaultProps,
                    disabled: e.target.value === "true",
                  },
                },
              },
            });
          } else {
            setDarkTheme({
              ...darkTheme,
              components: {
                ...darkTheme.components,
                MuiTextField: {
                  ...darkTheme.components.MuiTextField,
                  defaultProps: {
                    ...darkTheme.components.MuiTextField.defaultProps,
                    disabled: e.target.value === "true",
                  },
                },
              },
            });
          }
        }}
      >
        <MenuItem value={"true"}>True</MenuItem>
        <MenuItem value={"false"}>False</MenuItem>
      </Select>
      <p variant="h6" style={{ margin: "0px" }}>
        Helper Text
      </p>
      <Input
        sx={{ mb: 2 }}
        type="text"
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiTextField.defaultProps.helperText
            : darkTheme.components.MuiTextField.defaultProps.helperText
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiTextField: {
                  ...lightTheme.components.MuiTextField,
                  defaultProps: {
                    ...lightTheme.components.MuiTextField.defaultProps,
                    helperText: e.target.value,
                  },
                },
              },
            });
          } else {
            setDarkTheme({
              ...darkTheme,
              components: {
                ...darkTheme.components,
                MuiTextField: {
                  ...darkTheme.components.MuiTextField,
                  defaultProps: {
                    ...darkTheme.components.MuiTextField.defaultProps,
                    helperText: e.target.value,
                  },
                },
              },
            });
          }
        }}
      />
      <p variant="h6" style={{ margin: "0px" }}>
        Label
      </p>
      <Input
        type="text"
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        value={
          themeSwitch === "light"
            ? lightTheme.components.MuiTextField.defaultProps.label
            : darkTheme.components.MuiTextField.defaultProps.label
        }
        onChange={(e) => {
          if (themeSwitch === "light") {
            setLightTheme({
              ...lightTheme,
              components: {
                ...lightTheme.components,
                MuiTextField: {
                  ...lightTheme.components.MuiTextField,
                  defaultProps: {
                    ...lightTheme.components.MuiTextField.defaultProps,
                    label: e.target.value,
                  },
                },
              },
            });
          } else {
            setDarkTheme({
              ...darkTheme,
              components: {
                ...darkTheme.components,
                MuiTextField: {
                  ...darkTheme.components.MuiTextField,
                  defaultProps: {
                    ...darkTheme.components.MuiTextField.defaultProps,
                    label: e.target.value,
                  },
                },
              },
            });
          }
        }}
      ></Input>
    </TreeItem>
  );
};
// defaultProps: {
//     variant: "outlined",
//     error: false,
//     disabled: false,
//     helperText: "",
//     label: "",
//   },
