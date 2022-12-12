import React from "react";
import { Toolbar, Container, Box } from "@mui/material";
import Nav from "./components/Nav";
import { Router } from "./routes/Router";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext";

export default function App() {
  return (
    <Box sx={{ background: "#0e1117", minHeight: "100vh" }}>
      <BrowserRouter>
        {/* <AuthContextProvider> */}
        <Nav />
        <Toolbar />
        <Router />
        <Container>
          <Footer />
        </Container>
        {/* </AuthContextProvider> */}
      </BrowserRouter>
    </Box>
  );
}
