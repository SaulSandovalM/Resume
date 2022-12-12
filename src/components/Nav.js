import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const drawerWidth = 240;

export default function Nav(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          Saul Sandoval
        </Typography>
      </Link>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            href="/blog"
            sx={{ textDecoration: "none", textAlign: "center" }}
          >
            <ListItemText primary="Blog" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Fragment>
      <AppBar sx={{ background: "#161b22", zIndex: 1 }} component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
              color: "white",
            }}
          >
            Saul Sandoval
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button href="/blog" sx={{ color: "#fff" }}>
              Blog
            </Button>
          </Box>
          {user && (
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button onClick={handleLogout}>logout</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Fragment>
  );
}
