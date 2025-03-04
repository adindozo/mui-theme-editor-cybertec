import { Box } from "@mui/material";
import { SimpleTreeView, TreeItem } from "@mui/x-tree-view";
import React from "react";
import { Colors } from "./Colors";
import { Typography } from "./Typography";
import CustomCssEditor from "./CustomCssEditor";
import { ComponentOverridesEditor } from "./ComponentOverridesEditor";

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

          <ComponentOverridesEditor />

          {/* Custom CSS */}
          <TreeItem itemId="customCSS" label="Custom CSS">
            <CustomCssEditor />
          </TreeItem>
        </SimpleTreeView>
      </Box>
    </Box>
  );
};
