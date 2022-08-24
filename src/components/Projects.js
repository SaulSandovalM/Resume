import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import unity from "../assets/unity.jpg";
import react from "../assets/react.png";
import firebase from "../assets/firebase.png";

export default function Projects() {
  return (
    <Grid container spacing={2} sx={{ pt: 10 }} alignItems="stretch">
      <Grid item xs={12} md={6} lg={6}>
        <Typography variant="h3" color="white">
          Proyectos
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
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardMedia component="img" height="250" image={unity} alt="unity" />
          <CardContent
            sx={{
              background: "#0e1117",
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" color="#c9d1d9">
              Desarrollo de videojuegos y realidad virtual usando el moto
              multiplataforma de Unity.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardMedia component="img" height="250" image={react} alt="react" />
          <CardContent
            sx={{
              background: "#0e1117",
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" color="#c9d1d9">
              Creacion de interfaces de usuario con la libreria de React, ademas
              de desarrollar aplicaciones moviles con React Native.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardMedia
            component="img"
            height="250"
            image={firebase}
            alt="green iguana"
          />
          <CardContent
            sx={{
              background: "#0e1117",
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" color="#c9d1d9">
              Desarrollo con React, React Native, Firebase, UX.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
