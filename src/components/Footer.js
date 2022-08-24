import React from "react";
import { Divider, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Grid container spacing={2} sx={{ pt: 6, pb: 6 }}>
      <Divider sx={{ width: "100%", background: "#c9d1d9" }} />
      <Grid item xs={12}>
        <Typography variant="caption" color="gray">
          © {new Date().getFullYear()} Saul Sandoval Mondragon
        </Typography>
      </Grid>
    </Grid>
  );
}
