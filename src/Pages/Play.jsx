import { useState, useEffect } from "react";
import "./PlayModal.css";
import Game from "../Components/Game";
import ChooseAd from "../Components/ChooseAd";
import great_escape_img from "../assets/image-examples/the-great-escape-variant-2.png";
import galaxy_edge_img from "../assets/image-examples/on-galaxys-edge-variant-4.png";
import love_life_img from "../assets/image-examples/the-love-of-my-life-variant-2.png";

const adventures = [
  {
    image: great_escape_img,
    title: "The Great Escape",
    plot: "You are a wrongfully convicted murderer on death row, awaiting your sentence.",
  },
  {
    image: galaxy_edge_img,
    title: "On Galaxy's Edge",
    plot: "You are an intergalactic space traveler who has discovered teleportation technology.",
  },
  {
    image: love_life_img,
    title: "The Love of My Life",
    plot: "You have fallen in love with the most wonderful person but there is more to them than meets the eye.",
  },
];

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState();

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
    setSelectedAdventure(adventures[index]);
  };

  return (
    <div className="text-white max-w-7xl m-auto flex flex-col items-center justify-center h-screen">
      {/* Choose Your Adventure */}
      {!selectedAdventure ? (
        <ChooseAd
          adventures={adventures}
          handleAdventureClick={handleAdventureClick}
        />
      ) : null}

      {/* Selected Adventure */}
      {selectedAdventure ? <Game seed={selectedAdventure} /> : null}

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
          {/* content */}
          <button
            onClick={handleCloseModal}
            className="bg-primary text-white uppercase tracking-wider font-semibold py-5 px-56 text-4xl rounded mt-12 btn-left"
          >
            PLAY
          </button>
        </div>
      </div>

      <div className="waves"></div>
    </div>
  );
}

export default Play;
