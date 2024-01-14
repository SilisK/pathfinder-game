import { useState, useEffect } from "react";
import "./Play.css";
import Gameplay from "../Components/Gameplay";
import ChooseAd from "../Components/ChooseAd";
import adventures from "../assets/stories-examples/examples";
import modal_icon from "../Image/choose.png";

//Audio Icon imported from backgroundSound
import audioIcon from "../assets/backgroundMusic/better-sound-logo.svg"
import muteIcon from "../assets/backgroundMusic/Mute_Icon.svg"

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState();

  //useState for muting and for play/pause audio
  const [isMuted, setIsMuted] = useState(false)
  const [audio, setAudio] = useState(null)

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
      //audioElement is the variable that manages the sound element from the adventures array
      const audioElement = new Audio(adventures[index].sound)
      setAudio(audioElement)
      // audioElement.loop = true
      audioElement.play()
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  //Toggle Function which play/pause the sound
   function toggleSound() {
    if (audio && isMuted){
      audio.play()
    } else if (audio) {
      audio.pause()
    }
    setIsMuted(!isMuted)
  }

  return (
    <div className="text-white min-h-screen z-40">
      {!selectedAdventure ? (
        <ChooseAd
          adventures={adventures}
          handleAdventureClick={handleAdventureClick}
          setShowModal={setShowModal}
        />
      ) : (
        <Gameplay gameInfo={{ ...selectedAdventure, maxChoices: 3 }} />
      )}
      {/* Audio icon appearing only when the music plays */}
      {audio ? (
        <img className="icon" onClick={toggleSound} src={isMuted? muteIcon : audioIcon}></img>
      ) : (<></>)}

      <div
        className={`modal-backdrop backdrop-filter backdrop-blur ${
          showModal ? "modal-visible" : "modal-hidden"
        }`}
      >
        <div className="modal-content ">
          <h3 className="text-white text-7xl mb-5 text-center uppercase tracking-wider font-bold">
            How to Play
          </h3>
          <div className="modal-icon"></div>
          <p className="modal-text">Once you begin the game, you will have a scenario with three options presented to you. <br></br>Make a choice and the game will respond with an outcome that will change the story and provide new scenarios and new choices.</p>
          <button
            onClick={handleCloseModal}
            className="btn-gradient tracking-wider text-4xl rounded my-5 w-full p-4"
          >
            PLAY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Play;
