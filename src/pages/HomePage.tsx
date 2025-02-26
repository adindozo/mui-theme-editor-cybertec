import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { ThemeContext } from "../App";
import { useContext } from "react";
const texts = [
  "This is the first paper's text.",
  "Here is some content for the second paper.",
  "And this is what appears on the third paper.",
];
export default function HomePage() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme } = context;

  return (
    <ThemeProvider
      theme={
        themeSwitch === "dark"
          ? createTheme(darkTheme)
          : createTheme(lightTheme)
      }
    >
      <CssBaseline />
      {/* HEADER */}
      <Header />
      <Container>
        {/* HERO SECTION */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "1000px",
            textAlign: "center",
            py: 8,
            bgcolor: "background.default",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" gutterBottom>
            Reliable PostgreSQL Consulting
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Cybertec provides world-class database consulting, performance
            optimization, and custom solutions to help your business thrive.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Box>
        <Typography component="div">
          <Box sx={{ fontWeight: "light", m: 1 }}>Light Font Weight</Box>
          <Box sx={{ fontWeight: "regular", m: 1 }}>Regular Font Weight</Box>
          <Box sx={{ fontWeight: "medium", m: 1 }}>Medium Font Weight</Box>
          <Box sx={{ fontWeight: 500, m: 1 }}>500 Font Weight</Box>
          <Box sx={{ fontWeight: "bold", m: 1 }}>Bold Font Weight</Box>
        </Typography>
        {/* FEATURED SERVICES */}
        <Container sx={{ py: 6 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                title: "Database Optimization",
                desc: "Improve your PostgreSQL performance with expert tuning.",
              },
              {
                title: "High Availability",
                desc: "Ensure maximum uptime and reliability for your databases.",
              },
              {
                title: "Migration Services",
                desc: "Seamlessly migrate your databases with zero downtime.",
              },
              {
                title: "Cloud Solutions",
                desc: "Optimize and scale your PostgreSQL infrastructure in the cloud.",
              },
            ].map((service) => (
              <Grid size={6} key={service.title}>
                <Card sx={{ textAlign: "center", p: 2 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* CLIENT LOGOS */}
        <Box sx={{ textAlign: "center", py: 6, bgcolor: "background.paper" }}>
          <Typography variant="h2" gutterBottom>
            Trusted by Leading Companies
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {[
              "https://www.cybertec-postgresql.com/wp-content/uploads/2017/11/migrator-logo.svg",
              "https://www.cybertec-postgresql.com/wp-content/uploads/2024/01/Das_Land_Steiermark_customer_logo.png",
              "https://www.cybertec-postgresql.com/wp-content/uploads/2024/01/BEWOTEC_customer_logo.png",
              "https://www.cybertec-postgresql.com/wp-content/uploads/2024/01/skidata_customer_logo.png",
              "https://www.cybertec-postgresql.com/wp-content/uploads/2017/11/scalefield_Logo_dark.svg",
            ].map((logo, index) => (
              <Grid key={index}>
                <Box
                  component="img"
                  src={logo}
                  sx={{ width: "250px", maxWidth: "100%", height: "auto" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ padding: 2 }}>
          <Typography variant="h1" gutterBottom>
            h1 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur venenatis felis at nunc malesuada, a tincidunt lectus
            tincidunt.
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur venenatis felis at nunc malesuada, a tincidunt lectus
            tincidunt. Nam ornare, ligula non faucibus lobortis, sapien arcu
            interdum felis, ac fermentum purus magna et nunc.
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur venenatis felis at nunc malesuada, a tincidunt lectus
            tincidunt. Nam ornare, ligula non faucibus lobortis, sapien arcu
            interdum felis, ac fermentum purus magna et nunc.
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            gap={3}
            flexWrap="wrap"
            m={9}
          >
            {texts.slice(0, 3).map((text, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  minHeight: 150,
                  width: 200,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6">Paper {index + 1}</Typography>
                <Typography variant="body1" sx={{ mt: 1 }}>
                  {text}
                </Typography>
              </Paper>
            ))}
          </Box>

          <Typography variant="body1" gutterBottom>
            body1 text Sed tempus mi eget eros convallis, ac fermentum metus
            fringilla. Donec cursus augue non dui tristique laoreet. Integer
            fermentum dui ut nisi efficitur, vel venenatis lorem vestibulum.
            Suspendisse potenti. Ut sollicitudin pharetra sem. Phasellus at
            felis gravida, cursus sem ac, congue felis. Etiam auctor, libero in
            tempor vulputate, nunc tortor sollicitudin nisi, nec ullamcorper
            felis lorem id nisi. Integer efficitur urna et nisl mollis, at
            scelerisque orci convallis. Cras interdum, orci nec dignissim
            placerat, sapien ante dictum purus, et volutpat metus arcu a augue.
            Integer sollicitudin ex non risus luctus, vitae cursus enim varius.
          </Typography>
        </Box>
        {/* <FixedBottomNavigation /> */}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
