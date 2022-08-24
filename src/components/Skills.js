import React from "react";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Skills() {
  return (
    <Grid container spacing={2} sx={{ pt: 10 }} alignItems="stretch">
      <Grid item xs={12} md={6} lg={6}>
        <Typography variant="h3" color="white">
          Habilidades
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Divider sx={{ background: "#c9d1d9", width: "100%" }} />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Especialista en móvil"
                sx={{ color: "white" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Habilidad avanzada resolviendo problemas"
                sx={{ color: "white" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Innovador" sx={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Seguridad Informática"
                sx={{ color: "white" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Buen administrador de tiempo"
                sx={{ color: "white" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
