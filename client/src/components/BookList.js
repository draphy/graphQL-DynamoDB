import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../query/book";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BookDetails from "./BookDetails";

function BookList() {
  const [books, setBooks] = useState([]);
  const [selectId, setSelectId] = useState(null);

  const { loading, error, data } = useQuery(getBooksQuery);

  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
    if (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [data, error]);

  return (
    <div>
      <ul id="book-list">
        {loading
          ? "Loading..."
          : books.map(({ Id, name }) => (
              <li key={Id} onClick={() => setSelectId(Id)}>
                {name}
              </li>
            ))}
      </ul>
      <BookDetails id={selectId} />
    </div>
  );
}

export default BookList;
