import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

export default function Registration() {
  const { id } = useParams();
  const [openAlert, setOpenAlert] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    name: "",
    email: "",
  });

  function handleChangeText(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  const validate = () => {
    let temp = {};
    temp.name = state.name ? "" : "Este campo es obligatorio!";
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    temp.email = regex.test(state.email) ? "" : "No es un correo valido!";
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      try {
        addDoc(collection(db, "registration"), {
          name: state.name,
          email: state.email,
          course: id,
          created_at: Date.now(),
        });
        console.log("Document written");
        setMessage("Has sido registrado!");
        setSeverity("success");
        setOpenAlert(true);
        setTimeout(() => {
          setOpenAlert(false);
        }, 5000);
        setState({
          name: "",
          email: "",
        });
      } catch (e) {
        console.error("Error adding document: ", e);
        setMessage("Ups! A ocurrido algo");
        setSeverity("error");
        setOpenAlert(true);
        setTimeout(() => {
          setOpenAlert(false);
        }, 5000);
      }
    }
  }

  return (
    <Grid container spacing={2}>
      <Box
        sx={{
          position: "absolute",
          zIndex: 2,
          left: "50%",
          marginLeft: "-100px",
          top: 30,
        }}
      >
        <Collapse in={openAlert}>
          <Alert
            variant="filled"
            severity={severity}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpenAlert(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "82vh",
        }}
      >
        <Card variant="outlined" sx={{ width: "80%" }}>
          <CardContent sx={{ background: "#0e1117" }}>
            <Typography sx={{ color: "gray" }}>Bienvenido</Typography>
            <Typography sx={{ color: "gray" }}>Listo jugador?</Typography>
            <TextField
              label="Nombre completo"
              variant="standard"
              name="name"
              value={state.name}
              onChange={handleChangeText}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{ mt: 3 }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              focused
              required
              {...(errors.name && { error: true, helperText: errors.name })}
            />
            <TextField
              label="Ingresa tu correo"
              variant="standard"
              name="email"
              value={state.email}
              onChange={handleChangeText}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              sx={{ mt: 3 }}
              InputProps={{
                style: {
                  color: "white",
                },
              }}
              focused
              required
              {...(errors.email && { error: true, helperText: errors.email })}
            />
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <Button onClick={handleSubmit} variant="contained">
                Registrarme
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
