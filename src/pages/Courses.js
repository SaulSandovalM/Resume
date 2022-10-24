import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function Courses() {
  return (
    <Grid container spacing={2} sx={{ pt: 10 }}>
      <Grid item xs={12} md={6} lg={8}>
        <Typography variant="h4" gutterBottom color="white">
          Cursos
        </Typography>
        <Typography variant="h5" color="gray">
          Aprenda a usar diversas tecnologías con cursos interactivos diseñados
          para principiantes y expertos.
        </Typography>
      </Grid>
      <Hidden only={["xs", "sm"]}>
        <Grid
          item
          md={6}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SchoolIcon sx={{ fontSize: 200, color: "white" }} />
        </Grid>
      </Hidden>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography variant="h5" color="gray">
          Programación y Desarrollo
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Front End Web Developer
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardActionArea
            sx={{
              background: "#0e1117",
              flexGrow: 1,
            }}
            href="/registro/Creación_de_Páginas_web"
          >
            <CardContent>
              <Typography color="primary">Creación de Páginas Web</Typography>
              <Typography fontSize={14} sx={{ color: "gray", mt: 1 }}>
                Aprenda a crear sitios web de alta calidad y aplicaciones
                dinámicas para crear experiencias de usuario sorprendentes para
                la web.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Introducción a la Programación
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardActionArea
            sx={{
              background: "#0e1117",
              flexGrow: 1,
            }}
            href="/registro/Programación_con_Python"
          >
            <CardContent
              sx={{
                background: "#0e1117",
                flexGrow: 1,
              }}
            >
              <Typography color="primary">Programación con Python</Typography>
              <Typography fontSize={14} sx={{ color: "gray", mt: 1 }}>
                Aprende programación básica con Python, uno de los lenguajes de
                programación más versátiles y ampliamente utilizados!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          React
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardActionArea
            sx={{
              background: "#0e1117",
              flexGrow: 1,
            }}
            href="/registro/Fundamentos_de_React"
          >
            <CardContent
              sx={{
                background: "#0e1117",
                flexGrow: 1,
              }}
            >
              <Typography color="primary">Fundamentos de React</Typography>
              <Typography fontSize={14} sx={{ color: "gray", mt: 1 }}>
                Comience por aprender los fundamentos de React, que normalmente
                pueden ser un desafío debido a la complicada modularidad del
                ecosistema de React.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardActionArea
            sx={{
              background: "#0e1117",
              flexGrow: 1,
            }}
            href="/registro/React_Native"
          >
            <CardContent
              sx={{
                background: "#0e1117",
                flexGrow: 1,
              }}
            >
              <Typography color="primary">React Native</Typography>
              <Typography
                fontSize={14}
                sx={{ color: "gray", mt: 1, display: "flex" }}
              >
                Desarrolle aplicaciones de React que se ejecuten en dispositivos
                iOS y Android usando React Native.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Freelancer
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardActionArea
            sx={{
              background: "#0e1117",
              flexGrow: 1,
            }}
            href="/registro/Trabajo_Independiente"
          >
            <CardContent
              sx={{
                background: "#0e1117",
                flexGrow: 1,
              }}
            >
              <Typography color="primary">Trabajo Independiente</Typography>
              <Typography
                fontSize={14}
                sx={{ color: "gray", mt: 1, display: "flex" }}
              >
                Este curso discutirá los fundamentos del trabajo independiente
                digital al describir los beneficios y las desventajas de
                trabajar por cuenta propia, así como las principales diferencias
                entre trabajar como trabajador independiente y un rol
                tradicional.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ mt: 5 }}>
        <Typography color="primary" sx={{ fontSize: 20 }}>
          Creación de Videojuegos
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Card
          variant="outlined"
          sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <CardActionArea
            sx={{
              background: "#0e1117",
              flexGrow: 1,
            }}
            href="/registro/Fundamentos_de_Unity"
          >
            <CardContent
              sx={{
                background: "#0e1117",
                flexGrow: 1,
              }}
            >
              <Typography color="primary">Fundamentos de Unity</Typography>
              <Typography
                fontSize={14}
                sx={{ color: "gray", mt: 1, display: "flex" }}
              >
                Diseñado para cualquier persona interesada en aprender a
                codificar u obtener un rol de Unity de nivel de entrada, esta
                vía asume un conocimiento básico de Unity y no tiene requisitos
                matemáticos previos.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
