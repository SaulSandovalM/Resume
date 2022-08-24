import React from "react";
import { Divider, Grid, Typography, Box, Stack, Chip } from "@mui/material";

export default function Experience() {
  return (
    <Grid container spacing={2} sx={{ pt: 10 }} alignItems="stretch">
      <Grid item xs={12} md={6} lg={6}>
        <Typography variant="h3" color="white">
          Experiencia
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
      <Grid item xs={12} md={6} lg={6}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Fixter
        </Typography>
        <Typography color="#8B949E" mt={1}>
          Empresa de Desarrollo
        </Typography>
        <Stack direction="row" spacing={1} mt={1}>
          <Chip label="React" color="primary" />
          <Chip label="Vue" color="primary" />
          <Chip label="Firebase" color="primary" />
          <Chip label="Linux" color="primary" />
          <Chip label="Unity" color="primary" />
          <Chip label="Java" color="primary" />
        </Stack>
        <Typography color="#8B949E" sx={{ fontSize: 14 }} mt={1}>
          Pachuca de Soto, Hidalgo, Agosto 2016 - Enero 2018
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Typography color="#8B949E" mt={1}>
          Diseñar y desarrollar estructuras de datos analíticos y transacciones.
          Desarrollo de aplicaciones móviles en Java, Swift y React Native. Uso
          de Linux para la configuración de servidores. Modificar el software
          existente para corrección de errores. Codificación de sitios web con
          Angular, React, Django, Html, Css. Implementar sistemas de gestión y
          almacenamiento. Identificar nuevas tecnologías para incrementar el
          valor del producto. Realizar conferencias para universidades y
          colegios sobre
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} mt={2}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Freelancer
        </Typography>
        <Stack direction="row" spacing={1} mt={1}>
          <Chip label="React" color="primary" />
          <Chip label="Linux" color="primary" />
          <Chip label="Unity" color="primary" />
        </Stack>
        <Typography color="#8B949E" sx={{ fontSize: 14 }} mt={1}>
          Pachuca de Soto, Hidalgo, Enero 2018 - Marzo 2020
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} mt={2}>
        <Typography color="#8B949E" mt={1}>
          Imparticion de cursos y conferencias a diferentes escuelas del estado
          de hidalgo.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} mt={2}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Procuraduria General de Justicia del Estado de Hidalgo
        </Typography>
        <Typography color="#8B949E" mt={1}>
          Dependencia de Gobierno
        </Typography>
        <Stack direction="row" spacing={1} mt={1}>
          <Chip label="React" color="primary" />
          <Chip label="Vue" color="primary" />
          <Chip label="SQL" color="primary" />
        </Stack>
        <Typography color="#8B949E" sx={{ fontSize: 14 }} mt={1}>
          Pachuca de Soto, Hidalgo, Marzo 2020 - Febrero 2022
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} mt={2}>
        <Typography color="#8B949E" mt={1}>
          Desarrollo de sistemas internos. Corrección de errores de código.
          Mantenimiento y soporte técnico. Configuracion de servidores.
          Implementacion de un sistema de carpetas de investigación.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} mt={2}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Wellbe
        </Typography>
        <Typography color="#8B949E" mt={1}>
          Startup
        </Typography>
        <Stack direction="row" spacing={1} mt={1}>
          <Chip label="React" color="primary" />
          <Chip label="React Native" color="primary" />
        </Stack>
        <Typography color="#8B949E" sx={{ fontSize: 14 }} mt={1}>
          Merida, Yucatan, Febrero 2022
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={6} mt={2}>
        <Typography color="#8B949E" mt={1}>
          Desarrollo con React, React Native, Firebase, UX.
        </Typography>
      </Grid>
    </Grid>
  );
}
