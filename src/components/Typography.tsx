import { Box, Button, Input, Slider, TextField } from "@mui/material";
import { TreeItem } from "@mui/x-tree-view";
import React, { useContext } from "react";
import { ThemeContext } from "../App";
import GoogleFontsList from "./GoogleFontsList";
import { Container } from "lucide-react";

export const Typography = () => {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme, setLightTheme, setDarkTheme } =
    context;
  console.log(lightTheme);
  function removeLetters(input) {
    return input.replace(/[^0-9.-]/g, "");
  }
  const convertLetterSpacingToNumber = (letterSpacing) => {
    if (typeof letterSpacing === "string" && letterSpacing.includes("em")) {
      return Math.round(parseFloat(letterSpacing) * 100);
    }
    return 0;
  };
  const handleKeyDown = (event) => {
    event.stopPropagation();
  };
  return (
    <TreeItem itemId="typography" label="Typography">
      <TreeItem itemId="fontFamily" label="Font Family">
        <Box sx={{ display: "flex", alignItems: "stretch" }}>
          <TextField
            sx={{ ml: 2 }}
            label="Google Font URL"
            variant="outlined"
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              if (themeSwitch === "light") {
                setLightTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontFamily: e.target.value,
                  },
                }));
              } else {
                setDarkTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    fontFamily: e.target.value,
                  },
                }));
              }
            }}
          />
          <Button>Add +</Button>
        </Box>
        <GoogleFontsList />
        {/*Modify font families for headings (h1–h6)*/}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: 2,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((headingLevel) => (
            <TextField
              key={headingLevel}
              label={`h${headingLevel} Font Family`}
              variant="outlined"
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                if (themeSwitch === "light") {
                  setLightTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      [`h${headingLevel}`]: {
                        ...prevTheme.typography[`h${headingLevel}`],
                        fontFamily: e.target.value,
                      },
                    },
                  }));
                } else {
                  setDarkTheme((prevTheme) => ({
                    ...prevTheme,
                    typography: {
                      ...prevTheme.typography,
                      [`h${headingLevel}`]: {
                        ...prevTheme.typography[`h${headingLevel}`],
                        fontFamily: e.target.value,
                      },
                    },
                  }));
                }
              }}
            />
          ))}
          {/*Modify font families for body*/}
          <TextField
            label="Body Text Font Family"
            variant="outlined"
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              if (themeSwitch === "light") {
                setLightTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    body1: {
                      ...prevTheme.typography.body1,
                      fontFamily: e.target.value,
                    },
                  },
                }));
              } else {
                setDarkTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    body1: {
                      ...prevTheme.typography.body1,
                      fontFamily: e.target.value,
                    },
                  },
                }));
              }
            }}
          />
        </Box>
      </TreeItem>
      <TreeItem itemId="headingSizes" label="Heading Sizes (h1-h6)">
        {/*Modify font sizes for headings (h1–h6)*/}
        <Box sx={{ ml: 2 }}>
          {[1, 2, 3, 4, 5, 6].map((headingLevel) => (
            <Box key={headingLevel}>
              <TextField
                sx={{ mt: 2 }}
                label={`h${headingLevel} Font Size in px`}
                type="number"
                value={
                  themeSwitch === "light"
                    ? removeLetters(
                        lightTheme.typography[`h${headingLevel}`].fontSize,
                      )
                    : removeLetters(
                        darkTheme.typography[`h${headingLevel}`].fontSize,
                      )
                }
                onChange={(e) => {
                  if (themeSwitch === "light") {
                    setLightTheme((prevTheme) => ({
                      ...prevTheme,
                      typography: {
                        ...prevTheme.typography,
                        [`h${headingLevel}`]: {
                          ...prevTheme.typography[`h${headingLevel}`],
                          fontSize: e.target.value + "px",
                        },
                      },
                    }));
                  } else {
                    setDarkTheme((prevTheme) => ({
                      ...prevTheme,
                      typography: {
                        ...prevTheme.typography,
                        [`h${headingLevel}`]: {
                          ...prevTheme.typography[`h${headingLevel}`],
                          fontSize: e.target.value + "px",
                        },
                      },
                    }));
                  }
                }}
                fullWidth
              />
            </Box>
          ))}
        </Box>
      </TreeItem>
      <TreeItem itemId="bodyTextSize" label="Body Text & Captions Size">
        {/*Modify font sizes for  body text and captions. */}
        <Box sx={{ ml: 2 }}>
          <TextField
            sx={{ mt: 2 }}
            label="Body Text Font Size in px"
            type="number"
            value={
              themeSwitch === "light"
                ? removeLetters(lightTheme.typography.body1.fontSize)
                : removeLetters(darkTheme.typography.body1.fontSize)
            }
            onChange={(e) => {
              if (themeSwitch === "light") {
                setLightTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    body1: {
                      ...prevTheme.typography.body1,
                      fontSize: e.target.value + "px",
                    },
                  },
                }));
              } else {
                setDarkTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    body1: {
                      ...prevTheme.typography.body1,
                      fontSize: e.target.value + "px",
                    },
                  },
                }));
              }
            }}
            fullWidth
          />
          <TextField
            sx={{ mt: 2 }}
            label="Caption Font Size in px"
            type="number"
            value={
              themeSwitch === "light"
                ? removeLetters(lightTheme.typography.caption.fontSize)
                : removeLetters(darkTheme.typography.caption.fontSize)
            }
            onChange={(e) => {
              if (themeSwitch === "light") {
                setLightTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    caption: {
                      ...prevTheme.typography.caption,
                      fontSize: e.target.value + "px",
                    },
                  },
                }));
              } else {
                setDarkTheme((prevTheme) => ({
                  ...prevTheme,
                  typography: {
                    ...prevTheme.typography,
                    caption: {
                      ...prevTheme.typography.caption,
                      fontSize: e.target.value + "px",
                    },
                  },
                }));
              }
            }}
            fullWidth
          />
        </Box>
      </TreeItem>
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
        <Box sx={{ ml: 2 }}>
          {[1, 2, 3, 4, 5, 6].map((headingLevel) => (
            <Box key={headingLevel}>
              <TextField
                sx={{ mt: 2 }}
                label={`h${headingLevel} Letter spacing in %`}
                type="number"
                inputProps={{ min: -100, max: 100 }}
                value={
                  themeSwitch === "light"
                    ? convertLetterSpacingToNumber(
                        lightTheme.typography[`h${headingLevel}`].letterSpacing,
                      )
                    : convertLetterSpacingToNumber(
                        darkTheme.typography[`h${headingLevel}`].letterSpacing,
                      )
                }
                onChange={(e) => {
                  const newLetterSpacing = e.target.value / 100 + "em";

                  if (themeSwitch === "light") {
                    setLightTheme((prevTheme) => ({
                      ...prevTheme,
                      typography: {
                        ...prevTheme.typography,
                        [`h${headingLevel}`]: {
                          ...prevTheme.typography[`h${headingLevel}`],
                          letterSpacing: newLetterSpacing,
                        },
                      },
                    }));
                  } else {
                    setDarkTheme((prevTheme) => ({
                      ...prevTheme,
                      typography: {
                        ...prevTheme.typography,
                        [`h${headingLevel}`]: {
                          ...prevTheme.typography[`h${headingLevel}`],
                          letterSpacing: newLetterSpacing,
                        },
                      },
                    }));
                  }
                }}
              />
            </Box>
          ))}
        </Box>
      </TreeItem>
    </TreeItem>
  );
};
