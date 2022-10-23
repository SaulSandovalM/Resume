import React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import Yo from "../assets/yo.jpg";
import unity from "../assets/unity.jpg";
import react from "../assets/react.png";
import instagram from "../assets/instagram.jpg";
// import firebase from "../assets/firebase.png";
import android from "../assets/android.png";

export default function Home() {
  return (
    <div>
      <Grid container spacing={2} sx={{ pt: 10 }}>
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
            Hey!, soy Saúl, fan de las peliculas y los videojuegos, idealista,
            cyberpunk y el mundo es mi hogar.
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
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
          <Typography variant="h3" color="white">
            Experiencia
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
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
            Diseñar y desarrollar estructuras de datos analíticos y
            transacciones. Desarrollo de aplicaciones móviles en Java, Swift y
            React Native. Uso de Linux para la configuración de servidores.
            Modificar el software existente para corrección de errores.
            Codificación de sitios web con Angular, React, Django, Html, Css.
            Implementar sistemas de gestión y almacenamiento. Identificar nuevas
            tecnologías para incrementar el valor del producto. Realizar
            conferencias para universidades y colegios sobre tecnologia
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
            Impartición de cursos y conferencias a diferentes escuelas del
            estado de hidalgo.
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
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
          <Typography variant="h3" color="white">
            Proyectos
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
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
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {/* <Grid item xs={12} md={6} lg={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="250"
                image={unity}
                alt="unity"
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
                  Desarrollo de videojuegos y realidad virtual usando el moto
                  multiplataforma de Unity.
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  background: "#0e1117",
                }}
              >
                <IconButton href="https://github.com/SaulSandovalM/">
                  <GitHubIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton href="https://github.com/SaulSandovalM/">
                  <LanguageIcon sx={{ color: "white" }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid> */}
          <Grid item xs={12} md={6} lg={4}>
            <Card
              variant="outlined"
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="250"
                image={instagram}
                alt="react"
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
                  Creación de Instagram con funciones basicas, crear
                  publicacion, seccion de comentarios y dar me gusta a los
                  mismos.
                </Typography>
              </CardContent>
              <CardActions
                disableSpacing
                sx={{
                  background: "#0e1117",
                }}
              >
                <IconButton href="https://github.com/SaulSandovalM/Instagram_clone">
                  <GitHubIcon sx={{ color: "white" }} />
                </IconButton>
                <IconButton href="https://saulsandovalm.github.io/Instagram_clone/">
                  <LanguageIcon sx={{ color: "white" }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
          {/* <Grid item xs={12} md={6} lg={4}>
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
            <CardActions
              disableSpacing
              sx={{
                background: "#0e1117",
              }}
            >
              <IconButton href="https://github.com/SaulSandovalM/">
                <GitHubIcon sx={{ color: "white" }} />
              </IconButton>
              <IconButton href="https://github.com/SaulSandovalM/">
                <LanguageIcon sx={{ color: "white" }} />
              </IconButton>
            </CardActions>
          </Card>
        </Grid> */}
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
          <Typography variant="h3" color="white">
            Certificaciones
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
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
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={unity}
              alt="certification"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={react}
              alt="certification"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={android}
              alt="certification"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6} />
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
          <Typography variant="h3" color="white">
            Habilidades
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
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
                  primary="Especialista en frontend"
                  sx={{ color: "white" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="Desarrollo de aplicaciones moviles"
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
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
          <Typography variant="h3" color="white">
            Educacion
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sx={{ mt: 10 }}>
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
    </div>
  );
}
