import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import { Footer } from "../components/Footer";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function HomePage() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { themeSwitch, darkTheme, lightTheme } = context;
  console.log(createTheme(darkTheme).spacing(50));

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
            // backgroundColor: "secondary.main",
          }}
        >
          <Typography variant="h1" gutterBottom>
            h1 Reliable PostgreSQL Consulting
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            h5 Cybertec provides world-class database consulting, performance
            optimization, and custom solutions to help your business thrive.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get Started
          </Button>
        </Box>

        {/* FEATURED SERVICES */}
        <Container sx={{ py: 6 }}>
          <Typography variant="h2" align="center" gutterBottom>
            Secondary color
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
                <Card
                  sx={{
                    textAlign: "center",
                    p: 2,
                    backgroundColor: "secondary.main",
                  }}
                >
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
        <Box
          sx={{
            textAlign: "center",
            py: 6,
            bgcolor: "background.paper",
            backgroundColor: "secondary.main",
          }}
        >
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
                  sx={{
                    width: "250px",
                    maxWidth: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ backgroundColor: "papayawhip", p: 2 }}>
          <Box
            sx={{
              m: 1,
              p: 1, //
              backgroundColor: "lightgreen",
            }}
          >
            Margin 1, Padding 1
          </Box>
          <Box
            sx={{
              m: 4,
              p: 4, //
              backgroundColor: "lightgreen",
            }}
          >
            Margin 4, Padding 4
          </Box>
          <Box
            sx={{
              m: 8,
              p: 8, //
              backgroundColor: "lightgreen",
            }}
          >
            Margin 8, Padding 8
          </Box>
        </Box>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h1" gutterBottom>
            h1 text Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur venenatis felis at nunc malesuada.
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur venenatis felis at nunc malesuada, a tincidunt lectus
            tincidunt.
          </Typography>
          <Typography variant="h4" gutterBottom>
            h4 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur venenatis felis at nunc malesuada, a tincidunt lectus
            tincidunt. Nam ornare, ligula non faucibus lobortis, sapien arcu
            interdum felis, ac fermentum purus magna et nunc.
          </Typography>
          <Typography variant="h5" gutterBottom>
            h5 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur venenatis felis at nunc malesuada, a tincidunt lectus
            tincidunt. Nam ornare, ligula non faucibus lobortis, sapien arcu
            interdum felis, ac fermentum purus magna et nunc. Integer vel libero
            in elit
          </Typography>
          <Typography variant="h6" gutterBottom>
            h6 text Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Curabitur venenatis felis at nunc malesuada, a tincidunt lectus
            tincidunt. Nam ornare, ligula non faucibus lobortis, sapien arcu
            interdum felis, ac fermentum purus magna et nunc. Integer vel libero
            in elit
          </Typography>

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
          <Typography variant="caption">Caption text here</Typography>
        </Box>
        <Typography component="div">
          <Box sx={{ fontWeight: "light", m: 1 }}>Light Font Weight</Box>
          <Box sx={{ fontWeight: "regular", m: 1 }}>Regular Font Weight</Box>
          <Box sx={{ fontWeight: "medium", m: 1 }}>Medium Font Weight</Box>
          <Box sx={{ fontWeight: 500, m: 1 }}>500 Font Weight</Box>
          <Box sx={{ fontWeight: "bold", m: 1 }}>Bold Font Weight</Box>
        </Typography>
        <Button>Button</Button>
        <p>
          <TextField />
        </p>
        <Button>Button</Button>
        <p>
          <TextField />
        </p>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}
