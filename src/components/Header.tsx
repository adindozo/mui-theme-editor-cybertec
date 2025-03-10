import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MaterialUISwitch from "./MaterialUISwitch";
import { MouseEvent, useContext, useState } from "react";
import { ThemeContext } from "../App";

export default function Header() {
  const context = useContext(ThemeContext);
  if (!context) return null;
  const { themeSwitch, setThemeSwitch, darkTheme, lightTheme } = context;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Show menu on small screens

  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AppBar
        </Typography>
        <MaterialUISwitch
          checked={themeSwitch === "dark"}
          onChange={() => {
            setThemeSwitch(themeSwitch === "dark" ? "light" : "dark");
          }}
        />

        {/* Desktop Menu (Visible on larger screens) */}
        {!isMobile ? (
          <>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Services</Button>
            <Button color="inherit">Clients</Button>
            <Button color="inherit">Contact</Button>
          </>
        ) : (
          // Mobile Menu (Burger Icon)
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              aria-controls={open ? "mobile-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "mobile-menu-button",
              }}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Services</MenuItem>
              <MenuItem>Clients</MenuItem>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
