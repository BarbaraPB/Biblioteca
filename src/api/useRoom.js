import { useUsuario } from "./useUsuario";

const ROOT_URL = "http://localhost:8080";

export function useRoom() {
  const { usuario } = useUsuario();

  async function getAllRooms() {
    const rooms = await fetch(`${ROOT_URL}/api/rooms`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    return rooms.filter((room) => room.status === "stock");
  }

  async function reserveRoom(roomId, block) {
    // debe recbir id room + bloque
    const response = await fetch(`${ROOT_URL}/api/execute`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usuario?.authToken}`,
      },
      body: JSON.stringify({ room: roomId }),
    }).then((response) => response.json());
    console.log(response);
  }

  return {
    getAllRooms,
    reserveRoom,
  };
}
