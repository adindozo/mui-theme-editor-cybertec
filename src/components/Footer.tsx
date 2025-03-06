import { Box, Typography, Link, Grid2 as Grid } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 5,
        px: 3,
        mt: 5,
      }}
    >
      <Grid container spacing={12} justifyContent="center" mb={24}>
        <Grid>
          <Typography variant="h6">
            CYBERTEC PostgreSQL International GmbH
          </Typography>
          <Typography variant="body2">
            Römerstraße 19, 2752 Wöllersdorf, Austria
          </Typography>
          <Typography variant="body2">+43 (0) 2622 93022-0</Typography>
          <Typography variant="body2">
            office@cybertec-postgresql.com
          </Typography>
        </Grid>

        <Grid>
          <Typography variant="h6">Services</Typography>
          <Link href="#" color="inherit">
            Support
          </Link>
          <br />
          <Link href="#" color="inherit">
            CYBERTEC Partner
          </Link>
          <br />
          <Link href="#" color="inherit">
            PostgreSQL Books
          </Link>
        </Grid>

        <Grid>
          <Typography variant="h6">Company</Typography>
          <Link href="#" color="inherit">
            About Us
          </Link>
          <br />
          <Link href="#" color="inherit">
            Jobs
          </Link>
        </Grid>
      </Grid>

      <Box textAlign="center">
        <Typography variant="body2" textAlign="center" sx={{ mt: 3 }}>
          © {new Date().getFullYear()} CYBERTEC PostgreSQL International GmbH
        </Typography>
      </Box>
    </Box>
  );
};
