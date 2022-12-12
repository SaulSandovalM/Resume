import React, { useState } from "react";
import { Box, Button, Container, Grid, Input, Typography } from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import {
  getStorage,
  ref as ref_storage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

export default function CreatePost() {
  const [image, setImage] = useState(null);

  function uploadImage(image) {
    setImage(image);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const title = data.get("title");
    const description = data.get("description");
    const content = data.get("content");
    const storage = getStorage();
    /** @type {any} */
    const metadata = {
      contentType: "image/jpeg",
    };
    const storageRef = ref_storage(storage, `blog/` + image.name);
    const uploadTask = uploadBytesResumable(storageRef, image, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
          default:
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          try {
            addDoc(collection(db, "blog"), {
              // userImage: userImage ? userImage : "",
              // userName: userName,
              image: downloadURL,
              title: title,
              description: description,
              content: content,
              created_at: Date.now(),
            });
            console.log("Document written");
            setImage(null);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        });
      }
    );
  }

  return (
    <Container maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <Typography variant="h3" color="#fff">
              Crear Post
            </Typography>
          </Grid>
          <Grid item xs={7}>
            {image === null ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <DriveFolderUploadIcon sx={{ width: 95, height: 95 }} />
                <Button
                  variant="contained"
                  component="label"
                  size="small"
                  sx={{ textTransform: "none", mt: 1 }}
                  onChange={(e) => {
                    uploadImage(e.target.files[0]);
                  }}
                >
                  Seleccionar desde el dispositivo
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  height: 200,
                  mt: 3,
                }}
              >
                <Box
                  component="img"
                  sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                  src={URL.createObjectURL(image)}
                  alt={image}
                />
                <Button
                  variant="contained"
                  component="label"
                  size="small"
                  sx={{ textTransform: "none", mt: 1 }}
                  onChange={(e) => {
                    uploadImage(e.target.files[0]);
                  }}
                >
                  Seleccionar desde el dispositivo
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} md={7} lg={7} sx={{ mt: 2 }}>
            <Typography fontSize={14} color="gray">
              Titulo
            </Typography>
            <Input
              sx={{
                border: "1px solid gray",
                background: "#000",
                pl: "10px",
                color: "#fff",
                fontSize: 14,
                borderRadius: 2,
              }}
              fullWidth
              name="title"
            />
          </Grid>
          <Grid item xs={12} md={7} lg={7}>
            <Typography fontSize={14} color="gray">
              Descripcion
            </Typography>
            <Input
              sx={{
                border: "1px solid gray",
                background: "#000",
                pl: "10px",
                color: "#fff",
                fontSize: 14,
                borderRadius: 2,
              }}
              fullWidth
              name="description"
            />
          </Grid>
          <Grid item xs={12} md={7} lg={7}>
            <Typography fontSize={14} color="gray">
              Contenido
            </Typography>
            <Input
              sx={{
                border: "1px solid gray",
                background: "#000",
                pl: "10px",
                color: "#fff",
                fontSize: 14,
                borderRadius: 2,
              }}
              fullWidth
              multiline
              rows={20}
              name="content"
            />
          </Grid>
          <Grid item xs={7}>
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: "none" }}
              disabled={image === null}
              type="submit"
            >
              Compartir
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";

// const Account = () => {
//   const { user, logout } = UserAuth();
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await logout();
//       navigate("/");
//       console.log("You are logged out");
//     } catch (e) {
//       console.log(e.message);
//     }
//   };

//   return (
//     <div className="max-w-[600px] mx-auto my-16 p-4">
//       <h1 className="text-2xl font-bold py-4">Account</h1>
//       <p>User Email: {user && user.email}</p>

//       <button onClick={handleLogout} className="border px-6 py-2 my-4">
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Account;
