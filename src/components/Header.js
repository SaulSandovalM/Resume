import React from "react";
import { Grid, Typography } from "@mui/material";
import Yo from "../assets/yo.jpg";

export default function Header() {
  return (
    <Grid container spacing={2} sx={{ pt: 10, pb: 10 }}>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" color="white">
          Bienvenido a mi Perfil!
        </Typography>
        <Typography fontSize={20} color="#c9d1d9" mt={2}>
          Hey!, soy Saúl, Fan de las peliculas y los videojuegos, idealista,
          hacker y el mundo es mi hogar.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          alt="Saul Sandoval M"
          src={Yo}
          style={{ width: "80%", borderRadius: 250 }}
        />
      </Grid>
    </Grid>
  );
}
