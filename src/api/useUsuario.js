import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const ROOT_URL = "http://localhost:8080";

export function useUsuario() {
  const { user, setUser } = useContext(AuthContext);
  const isAuthenticated = !!user;

  useEffect(() => {
    console.log(user);
  }, [user]);

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

  async function actUsuario() {
    console.log();
    const response = await fetch(`${ROOT_URL}/api/get-user`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      Authorization: `Bearer ${user?.authToken}`,
    }).then((response) => response.json());

    if (!response.ok) {
      alert("Usuario no autorizado.");
      return;
    }
    setUser(response.user);
  }

  async function refreshUsuario() {
    const response = await fetch(`${ROOT_URL}/api/get-user`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      Authorization: `Bearer ${user?.authToken}`,
    }).then((response) => response.json());

    if (!response._id) {
      return;
    }

    setUser(response.user);
  }

  return {
    usuario: user ?? {},
    isAuthenticated,
    setUsuario: setUser,
    getUsuario,
    actUsuario,
    refreshUsuario,
  };
}
