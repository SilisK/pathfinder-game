import { useState, useEffect } from "react";
import "./Play.css";
import Gameplay from "../Components/Gameplay";
import ChooseAd from "../Components/ChooseAd";
import adventures from "../assets/stories-examples/examples";

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState();

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  useEffect(() => {
    // Trigger the modal to open after mounting the component
    setShowModal(true);
    waves();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    // navigate('/'); // Uncomment to navigate back to home when modal is closed
  };


  const handleAdventureClick = (index) => {
    console.log(43)
    setSelectedAdventure(adventures[index]);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="text-white min-h-screen z-40">
      {!selectedAdventure ? (
        <ChooseAd
          adventures={adventures}
          handleAdventureClick={handleAdventureClick}
        />
      ) : (
        <Gameplay gameInfo={{ ...selectedAdventure, maxChoices: 10 }} />
      )}

      <div
        className={`modal-backdrop ${
          showModal ? "modal-visible" : "modal-hidden"
        }`}
      >
        <div className="modal-content ">
          <h3 className="text-white text-7xl mb-5 text-center uppercase tracking-wider">
            How to Play
          </h3>
          <div className="modal-icon"></div>
          <p className="modal-text">Once you begin the game, you will have a scenario with three options presented to you. <br></br>Make a choice and the game will respond with an outcome that will change the story and provide new scenarios and new choices.</p>
          {/* content */}
          <button
            onClick={handleCloseModal}
            className="bg-primary text-white uppercase tracking-wider font-semibold py-5 px-56 text-4xl rounded mt-12 btn-left"
          >
            PLAY
          </button>
        </div>
      </div>

    </div>

  );
}

export default Play;
