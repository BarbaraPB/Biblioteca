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
import { grey } from "@mui/material/colors";
import { useBook } from "../../api/useBook";

const formatter = new Intl.NumberFormat("es-CL", {
  currency: "CLP",
  style: "currency",
});

const fecha = new Date();

export default function Historial() {
  const {recordBooks} = useBook();
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    setBooks(await recordBooks());
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Box sx={{ backgroundColor: grey[200], padding: 4 }}>
      {/* seccion salas y saldos */}
      <Grid>
        {/* tarjeta de libros recientes */}
        <Grid item xs={12} sx={{ paddingBottom: 4 }}>
          <Card sx={{ padding: 2 }}>
            {/* titulo */}
            <Typography
              variant="h6"
              fontWeight="bold"
              color="#2196f3"
              gutterBottom
            >
              Historial Libros
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
                      <Typography fontWeight="bold">Título</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Autor</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Estado</Typography>
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
                      <TableCell align="right">{book.bookId.status.toUpperCase()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        {/* tarjeta de salas de estudio recientes */}
        {/* <Grid>
          <Card sx={{ padding: 2, height: 290 }}>
            {/* titulo */}
        {/* <Typography
              variant="h6"
              fontWeight="bold"
              color="#2196f3"
              gutterBottom
            >
              Historial Salas de Estudio
            </Typography> */}
        {/* tabla */}
        {/* <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography fontWeight="bold">Sala</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Dia</Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography fontWeight="bold">Bloque</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {books.map((row) => (
                    <TableRow
                      key={books.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {books.name}
                      </TableCell>
                      <TableCell align="right">{books.calories}</TableCell>
                      <TableCell align="right">{books.fat}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card> */}
        {/* </Grid> */}
      </Grid>
    </Box>
  );
}
