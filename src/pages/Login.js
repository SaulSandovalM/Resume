// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Grid,
//   IconButton,
//   InputAdornment,
//   TextField,
//   Typography,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { styled } from "@mui/material/styles";

// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "#1972D2",
//   },
//   "& label": {
//     color: "#1972D2",
//   },
//   "& .MuiInput-underline:after": {
//     borderBottomColor: "#1972D2",
//   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#1972D2",
//     },
//     "&:hover fieldset": {
//       borderColor: "#1972D2",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#1972D2",
//     },
//   },
// });

// export default function Login() {
//   const navigate = useNavigate();
//   const { signIn } = UserAuth();

//   const [state, setState] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signIn(state.email, state.password);
//       navigate("/crearPost");
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };

//   const handleChange = (event) => {
//     const value = event.target.value;
//     setState({
//       ...state,
//       [event.target.name]: value,
//     });
//   };

//   return (
//     <Grid container spacing={2}>
//       <Grid
//         item
//         xs={12}
//         sx={{ display: "flex", justifyContent: "center", mt: 5 }}
//       >
//         <Box>
//           <Typography color="#fff" variant="h6" textAlign="center">
//             Iniciar sesión
//           </Typography>
//           <Card
//             variant="outlined"
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               flexDirection: "column",
//               mt: 2,
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 width: "100%",
//                 background: "#0e1117",
//               }}
//               component="form"
//               onSubmit={handleSubmit}
//             >
//               <CardContent
//                 sx={{
//                   p: 3,
//                   display: "flex",
//                   justifyContent: "space-between",
//                   flexDirection: "column",
//                   background: "#0e1117",
//                 }}
//               >
//                 <CssTextField
//                   name="email"
//                   label="Correo electrónico"
//                   value={state.email}
//                   onChange={handleChange}
//                   sx={{ input: { color: "#fff" } }}
//                 />
//                 <CssTextField
//                   name="password"
//                   label="Contrasena"
//                   value={state.password}
//                   onChange={handleChange}
//                   type={showPassword ? "text" : "password"}
//                   sx={{ input: { color: "#fff" }, mt: 3 }}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           onMouseDown={handleMouseDownPassword}
//                           edge="end"
//                         >
//                           {showPassword ? (
//                             <VisibilityOff sx={{ color: "#fff" }} />
//                           ) : (
//                             <Visibility sx={{ color: "#fff" }} />
//                           )}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//                 <Button type="submit" variant="contained" sx={{ mt: 3 }}>
//                   Entrar
//                 </Button>
//               </CardContent>
//             </Box>
//           </Card>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }
