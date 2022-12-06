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
import { green, grey } from "@mui/material/colors";
import { useBook } from "../../api/useBook";

export default function ReservasLibros() {
  const { getAllBooks, reserveBook } = useBook();
  const [books, setBooks] = useState([]);

  async function fetchBooks() {
    setBooks(await getAllBooks());
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  async function onReserveBook(bookId) {
    await reserveBook(bookId);
    fetchBooks();
  }

  return (
    <Box sx={{ backgroundColor: grey[200], padding: 4, height: "100vh" }}>
      {/* seccion salas y saldos */}
      <Grid container direction="row" spacing={4}>
        {/* tarjeta de libros recientes */}
        <Grid item xs={12}>
          <Card
            sx={{ padding: 4, borderLeft: "var(--Grid-borderWidth) solid" }}
          >
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
                    <TableCell
                      align="center"
                      sx={{ borderRight: "var(--Grid-borderWidth) solid" }}
                    >
                      <Typography
                        fontWeight="bold"
                        sx={{ borderRight: "var(--Grid-borderWidth) solid" }}
                      >
                        Título
                      </Typography>
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
                    <TableCell align="center">
                      <Typography fontWeight="bold">Reservar</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {books.map((row) => (
                    <TableRow
                      key={row.nombre}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="center">{row.author}</TableCell>
                      <TableCell align="center">{row.year}</TableCell>
                      <TableCell align="center">{row.localId}</TableCell>
                      <TableCell align="center">{row.isbn}</TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() => onReserveBook(row._id)}
                          sx={{
                            backgroundColor: green[300],
                            color: "white",
                            "&:hover": { backgroundColor: green[600] },
                          }}
                        >
                          Reservar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
