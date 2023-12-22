import { useState, useEffect } from "react";
import "./Play.css";
import Game from "../Components/Game";
import ChooseAd from "../Components/ChooseAd";
import adventures from "../assets/stories-examples/examples";

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAdventureClick = (index) => {
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
        <Game seed={selectedAdventure} />
      )}
    </div>
  );
}

export default Play;
