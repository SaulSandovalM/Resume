import React from "react";
import { Toolbar, Container, Box } from "@mui/material";
import Nav from "./components/Nav";
import { Router } from "./routes/Router";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <Box sx={{ background: "#0e1117" }}>
      <BrowserRouter>
        <Nav />
        <Toolbar />
        <Box sx={{ minHeight: "82.7vh" }}>
          <Container>
            <Router />
          </Container>
        </Box>
        <Container>
          <Footer />
        </Container>
      </BrowserRouter>
    </Box>
  );
}
