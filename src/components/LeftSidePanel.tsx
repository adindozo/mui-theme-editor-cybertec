import { Box } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import React from "react";
import { Colors } from "./Colors";

export const LeftSidePanel = () => {
  return (
    <Box
      sx={{
        width: "20%",
        height: "calc(100vh-640px)",
        backgroundColor: "#f0f0f0",
        color: "black",
      }}
    >
      <Box sx={{ minHeight: 352, minWidth: 250 }}>
        <SimpleTreeView>
          <Colors />

          {/* Typography */}
          <TreeItem itemId="typography" label="Typography">
            <TreeItem itemId="fontFamily" label="Font Family" />
            <TreeItem itemId="headingSizes" label="Heading Sizes (h1-h6)" />
            <TreeItem itemId="bodyTextSize" label="Body Text Size" />
            <TreeItem itemId="letterSpacing" label="Letter Spacing" />
          </TreeItem>

          {/* Spacing & Breakpoints */}
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
