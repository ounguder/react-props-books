import React from "react";
const Book = (props) => {
  const { title, author, url } = props;
  return (
    <article className="book">
      <img src={url} alt="" />
      <h1>{title}</h1>
      <h5>{author.toUpperCase()}</h5>
    </article>
  );
};
export default Book;
