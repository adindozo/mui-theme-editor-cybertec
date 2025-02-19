import {
  AppBar,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

import React from "react";
import { lightTheme } from "../Themes";

export const HomePage = () => {
  console.log(lightTheme);
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Theme Editor</Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Typography variant="h2">Welcome to Your Themed Site</Typography>
          <Typography>This is a demo of Material-UI Theme Editor.</Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Feature 1</Typography>
                  <Typography>Some details about this feature.</Typography>
                </CardContent>
              </Card>
            </Grid>
            {/* More cards */}
          </Grid>
        </main>
        <footer>
          <Typography variant="body2">© 2025 Theme Editor</Typography>
        </footer>
      </Container>
    </ThemeProvider>
  );
};
