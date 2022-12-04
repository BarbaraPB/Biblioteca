import React from "react";
import Grid from "@mui/material/Grid";
import Log from "../../img/log.jpg";
import { blue, grey, purple } from "@mui/material/colors";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";

import {useState} from "react"


export const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = async () => {
    const response = await fetch(
      "http://localhost:8080/api/user-login",
      {
        method: 'POST',
        mode: 'cors',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
      }
    ).then((res)=> res.text())
    .then((text)=>{
      console.log(text)
    })
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
          onChange={(e)=> setEmail(e.target.value)}
          sx={{
            width: "100%",
          }}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          required
          onChange={(e)=> setPassword(e.target.value)}
          sx={{
            width: "100%",
            marginTop: 2,
          }}
        />
        <Button onClick={()=> handleSubmit()} variant="contained" sx={{ width: "100%", marginTop: 4 }}>
          Ingresar
        </Button>
      </Grid>
    </Grid>
  );
};
