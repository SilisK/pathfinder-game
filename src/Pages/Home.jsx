import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const steps = [
  {
    title: "Story Seed",
    stepClassName: "story-seed",
  },
  {
    title: "AI Processing",
    stepClassName: "ai-processing",
  },
  {
    title: "User Choice",
    stepClassName: "user-choice",
  },
];

function Home() {
  const [typewriterText, setTypewriterText] = useState("");
  const dataText = ["Experience the future of gaming..."];
  useEffect(() => {
    let currentText = 0;

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

    waves();
  }, []);

  return (
    <div className="text-white max-w-7xl min-h-screen py-24 m-auto flex flex-col items-center justify-center">
      {/* Header message */}
      <header className="flex flex-col text-center items-center w-11/12 bg-gradient-to-r from-gray-800 p-10 rounded-xl my-16">
        <h1 className="text-5xl tracking-wider font-bold mb-4 z-40 gradient-text md:text-7xl">
          DYNAMIC STORY TELLING
        </h1>
        <p className="text-lg tracking-widest">{typewriterText}</p>
      </header>
      {/* Story Seed, AI Proc... */}
      <div className="grid grid-flow-col text-center place-items-center gap-5 mb-10 z-40 md:gap-11">
        {steps.map((step, i) => (
          <div className="flex flex-col items-center" key={i}>
            <div className="mb-2">
              <div className={step.stepClassName}></div>
            </div>
            <p className="uppercase text-sm">{step.title}</p>
          </div>
        ))}
      </div>
      {/* Links (Login + Play) */}
      <div className="flex flex-col items-center justify-center gap-8 z-40 md:flex-row">
        <Link to="/login">
          <button className="btn-gradient">Login</button>
        </Link>
        <Link to="/play">
          <button className="btn-gradient">Play as guest</button>
        </Link>
      </div>
      {/* 3D Background Effect */}
      <div className="waves"></div>
    </div>
  );
}

export default Home;
