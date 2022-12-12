import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";

export default function Article() {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          backgroundImage: `url("https://assets.maccarianagency.com/backgrounds/img2.jpg")`,
          backgroundSize: "center",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            height: 600,
          }}
        >
          <Typography variant="h3" color="#fff">
            Titulo
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 60, height: 60, mr: 1 }}
            />
            <Box>
              <Typography variant="h6" color={"#fff"}>
                Saul Sandoval M
              </Typography>
              <Typography sx={{ color: "#ffffffcc" }}>May 19, 2021</Typography>
            </Box>
          </Box>
        </Container>
      </Grid>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography>Text</Typography>
            <Box>
              <Divider sx={{ width: "100%", mt: 4, background: "#c9d1d9" }} />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Box sx={{ ml: 1 }}>
                    <Typography color="#8B949E" sx={{ fontWeight: 600 }}>
                      Saul Sandoval
                    </Typography>
                    <Typography color="#8B949E">22 Nov</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography>Ads</Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}
