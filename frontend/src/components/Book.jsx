import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Book = ({ book }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{book.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{book.author}</h6>
        <p className="card-text">
          Published: {new Date(book.published).toLocaleDateString()}
        </p>
        <p className="card-text">Available: {book.available ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default Book;
