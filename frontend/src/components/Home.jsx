import React from "react";
import Book from "./Book";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = ({ books }) => {
  return (
    <div className="container">
      <div className="row">
        {books.map((book) => (
          <div className="col-md-3">
            <Book book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
