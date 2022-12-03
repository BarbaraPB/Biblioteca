import * as React from "react";
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

function createData(name, mon, tue, wed, thu) {
  return { name, mon, tue, wed, thu};
}

const rows = [
  createData("El Señor de Los Anillos", "J.R.R. Tolkien", "1954", "", ""),
  createData("B", "", "", "", "",),
  createData("C", "", "X", "", ""),
  createData("C2", "", "", "", ""),
  createData("D", "", "", "X", ""),
  createData("E", "", "", "X", ""),
  createData("F", "", "", "", ""),
];

const formatter = new Intl.NumberFormat("es-CL", {
  currency: "CLP",
  style: "currency",
});

const fecha = new Date();

export default function ReservasLibros() {
  return (
    <Box sx={{ backgroundColor: grey[200], padding: 4, height: "100vh" }}>
      {/* seccion salas y saldos */}
      <Grid container direction="row" spacing={4}>
        {/* tarjeta de libros recientes */}
        <Grid item xs={12}>
          <Card sx={{ padding: 4, borderLeft: 'var(--Grid-borderWidth) solid' }}>
            {/* titulo */}
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#2196f3"
              gutterBottom
            >
              Libros
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
                    <TableCell align="center" sx= {{borderRight: 'var(--Grid-borderWidth) solid' }}>
                      <Typography fontWeight="bold" sx= {{borderRight: 'var(--Grid-borderWidth) solid' }}>Título</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">Autor</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">Año</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">Ubicación</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight="bold">ISBN</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.mon}</TableCell>
                      <TableCell align="center">{row.tue}</TableCell>
                      <TableCell align="center">{row.wed}</TableCell>
                      <TableCell align="center">{row.thu}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* boton ver mas */}
            <Button variant="text" sx={{ marginTop: 2 }}>
              <Typography fontSize="12px" color="#2196f3">
                Búsqueda personalizada
              </Typography>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}