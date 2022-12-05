import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { Component } from "react";
import { useUsuario } from "../../api/useUsuario";
import Usuario from "../../img/usuario.png";

export default function Perfil() {
  const { usuario } = useUsuario();
  const name = usuario.firstName + " " + usuario.surname;

  return (
    <Box sx={{ height: "100%", backgroundColor: grey[200], padding: 8 }}>
      {/* titulo */}
      <Grid justifyItems="center" sx={{ marginBottom: 4 }}>
        <Typography
          display="flex"
          justifyContent="center"
          variant="h4"
          fontWeight="bold"
          color="#2196f3"
          gutterBottom
          maxWidth="100vw"
        >
          Perfil
        </Typography>
      </Grid>
      {/* tarjeta datos estudiante */}
      <Grid
        justifyItems="center"
        container
        direction="row"
        sx={{ marginTop: 4 }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "row",
            marginX: 15,
            height: 400,
            width: "100vw",
          }}
        >
          {/* lado izquierdo (foto) */}
          <Grid
            item
            xs={5}
            sx={{
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <Avatar
              sx={{
                variant: "rounded",
                height: 150,
                width: 150,
              }}
              src={Usuario}
            />
          </Grid>
          {/* lado derecho (info) */}
          <Grid
            item
            xs={7}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* titulos */}
            <Grid sx={{ paddingLeft: 4, width: 150 }}>
              <h4>Nombre</h4>
              <h4>Rut</h4>
              <h4>Carrera</h4>
              <h4>Correo</h4>
            </Grid>
            {/* info */}
            <Grid>
              <h4>{name}</h4>
              <h4>{usuario.rut}</h4>
              <h4>{usuario.career}</h4>
              <h4>{usuario.email}</h4>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Box>
  );
}
