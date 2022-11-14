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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
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
          <Card sx={{ padding: 2 }}>
            {/* titulo */}
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#2196f3"
              gutterBottom
            >
              Libros recientes
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
                    <TableCell>
                      <Typography fontWeight="bold">Recepción</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Entrega</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Título</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Estado</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Saldo pendiente</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* boton ver mas */}
            <Button variant="text" sx={{ marginTop: 2 }}>
              <Typography fontSize="12px" color="#2196f3">
                Ver más
              </Typography>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
