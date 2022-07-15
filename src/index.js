import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./booklist";
import Book from "./Book";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Shelf() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}
root.render(
  <React.StrictMode>
    <Shelf />
  </React.StrictMode>
);
