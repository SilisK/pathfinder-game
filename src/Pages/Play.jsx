import "./Play.css";

import { useState, useEffect } from "react";
import Gameplay from "../Components/Gameplay";
import ChooseAd from "../Components/ChooseAd";
import adventures from "../assets/stories-examples/examples";

//Audio Icon imported from backgroundSound
import audioIcon from "../assets/backgroundMusic/better-sound-logo.svg";
import muteIcon from "../assets/backgroundMusic/Mute_Icon.svg";

// HOW TO PLAY GRAPHIC
import howToPlayGraphic from "../Image/how-to-play-graphic.png";

function Play() {
  const [showModal, setShowModal] = useState(false);
  const [selectedAdventure, setSelectedAdventure] = useState();

  //useState for muting and for play/pause audio
  const [isMuted, setIsMuted] = useState(false);
  const [audio, setAudio] = useState(null);

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
  };

  const handleAdventureClick = (index) => {
    setSelectedAdventure(adventures[index]);
    return;
    if (adventures[index].sound) {
      //audioElement is the variable that manages the sound element from the adventures array
      const audioElement = new Audio(adventures[index].sound);
      audioElement.loop = true;
      setAudio(audioElement);
      audioElement.play();
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  //Toggle Function which play/pause the sound
  function toggleSound() {
    if (audio && isMuted) {
      audio.play();
    } else if (audio) {
      audio.pause();
    }
    setIsMuted(!isMuted);
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
      {/* {audio ? (
        <img
          className="icon"
          onClick={toggleSound}
          src={isMuted ? muteIcon : audioIcon}
        ></img>
      ) : (
        <></>
      )} */}

      <div
        className={`modal-backdrop backdrop-filter backdrop-blur ${
          showModal ? "modal-visible" : "modal-hidden"
        }`}
      >
        <div className="modal-content py-8 px-4 bg-gradient-to-b from-blue-800 sm:rounded-xl">
          <h3 className="text-3xl font-bold md:text-6xl">HOW TO PLAY</h3>
          <p className="p-4">Read the scenario text and choose one of the options below to progress through the story.</p>
          <div className="p-4">
            <img src={howToPlayGraphic} className="rounded-xl"/>
          </div>
          {/*  */}
          <button
            onClick={handleCloseModal}
            className="btn-gradient rounded w-max px-16 p-4"
          >
            GOT IT!
          </button>
        </div>
      </div>
    </div>
  );
}

export default Play;
