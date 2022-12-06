import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

export default function ReservasSalas() {
  async function onReserveRoom(bloque) {
    //debe recibir la sala elegida en componente anterior
  }
  return (
    <Box sx={{ backgroundColor: grey[200], padding: 4, height: "100%" }}>
      {/* seccion salas y saldos */}
      <Grid container direction="row" spacing={4}>
        {/* tarjeta de libros recientes */}
        <Grid item xs={12}>
          <Card
            sx={{ padding: 4, borderLeft: "var(--Grid-borderWidth) solid" }}
          >
            {/* titulo */}
            {/* nombre sala enviada */}
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#2196f3"
              gutterBottom
            >
              Sala B-22
            </Typography>
            {/* tabla */}
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ borderRight: "var(--Grid-borderWidth) solid" }}
                    >
                      <Typography
                        fontWeight="bold"
                        sx={{ borderRight: "var(--Grid-borderWidth) solid" }}
                      >
                        Bloque
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">Lunes</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">Martes</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">Miércoles</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">Jueves</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">Viernes</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                {/* <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <Button
                          onClick={() => onReserveRoom("A")}
                          sx={{
                            backgroundColor: grey[300],
                            color: "white",
                            "&:hover": { backgroundColor: grey[600] },
                          }}
                        >
                          A
                        </Button>
                        <Button
                          onClick={() => onReserveRoom("A")}
                          sx={{
                            backgroundColor: grey[300],
                            color: "white",
                            "&:hover": { backgroundColor: grey[600] },
                          }}
                        >
                          B
                        </Button>
                    </TableRow>
                  ))}
                </TableBody> */}
              </Table>
            </TableContainer>
            {/* boton ver mas */}
            <Button variant="text" sx={{ marginTop: 2 }}>
              <Typography fontSize="12px" color="#2196f3">
                Ver más salas
              </Typography>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
