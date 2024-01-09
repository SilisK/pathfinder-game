import { useState, useEffect } from "react";
import "./Play.css";
import Gameplay from "../Components/Gameplay";
import ChooseAd from "../Components/ChooseAd";
import adventures from "../assets/stories-examples/examples";
import modal_icon from "../Image/choose.png";

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState();

  useEffect(() => {
    // Trigger the modal to open after mounting the component
    if (!JSON.parse(localStorage.getItem("how-to-play-initialized"))) {
      setShowModal(true);
    }
    // waves();
  }, []);

  const handleCloseModal = () => {
    localStorage.setItem("how-to-play-initialized", "true");
    setShowModal(false);
    // navigate('/'); // Uncomment to navigate back to home when modal is closed
  };

  const handleAdventureClick = (index) => {
    console.log(43);
    setSelectedAdventure(adventures[index]);

    if (adventures[index].sound){
      const audio = new Audio(adventures[index].sound)
      audio.play()
    }
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
          setShowModal={setShowModal}
        />
      ) : (
        <Gameplay gameInfo={{ ...selectedAdventure, maxChoices: 5 }} />
      )}

      <div
        className={`modal-backdrop backdrop-filter backdrop-blur ${
          showModal ? "modal-visible" : "modal-hidden"
        }`}
      >
        <div className="modal-content ">
          <h3 className="text-white text-7xl mb-5 text-center uppercase tracking-wider">
            How to Play
          </h3>
          <div className="modal-icon"></div>
          {/* content */}
          <button
            onClick={handleCloseModal}
            className="btn-gradient tracking-wider text-4xl rounded my-5 w-full"
          >
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Play;
