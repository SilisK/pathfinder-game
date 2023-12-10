import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { waves } from '/Components/waves.js?url';


function Home() {
  const [typewriterText, setTypewriterText] = useState('');
  const dataText = ["Experience the future of gaming."];
  useEffect(() => {
    let currentText = 0;
    waves();

    function typeWriter(text, i) {
      if (i < text.length) {
        setTypewriterText(text.substring(0, i + 1));
        setTimeout(() => typeWriter(text, i + 1), 100);
      } else {
        setTimeout(() => startTextAnimation(currentText + 1), 2000);
      }
    }

    function startTextAnimation(index) {
      if (index >= dataText.length) index = 0;
      currentText = index;
      typeWriter(dataText[index], 0);
    }

    startTextAnimation(currentText);
  },  []);

  
  return (
    <div className="text-white max-w-7xl h-screen m-auto flex flex-col items-center justify-center">
      
      <h1 className="text-7xl tracking-wider text-center font-bold mb-4 z-40 gradient-text">DYNAMIC <br></br>STORY TELLING</h1>
      <p className="text-lg tracking-widest mb-16 z-40">{typewriterText}</p>
      
      <div className="grid grid-cols-3 gap-11 mb-10 z-40">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="story-seed"></div>
          </div>
          <p className="uppercase text-sm">Story Seed</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="ai-processing"></div>
          </div>
          <p className="uppercase text-sm">Ai Processing</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="user-choice"></div>
          </div>
          <p className="uppercase text-sm">User Choice</p>
        </div>
      </div>
      
      <div className="flex justify-center gap-8 z-40">
        <Link to="/login" className="bg-primary text-secondary uppercase font-semibold py-3 px-14 rounded btn-left"><span>Login</span></Link>
        <Link to="/play" className="bg-primary text-secondary uppercase font-semibold py-3 px-8 rounded btn-left"><span>Play as Guest</span></Link>
      </div>

      <div className="waves"></div>
    </div>
  );
}

export default Home;


