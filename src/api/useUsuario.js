import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ROOT_URL = "http://localhost:8080";

export function useUsuario() {
  const { user, setUser } = useContext(AuthContext);
  const isAuthenticated = false;

  // obtener usuario
  async function getUsuario(email, password) {
    const response = await fetch(`${ROOT_URL}/api/user-login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    }).then((response) => response.json());

    if (!response.authToken) {
      alert("Usuario no encontrado.");
      return;
    }

    setUser(response.user);
  }

  return {
    usuario: user ?? {},
    isAuthenticated,
    setUsuario: setUser,
    getUsuario,
  };
}
