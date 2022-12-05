import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Log from "../../img/log.jpg";
import { blue } from "@mui/material/colors";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";
import { useUsuario } from "../../api/useUsuario";

export const Login = () => {
  const { getUsuario } = useUsuario();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function inicioSesion(event) {
    event.preventDefault();
    await getUsuario(email, password);
  }

  return (
    <Grid
      container
      direction="row"
      sx={{
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Grid xs={6}>
        <img
          src={Log}
          alt=""
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Grid>
      <Grid
        xs={6}
        sx={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingInline: 8,
        }}
      >
        <Avatar sx={{ bgcolor: blue[500], height: 56, width: 56 }}>
          <Lock />
        </Avatar>
        <Typography variant="h5" sx={{ marginTop: 2, marginBottom: 4 }}>
          Ingreso a biblioteca
        </Typography>
        <TextField
          label="Correo electrónico"
          type="email"
          variant="outlined"
          required
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "100%",
          }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: "100%",
            marginTop: 2,
          }}
        />
        <Button
          onClick={inicioSesion}
          variant="contained"
          sx={{ width: "100%", marginTop: 4 }}
        >
          Ingresar
        </Button>
      </Grid>
    </Grid>
  );
};
