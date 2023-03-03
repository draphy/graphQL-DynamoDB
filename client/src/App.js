import React, { useState } from "react";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddAuthor from "./components/AddAuthor";
import Modal from "react-modal";
Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleClose = () => {
    setModalIsOpen(false);
  };
  return (
    <div id="main">
      <header className="footer">
        &copy; David Raphi {new Date().getFullYear()}
      </header>
      <ToastContainer />
      <h1>My Reading List</h1>
      <BookList />

      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => setModalIsOpen(true)}>+</button>
        <Modal
          appElement={document.getElementById("root")}
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            content: {
              top: "18%",
              right: "-50%",
              left: "30%",
              bottom: "auto",
              transform: "translateX(0)",
              width: "100%",
              height: "60%",
              maxWidth: "600px",
              padding: "2rem",
              borderRadius: "0.5rem",
              border: "none",
              boxShadow: "0 0 2rem rgba(0, 0, 0, 0.25)",
              backgroundColor: "#fff",
              animation: `${
                modalIsOpen ? "slide-in 1s forwards" : "slide-out 1s forwards"
              }`,
            },
          }}
        >
          <span className="close" onClick={handleClose}>
            &times;
          </span>{" "}
          <AddBook setModalIsOpen={setModalIsOpen} />
          <AddAuthor setModalIsOpen={setModalIsOpen} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
