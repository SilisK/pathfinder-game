import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlayModal.css';
import Game from "../Components/Game";
import ChooseAd from "../Components/ChooseAd";

const adventures = [
  {
    title: "The Great Escape",
  },
  {
    title: "On Galaxy's Edge",
  },
  {
    title: "The Love of My Life",
  }
];

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState(null);

  useEffect(() => {
    // Trigger the modal to open after mounting the component
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    // navigate('/'); // Uncomment to navigate back to home when modal is closed
  };

  
  const handleAdventureClick = (adventureName) => {
    setSelectedAdventure(adventureName);
  };

  return (
    <div className="text-white max-w-7xl m-auto flex flex-col items-center justify-center h-screen">
      
      {/* Choose Your Adventure */}    
      {selectedAdventure === null && <ChooseAd adventures={adventures} handleAdventureClick={handleAdventureClick} />}
      
      {/* Selected Adventure */} 
      {selectedAdventure ? <Game adventure={selectedAdventure}/> : null}

      <div className={`modal-backdrop ${showModal ? 'modal-visible' : 'modal-hidden'}`}>
        <div className="modal-content">
          <h3 className="text-white text-7xl mb-5 text-center uppercase tracking-wider">How to Play</h3>
          <div className="modal-icon"></div>
          {/* content */}
          <button onClick={handleCloseModal} className="bg-primary text-white uppercase tracking-wider font-semibold py-5 px-56 text-4xl rounded mt-12">PLAY</button>
        </div>
      </div>

    </div>
  );
}

export default Play;
