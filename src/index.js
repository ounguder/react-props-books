import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./booklist";
import Book from "./Book";
import Search from "./search";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Shelf() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedBooks = books.filter(function (book) {
    return book.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1 className="myHeader">My Book List</h1>
      <Search onSearch={searchHandler} />
      <section className="bookList">
        {searchedBooks.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </div>
  );
}
root.render(
  <React.StrictMode>
    <Shelf />
  </React.StrictMode>
);
