import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonAppBar from "./components/buttonAppBar";

import { Login } from "./pages/login";
import ReservasLibros from "./pages/reservaLibros";
import Resumen from "./pages/resumen";

function App() {
  return (
    <BrowserRouter>
      <ButtonAppBar />
      <Routes>
        <Route path="/resumen" element={<Resumen />} />
        <Route path="/reservas-libros" element={<ReservasLibros />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
