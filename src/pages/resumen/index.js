import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { useUsuario } from "../../api/useUsuario";
import { useBook } from "../../api/useBook";

const formatter = new Intl.NumberFormat("es-CL", {
  currency: "CLP",
  style: "currency",
});


export default function Resumen() {
  const navigate = useNavigate();
  const { usuario, refreshUsuario } = useUsuario();
  const { recordBooks } = useBook();
  const [books, setBooks] = useState([]);


  useEffect(() => {
    refreshUsuario();
    fetchBooks();
  }, []);

  async function fetchBooks() {
    setBooks(await recordBooks());
  }

  return (
    <Box sx={{ backgroundColor: grey[200], padding: 4, height: "100%" }}>
      {/* seccion salas y saldos */}
      <Grid container direction="row" spacing={4}>
        {/* tarjeta de salas de estudio recientes */}
        <Grid item xs={9}>
          <Card sx={{ padding: 2, height: 600 }}>
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
                      <Typography fontWeight="bold">Titulo</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Autor</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Año</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">ISBN</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {books.map((book) => (
                    <TableRow
                      key={book.title}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {book.bookId.title.toUpperCase()}
                      </TableCell>
                      <TableCell align="right">{book.bookId.author.toUpperCase()}</TableCell>
                      <TableCell align="right">{book.bookId.year}</TableCell>
                      <TableCell align="right">{book.bookId.isbn}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* boton ver mas */}
            <Button variant="text" sx={{ marginTop: 2 }}>
              <Typography
                onClick={() => navigate("/historial")}
                fontSize="12px"
                color="#2196f3"
              >
                Ver más
              </Typography>
            </Button>
          </Card>
        </Grid>
        {/* tarjeta de saldos pendientes */}
        <Grid item xs={3}>
          <Card
            sx={{
              padding: 2,
              height: 290,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Box>
              {/* titulo */}
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#2196f3"
                gutterBottom
              >
                Saldos pendientes
              </Typography>
              {/* monto saldo */}
              <Typography variant="h4" sx={{ marginTop: 4 }}>
                {formatter.format(usuario.debt)}
              </Typography>
              {/* fecha mas antigua */}
              <Typography
                variant="subtitle1"
                color={grey[500]}
                sx={{ marginTop: 2 }}
              >
              </Typography>
              <Typography variant="subtitle1" color={grey[500]}>
                Total acumulado
              </Typography>
            </Box>
            {/* boton ver detalles */}
            <Button variant="text">
              <Typography
                onClick={() => navigate("/saldos-pendientes")}
                fontSize="12px"
                color="#2196f3"
              >
                Ver detalles
              </Typography>
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
