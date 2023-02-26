import React, { useEffect, useState } from "react";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery } from "../query/author";
import { addBookMutation , getBooksQuery } from "../query/book";
import { toast } from "react-toastify";

function AddBook() {
  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");

  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook, { data: dataAdd, loading: loadingAdd, error: errorAdd }] =
    useMutation(addBookMutation);
  useEffect(() => {
    if (dataAdd) {
      toast.success(`${dataAdd.addBook.name} added`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [dataAdd]);

  function displayAuthors() {
    if (loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map((author) => (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      ));
    }
  }

  function submitForm(e) {
    e.preventDefault();
    addBook({ variables: { name: bookName, genre, authorId },refetchQueries:[{query: getBooksQuery}] });
  }

  return (
    <form id="add-book" onSubmit={submitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={bookName}
          name="name"
          onChange={(e) => setBookName(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          name="genre"
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Author:</label>
        <select
          value={authorId}
          name="authorId"
          onChange={(e) => setAuthorId(e.target.value)}
        >
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button type="submit">{loadingAdd ? "Adding..." : "+"}</button>
      {errorAdd &&
        toast.error(errorAdd.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })}
      {error &&
        toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })}
    </form>
  );
}

export default AddBook;
