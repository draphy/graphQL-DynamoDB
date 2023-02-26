import React, { useEffect, useState } from "react";
import { getBookQuery } from "../query/book";
import { useQuery, gql, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";

function BookDetails({ id }) {
  const [book, setBook] = useState();

  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (data) {
      setBook(data.book);
    }
  }, [data]);

  return (
    <div id="book-details">
      {book ? (
        loading ? (
          "loading..."
        ) : (
          <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author:</p>
            <ul className="other-books">
              {book.author.books.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
        )
      ) : (
        <div>No book selected...</div>
      )}
      {error &&
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })}
    </div>
  );
}

export default BookDetails;
