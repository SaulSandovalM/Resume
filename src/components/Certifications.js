import React from "react";
import { Box, Card, CardMedia, Divider, Grid, Typography } from "@mui/material";
import unity from "../assets/unity.jpg";
import react from "../assets/react.png";
import android from "../assets/android.png";

export default function Certifications() {
  return (
    <Grid container spacing={2} sx={{ pt: 10 }} alignItems="stretch">
      <Grid item xs={6}>
        <Typography variant="h3" color="white">
          Certificaciones
        </Typography>
      </Grid>
      <Grid item xs={6}>
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
      <Grid item xs={6}>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image={unity}
            alt="certification"
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image={react}
            alt="certification"
          />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image={android}
            alt="certification"
          />
        </Card>
      </Grid>
    </Grid>
  );
}
