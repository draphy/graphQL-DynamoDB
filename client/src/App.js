import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAuthor from "./components/AddAuthor";

function App() {
  return (
    <div id="main">
      <header className="footer">
        &copy; David Raphi {new Date().getFullYear()}
      </header>
      <ToastContainer />
      <h1>My Reading List</h1>
      <BookList />
      <div className="formReal">
        {" "}
        <AddBook />
        <AddAuthor />
      </div>
    </div>
  );
}

export default App;
