import { useUsuario } from "./useUsuario";

const ROOT_URL = "http://localhost:8080";

export function useBook() {
  const { usuario } = useUsuario();

  async function getAllBooks() {
    const books = await fetch(`${ROOT_URL}/api/books`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    return books.filter((book) => book.status === "stock");
  }

  // async function checkBook(localId) {
  //   return fetch(`${ROOT_URL}/api/check-book/${localId}`, {
  //     method: "GET",
  //     mode: "cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${usuario?.authToken}`,
  //     },
  //   }).then((response) => response.json());
  // }

  async function reserveBook(bookId) {
    const response = await fetch(`${ROOT_URL}/api/generate-unique-book-rent`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usuario?.authToken}`,
      },
      body: JSON.stringify({ book: bookId }),
    }).then((response) => response.json());
  }

  async function recordBooks() {
    const response = await fetch(`${ROOT_URL}/api/get-user-record`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${usuario?.authToken}`,
      },
    }).then((response) => response.json());
    console.log(response);
  }

  return {
    getAllBooks,
    // checkBook,
    reserveBook,
    recordBooks,
  };
}
