import React, { useEffect, useState } from "react";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { addAuthorMutation, getAuthorsQuery } from "../query/author";
import { toast } from "react-toastify";

function AddAuthor() {
  const [authorName, setName] = useState("");
  const [age, setAge] = useState("");

  const [addAuthor, { data, loading, error }] = useMutation(addAuthorMutation, {
    onError: (error) => {
      console.log(error);
    },
    onCompleted: () => {
      setName("");
      setAge(0);
    },
  });

  useEffect(() => {
    if (data) {
      toast.success(`New Author ${data.addAuthor.name} added`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
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

  function submitForm(e) {
    e.preventDefault();
    addAuthor({
      variables: { name: authorName, age: parseInt(age) },
      refetchQueries: [{ query: getAuthorsQuery }],
    });
  }

  return (
    <div>
      <form id="add-author" className="formAuthor" onSubmit={submitForm}>
        <h1>Add Author</h1>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            value={authorName}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            name="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="field" style={{ height: "2.2rem" }}></div>

        <button type="submit">{loading ? "Adding..." : "+"}</button>
      </form>
    </div>
  );
}

export default AddAuthor;
