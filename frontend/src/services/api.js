import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchBooks = async () => {
  try {
    const response = await api.get("/books");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
