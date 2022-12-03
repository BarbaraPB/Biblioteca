import { Box } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonAppBar from "./components/buttonAppBar";
import Historial from "./historial";

import { Login } from "./pages/login";
import Perfil from "./pages/perfil";
import ReservasLibros from "./pages/reservaLibros";
import ReservasSalas from "./pages/reservaSalas";
import Resumen from "./pages/resumen";
import SaldosPendientes from "./pages/saldoPendiente";

const isAuthenticated = true;

function App() {
  return (
    <Box sx={{ height: "100vh", width: "100vw" }}>
      {isAuthenticated ? (
        <BrowserRouter>
          <ButtonAppBar />
          <Routes>
            <Route path="/reservas-libros" element={<ReservasLibros />} />
            <Route path="/reservas-salas" element={<ReservasSalas />} />
            <Route path="/saldos-pendientes" element={<SaldosPendientes />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/*" element={<Resumen />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </Box>
  );
}

export default App;
