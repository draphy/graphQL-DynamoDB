import React from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (

      <div id="main">
            <ToastContainer />
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>

  );
}

export default App;
