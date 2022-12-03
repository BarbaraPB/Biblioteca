import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonAppBar from "./components/buttonAppBar";
import Historial from "./historial";

import { Login } from "./pages/login";
import ReservasLibros from "./pages/reservaLibros";
import ReservasSalas from "./pages/reservaSalas";
import Resumen from "./pages/resumen";
import SaldosPendientes from "./saldoPendiente";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path="/saldos-pendientes" element={<SaldosPendientes />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/reservas-libros" element={<ReservasLibros />} />
        <Route path="/reservas-salas" element={<ReservasSalas />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
