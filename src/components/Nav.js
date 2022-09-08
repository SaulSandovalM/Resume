import React, { Fragment, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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
        {/* <ListItem disablePadding>
          <ListItemButton
            href="https://www.youtube.com/channel/UCrwAka8IMVy1G5-3vM6dFjw"
            sx={{ textDecoration: "none", textAlign: "center" }}
          >
            <ListItemText primary="Youtube" />
          </ListItemButton>
        </ListItem> */}
        <ListItem disablePadding>
          <ListItemButton
            href="https://twitter.com/SaulSandovalM"
            sx={{ textDecoration: "none", textAlign: "center" }}
          >
            <ListItemText primary="Twitter" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            href="https://github.com/SaulSandovalM"
            sx={{ textDecoration: "none", textAlign: "center" }}
          >
            <ListItemText primary="GitHub" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Fragment>
      <AppBar sx={{ background: "#161b22" }} component="nav">
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
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Saul Sandoval
          </Typography>
          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              href="https://www.youtube.com/channel/UCrwAka8IMVy1G5-3vM6dFjw"
              sx={{ color: "#fff" }}
            >
              Youtube
            </Button>
          </Box> */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              href="https://twitter.com/SaulSandovalM"
              sx={{ color: "#fff" }}
            >
              Twitter
            </Button>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              href="https://github.com/SaulSandovalM"
              sx={{ color: "#fff" }}
            >
              GitHub
            </Button>
          </Box>
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
