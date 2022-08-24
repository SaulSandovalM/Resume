import React from "react";
import { Toolbar, Container, Box } from "@mui/material";
import Nav from "./components/Nav";
import { Router } from "./routes/Router";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Toolbar />
      <Box sx={{ background: "#0e1117" }}>
        <Container>
          <Router />
          <Footer />
        </Container>
      </Box>
    </BrowserRouter>
  );
}
