import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GroupsIcon from "@mui/icons-material/Groups";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import SchoolIcon from "@mui/icons-material/School";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReviewsIcon from "@mui/icons-material/Reviews";
import CodeIcon from "@mui/icons-material/Code";
import GamesIcon from "@mui/icons-material/Games";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WebIcon from "@mui/icons-material/Web";
import Unity from "../assets/unity.png";
import logoReact from "../assets/react.svg.png";
import Pi from "../assets/pi.png";

export default function Courses() {
  return (
    <Grid container spacing={2}>
      <Grid container spacing={2} sx={{ height: 700 }}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3" color="orange">
            Aprende a programar
          </Typography>
          <Typography variant="h3">y adquiere mas experincia</Typography>
          <Typography fontSize={20} color="gray" mt={2}>
            Nuestra misión es difundir una educación que sea de fácil acceso y
            que todos puedan aprender.
          </Typography>
          <Typography mt={2}>
            CON LA CONFIANZA DE EMPRESAS LÍDERES EN LA INDUSTRIA
          </Typography>
          {/* <Box mt={2}>
            <img
              src={
                "https://assets.maccarianagency.com/svg/logos/airbnb-original.svg"
              }
              style={{ width: "90px" }}
              alt=""
            />
          </Box> */}
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
      <Grid item xs={12} mt={5}>
        <Typography align="center" color="orange">
          NÚMEROS
        </Typography>
        <Typography variant="h4" align="center" mt={1}>
          Nuestra clase global está abierta para todos
        </Typography>
        <Typography fontSize={20} align="center" color="gray" mt={1}>
          La mejor manera de aprender es mediante el uso de habilidades. <br />
          Es por eso que cada clase tiene un proyecto que te permite practicar y
          obtener retroalimentación.
        </Typography>
        {/* <Grid container spacing={2} mt={1}>
          <Grid item xs={6} display="flex" justifyContent="flex-end">
            <Button variant="contained" size="large">
              Instructores
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="outlined" size="large">
              Explorar
            </Button>
          </Grid>
        </Grid> */}
      </Grid>
      <Grid container spacing={4} mt={3}>
        <Grid item xs={3}>
          <Card variant="outlined" sx={{ padding: 3 }}>
            <YouTubeIcon sx={{ fontSize: 40, color: "#1976d2" }} />
            <Typography variant="h4" mt={1} sx={{ color: "#1976d2" }}>
              2
            </Typography>
            <Typography variant="h6" mt={1}>
              Cursos online
            </Typography>
            <Typography color="gray" mt={1}>
              Elija entre nuestros cursos en línea.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined" sx={{ padding: 3 }}>
            <GroupsIcon sx={{ fontSize: 40, color: "#1976d2" }} />
            <Typography variant="h4" mt={1} sx={{ color: "#1976d2" }}>
              1
            </Typography>
            <Typography variant="h6" mt={1}>
              Instructores expertos
            </Typography>
            <Typography color="gray" mt={1}>
              Instructores expertos para asegurarlos mejores cursos.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined" sx={{ padding: 3 }}>
            <SchoolIcon sx={{ fontSize: 40, color: "#1976d2" }} />
            <Typography variant="h4" mt={1} sx={{ color: "#1976d2" }}>
              21
            </Typography>
            <Typography variant="h6" mt={1}>
              Estudiantes activos
            </Typography>
            <Typography color="gray" mt={1}>
              0 estudiantes activos en todo el mundo.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined" sx={{ padding: 3 }}>
            <CloudDownloadIcon sx={{ fontSize: 40, color: "#1976d2" }} />
            <Typography variant="h4" mt={1} sx={{ color: "#1976d2" }}>
              1
            </Typography>
            <Typography variant="h6" mt={1}>
              Recursos gratuitos
            </Typography>
            <Typography color="gray" mt={1}>
              Recursos gratuitos para todos los estudiantes.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={6}>
        <Typography align="center" color="orange">
          CATEGORÍAS
        </Typography>
        <Typography variant="h4" align="center" mt={1}>
          Elige tu curso por categorías
        </Typography>
        <Typography fontSize={20} align="center" color="gray" mt={1}>
          La mejor manera de aprender es mediante el uso de habilidades. <br />
          Explore las categorías de cursos disponibles, elija su favorito y
          comience a aprender.
        </Typography>
      </Grid>
      <Grid container spacing={4} mt={3}>
        <Grid item xs={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              height: 220,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <WebIcon sx={{ fontSize: 40 }} />
            <Typography variant="h6">Front-End</Typography>
            <Typography color="gray">
              Elija miles de cursos en línea de diseño web.
            </Typography>
            <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                href="https://www.youtube.com/channel/UCUs4gkUPlStP8b3OjaSR_8w"
                variant="text"
                endIcon={<ArrowForwardIcon />}
              >
                Entrar
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              height: 220,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CodeIcon sx={{ fontSize: 40 }} />
            <Typography variant="h6">Programacion</Typography>
            <Typography color="gray">
              Elija miles de cursos en línea de sus lenguagues de programacion
              favoritos.
            </Typography>
            <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                href="https://www.youtube.com/channel/UCUs4gkUPlStP8b3OjaSR_8w"
                variant="text"
                endIcon={<ArrowForwardIcon />}
              >
                Entrar
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              height: 220,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <GamesIcon sx={{ fontSize: 40 }} />
            <Typography variant="h6">Videojuegos</Typography>
            <Typography color="gray">
              Aprenda todo sobre el desarrollo de videojuegos con Unity.
            </Typography>
            <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                href="https://www.youtube.com/channel/UCUs4gkUPlStP8b3OjaSR_8w"
                variant="text"
                endIcon={<ArrowForwardIcon />}
              >
                Entrar
              </Button>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              height: 220,
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <SmartphoneIcon sx={{ fontSize: 40 }} />
            <Typography variant="h6">Aplicaciones moviles</Typography>
            <Typography color="gray">
              Desarrolle apps increibles de diferentes lenguagues.
            </Typography>
            <Grid item sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                href="https://www.youtube.com/channel/UCUs4gkUPlStP8b3OjaSR_8w"
                variant="text"
                endIcon={<ArrowForwardIcon />}
              >
                Entrar
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={5}>
        <Divider />
      </Grid>
      <Grid item xs={12} mt={5}>
        <Typography align="center" color="orange">
          CURSOS POPULARES
        </Typography>
        <Typography variant="h4" align="center" mt={1}>
          Explore nuestros cursos populares
        </Typography>
        <Typography fontSize={20} align="center" color="gray" mt={1}>
          Estos son nuestros cursos populares que quizás desee aprender de su
          tutor.
        </Typography>
        <Grid container spacing={2} mt={1}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button
              href="https://www.youtube.com/channel/UCUs4gkUPlStP8b3OjaSR_8w"
              variant="contained"
              size="large"
            >
              Ver
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={4} mt={5}>
        <Grid item xs={4}>
          <Card sx={{ height: 550 }}>
            <CardMedia
              component="img"
              height="270"
              image={Unity}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Unity
              </Typography>
              <Box sx={{ display: "flex", mt: 3 }}>
                <SchoolIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 1,
                  }}
                >
                  Saul Sandoval
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup max={4}>
                    <Avatar alt="Leonardo" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Emanuel" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Nico" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Angel" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Jaime" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                </Stack>
                <Rating name="read-only" value={5} readOnly />
              </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                href="https://www.youtube.com/watch?v=sKrvjTf-ypg&list=PLNLe_RsoVawUEx__oAiOYCH4tNoeNAUoE"
                size="small"
              >
                Mas
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 550 }}>
            <CardMedia
              component="img"
              height="270"
              image={logoReact}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                React
              </Typography>
              <Box sx={{ display: "flex", mt: 3 }}>
                <SchoolIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 1,
                  }}
                >
                  Saul Sandoval
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup max={4}>
                    <Avatar alt="Roberto" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Juan" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Carlos" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Jackeline" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Abraham" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                </Stack>
                <Rating name="read-only" value={5} readOnly />
              </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                href="https://www.youtube.com/watch?v=sKrvjTf-ypg&list=PLNLe_RsoVawUEx__oAiOYCH4tNoeNAUoE"
                size="small"
              >
                Mas
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ height: 550 }}>
            <CardMedia
              component="img"
              height="270"
              image={Pi}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sonic Pi
              </Typography>
              <Box sx={{ display: "flex", mt: 3 }}>
                <SchoolIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    marginLeft: 1,
                  }}
                >
                  Saul Sandoval
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup max={4}>
                    <Avatar alt="Alfredo" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Luis" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Ricardo" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="David" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Carmen" src="/static/images/avatar/5.jpg" />
                  </AvatarGroup>
                </Stack>
                <Rating name="read-only" value={5} readOnly />
              </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                href="https://www.youtube.com/watch?v=sKrvjTf-ypg&list=PLNLe_RsoVawUEx__oAiOYCH4tNoeNAUoE"
                size="small"
              >
                Mas
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid item xs={12} mt={5}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Rating defaultValue={5} readOnly />
        </Box>
        <Typography variant="h4" align="center" mt={1}>
          Calificado 5 de 5 estrellas por nuestros alumnos!
        </Typography>
        <Typography fontSize={20} align="center" color="gray" mt={1}>
          Personas de todo el mundo han tenido experiencias fantásticas con
          HackSite. <br /> Esto es lo que tienen que decir.
        </Typography>
      </Grid>
      <Grid container spacing={4} mt={3}>
        <Grid item xs={4}>
          <Card variant="outlined" sx={{ padding: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ReviewsIcon sx={{ fontSize: 40, mt: 1, mb: 2 }} />
            </Box>
            <Typography color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Clara Bertoletti</Typography>
                <Typography variant="subtitle2" color="gray">
                  amante de mui
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined" sx={{ padding: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ReviewsIcon sx={{ fontSize: 40, mt: 1, mb: 2 }} />
            </Box>
            <Typography color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Clara Bertoletti</Typography>
                <Typography variant="subtitle2" color="gray">
                  amante de mui
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined" sx={{ padding: 3 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ReviewsIcon sx={{ fontSize: 40, mt: 1, mb: 2 }} />
            </Box>
            <Typography color="gray">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              <Box sx={{ marginLeft: 2 }}>
                <Typography>Clara Bertoletti</Typography>
                <Typography variant="subtitle2" color="gray">
                  amante de mui
                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
