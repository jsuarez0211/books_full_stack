import React from "react";
import Book from "./Book";

const MyBooks = ({ books }) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-3">
              <Book book={book} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBooks;
