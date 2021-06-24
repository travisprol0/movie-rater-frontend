import React, { useState } from "react";
import "../../css/MovieCard.css";
import ShowMovie from "../ShowMovie";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "40vw",
    bottom: "-5vw",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function MovieCard(props) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="box" >
      <img className="search-movie-card-poster" src={props.movie.Poster} />
      <div className="search-movie-card-text">
        <p className="movie-search-title">{props.movie.Title}</p>
        <p className="movie-search-year">{props.movie.Year}</p>
      <button onClick={openModal}>Open Modal</button>
        {/* <button onClick={openModal}>Open Modal</button> */}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

export default MovieCard;
