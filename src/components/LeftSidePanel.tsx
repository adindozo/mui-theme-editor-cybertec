import { Box } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import React from "react";
import { Colors } from "./Colors";
import { Typography } from "./Typography";

export const LeftSidePanel = () => {
  return (
    <Box
      sx={{
        minWidth: "400px",
        maxHeight: "calc(100vh - 64px)",
        backgroundColor: "#f0f0f0",
        color: "black",
        overflowY: "auto",
      }}
    >
      <Box>
        <SimpleTreeView>
          <Colors />
          <Typography />

          <TreeItem itemId="spacing" label="Spacing & Breakpoints">
            <TreeItem itemId="spacingScale" label="Spacing Scale" />
            <TreeItem
              itemId="breakpoints"
              label="Breakpoints (xs, sm, md, lg, xl)"
            />
          </TreeItem>

          {/* Component Overrides */}
          <TreeItem itemId="componentOverrides" label="Component Overrides">
            <TreeItem itemId="buttons" label="Buttons" />
            <TreeItem itemId="appBar" label="App Bar" />
            <TreeItem itemId="textField" label="Text Field" />
          </TreeItem>

          {/* Font Management */}
          <TreeItem itemId="fonts" label="Font Management">
            <TreeItem itemId="uploadFont" label="Upload Custom Font" />
            <TreeItem itemId="googleFonts" label="Google Fonts" />
          </TreeItem>

          {/* Custom CSS */}
          <TreeItem itemId="customCSS" label="Custom CSS">
            <TreeItem itemId="globalStyles" label="Global Styles" />
            <TreeItem itemId="cssEditor" label="CSS Editor" />
          </TreeItem>
        </SimpleTreeView>
      </Box>
    </Box>
  );
};
