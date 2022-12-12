import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase";
import { Helmet } from "react-helmet";

export default function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "blog");
    const q = query(collectionRef, orderBy("created_at", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const article = [];
        snapshot.forEach((doc) => {
          article.push({
            image: doc.data().image,
            title: doc.data().title,
            description: doc.data().description,
            created_at: doc.data().created_at,
            id: doc.id,
          });
        });
        setArticles(article);
        console.log(article);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <Helmet>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4297282347356771"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Grid container spacing={2} sx={{ pt: 10 }}>
        {/* <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                background: "#0e1117",
              }}
            >
              <CardContent
                sx={{
                  p: 5,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  background: "#0e1117",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    Labore et dolore magna aliqua. Eiusmod tempor incididunt ut
                    labore et dolore magna aliqua.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#8B949E"
                    sx={{ mt: 1 }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Typography>
                </Box>
                <Box>
                  <Divider
                    sx={{ width: "100%", mt: 4, background: "#c9d1d9" }}
                  />
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Typography color="#8B949E" sx={{ ml: 1 }}>
                        Saul Sandoval
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        mt: 2,
                      }}
                    >
                      <Typography color="#8B949E">22 Nov</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Box>
            <Box sx={{ height: 360, width: "50%" }}>
              <CardMedia
                component="img"
                sx={{ width: "100%" }}
                image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
                alt="Live from space album cover"
              />
            </Box>
          </Card>
        </Grid> */}
        <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: "column", mt: 4 }}
        >
          <Typography variant="h6" color="#fff">
            Ultimas publicaciones
          </Typography>
          <Typography color="#8B949E">
            Esto es lo que hemos estado haciendo recientemente
          </Typography>
        </Grid>
        {articles.map((item, id) => (
          <Grid item xs={12} md={4} lg={4} key={id}>
            <Link href={`/articulo/${item.id}`}>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: "100%", height: 360 }}
                  image={`${item.image}`}
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    background: "#0e1117",
                  }}
                >
                  <CardContent
                    sx={{
                      p: 3,
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      background: "#0e1117",
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ color: "#fff" }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="#8B949E"
                        sx={{ mt: 1, minHeight: 50, maxHeight: 50 }}
                      >
                        {item.description.length > 70
                          ? `${item.description.substring(0, 70)}...`
                          : item.description}
                      </Typography>
                    </Box>
                    <Box>
                      <Divider
                        sx={{ width: "100%", mt: 4, background: "#c9d1d9" }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                          />
                          <Typography color="#8B949E" sx={{ ml: 1 }}>
                            Saul Sandoval
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography color="#8B949E">22 Nov</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Box>
              </Card>
            </Link>
          </Grid>
        ))}

        {/* <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: "column", mt: 4 }}
        >
          <Typography variant="h6" color="#fff">
            Casos de estudio
          </Typography>
          <Typography color="#8B949E">
            Una mirada en profundidad a nuestro trabajo.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{
              backgroundImage: `url("https://assets.maccarianagency.com/backgrounds/img2.jpg")`,
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <CardContent
              sx={{
                p: 5,
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  Labore et dolore magna aliqua. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </Typography>
                <Typography variant="subtitle1" color="#8B949E" sx={{ mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
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
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Typography color="#8B949E" sx={{ ml: 1 }}>
                      Saul Sandoval
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography color="#8B949E">22 Nov</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card
            variant="outlined"
            sx={{
              backgroundImage: `url("https://assets.maccarianagency.com/backgrounds/img2.jpg")`,
              backgroundSize: "center",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <CardContent
              sx={{
                p: 5,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Box sx={{ width: "50%" }}>
                <Typography variant="h5" sx={{ color: "#fff" }}>
                  Labore et dolore magna aliqua. Eiusmod tempor incididunt ut
                  labore et dolore magna aliqua.
                </Typography>
                <Typography variant="subtitle1" color="#8B949E" sx={{ mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
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
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Typography color="#8B949E" sx={{ ml: 1 }}>
                      Saul Sandoval
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Typography color="#8B949E">22 Nov</Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", flexDirection: "column", mt: 4 }}
        >
          <Typography variant="h6" color="#fff">
            Articulos populares
          </Typography>
          <Typography color="#8B949E">
            Esto es lo que hemos estado haciendo recientemente.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "100%", height: 360 }}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                background: "#0e1117",
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  background: "#0e1117",
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Labore et dolore magna aliqua.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#8B949E"
                    sx={{ mt: 1 }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </Typography>
                </Box>
                <Box>
                  <Divider
                    sx={{ width: "100%", mt: 4, background: "#c9d1d9" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Typography color="#8B949E" sx={{ ml: 1 }}>
                        Saul Sandoval
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography color="#8B949E">22 Nov</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: "100%", height: 360 }}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
              alt="Live from space album cover"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                background: "#0e1117",
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  background: "#0e1117",
                }}
              >
                <Box>
                  <Typography variant="h6" sx={{ color: "#fff" }}>
                    Labore et dolore magna aliqua.
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="#8B949E"
                    sx={{ mt: 1 }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </Typography>
                </Box>
                <Box>
                  <Divider
                    sx={{ width: "100%", mt: 4, background: "#c9d1d9" }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                      />
                      <Typography color="#8B949E" sx={{ ml: 1 }}>
                        Saul Sandoval
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Typography color="#8B949E">22 Nov</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Grid> */}
      </Grid>
    </Container>
  );
}
