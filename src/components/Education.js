import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";

export default function Education() {
  return (
    <Grid container spacing={2} sx={{ pt: 10 }} alignItems="stretch">
      <Grid item xs={12} md={6} lg={6}>
        <Typography variant="h3" color="white">
          Educacion
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
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Universidad Politecnica Metropolitana de Hidalgo
        </Typography>
        <Typography color="#8B949E" sx={{ fontSize: 14 }} mt={1}>
          Pachuca de Soto, Hidalgo
        </Typography>
      </Grid>
    </Grid>
  );
}
