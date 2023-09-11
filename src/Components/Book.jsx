import React from "react";

function Book({ author, publish, bookName }) {
  //   let bookName = props.bookName;
  //   let author = props.author;
  //   let publishedYear = props.publish;

  //   {
  //     country: "nigeria";
  //   }

  //   console.log(props);
  //   console.log(bookName);
  //   console.log(props.author);
  //   console.log(props.publish);

  return (
    <article>
      <h1>Book Name: {bookName}</h1>
      <h2>Book Author: {author}</h2>
      <h3>Publication Year: {publish}</h3>
    </article>
  );
}

export default Book;
