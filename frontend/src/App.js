import "./App.css";
import Home from "./components/Home";
import MyBooks from "./components/MyBooks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchBooks } from "./services/api";

function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await fetchBooks();
        console.log("Books loaded");
        setBooks(data);
      } catch (err) {
        setError(err.message);
      }
    };
    loadBooks();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/myBooks" element={<MyBooks books={books} />} />
      </Routes>
      <Footer error={error} />
    </div>
  );
}

export default App;
