import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import { blue, grey, pink, red } from "@mui/material/colors";
import React, { Component } from "react";
import Usuario from "../../img/usuario.png";

export default class Perfil extends Component {
  render() {
    return (
      <Box sx={{ backgroundColor: grey[200], padding: 8 }}>
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
          spacing={5}
          sx={{ marginTop: 4 }}
        >
          <Card
            sx={{
              marginX: 15,
              height: 400,
              width: "100vw",
            }}
          >
            {/* lado izquierdo (foto) */}
            <Grid
              item
              justifyContent="center"
              alignItems="center"
              xs={5}
              sx={{ backgroundColor: red[200], height: "100vh" }}
            >
              <Grid>
                <Avatar minHeight={200} src={Usuario} />
              </Grid>
            </Grid>
            {/* lado derecho (info) */}
            <Grid item xs={7} sx={{ backgroundColor: blue[200] }}>
              <h1>bbbb</h1>
            </Grid>
          </Card>
        </Grid>
      </Box>
    );
  }
}
