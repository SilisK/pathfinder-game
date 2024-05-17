import { useState } from "react";
import { systemInstructions } from "../assets/prompt-engineering/prompt-controller";
import storyNode, { generateImage } from "./api";
import "./Gameplay.css";
import React, { useEffect } from "react";

export default function Gameplay({ gameInfo }) {
  const [initialized, setInitialized] = useState(false);
  const [choicesCount, setChoicesCount] = useState(0);
  const [messages, setMessages] = useState([
    { role: "system", content: `${systemInstructions.prompt}` },
  ]);
  const [story, setStory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({});
  const [textShown, setTextShown] = useState(true);
  const [currentFocusedNode, setCurrentFocusedNode] = useState(0);
  const [images, setImages] = useState([]);

  // We set the generating state to tell JSX that we are loading a response
  const [generating, setGenerating] = useState(false);
  async function generate(m_messages) {
    setGenerating(true);

    var imagePrompt = "";

    for (let i = m_messages.length - 2; i < m_messages.length; i++) {
      if (i === 0) continue;
      imagePrompt += m_messages[i].content;
    }
    generateImage(imagePrompt, images, setImages, finish_callback);

    // Returns a story node with an image url
    const node = await storyNode(
      m_messages,
      setMessages,
      setStory,
      finish_callback
    );

    // Only needed for the very first request
    if (!initialized && !node.error) setInitialized(true);

    // This is so players can view their entire story and go back to previous choices
    // It might be a good idea to monetize this feature
    const updatedStory = [...story, node];
    setStory(updatedStory);

    // This is either a story node or an error
    setCurrentMessage(node);

    function finish_callback() {
      setCurrentFocusedNode(updatedStory.length - 1);
      setGenerating(false);
    }
  }

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // This useEffect hook will run every time 'choicesCount' changes
  useEffect(() => {
    const newProgressPercentage = (choicesCount / gameInfo.maxChoices) * 100;
    // Updating the CSS variable for progress bar width
    document.documentElement.style.setProperty(
      "--fill-width",
      `${newProgressPercentage}%`
    );
  }, [choicesCount, gameInfo.maxChoices]); // Dependencies array

  return (
    <div className="grid place-items-center min-h-screen py-24 bg-black bg-opacity-40 backdrop-filter backdrop-blur">
      <div className="w-full flex flex-col gap-8 place-items-center gameplay-container">
        {/* Progress Bar */}
        <div className="progress-bar grid gap-5 w-11/12 p-1">
          {/* Text Percentage */}
          <p className="w-min">
            {((choicesCount / gameInfo.maxChoices) * 100).toFixed()}%
          </p>
          {/* Fill Percentage */}
          <div
            style={{
              width: `${(choicesCount / gameInfo.maxChoices) * 100}%`,
            }}
            className="progress-fill"
          ></div>
        </div>

        {/* --Revisit previous choices-- and --Seed Info and Image--*/}
        <div className="gameplay-card w-full">
          {/* Seed Info and Image */}
          <div
            className="gameplay-screen px-5 rounded flex flex-col items-center justify-end pb-10 gap-11 w-screen md:w-full"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${
                images[currentFocusedNode]
                  ? images[currentFocusedNode]
                  : gameInfo.image
              })`,
            }}
          >
            {!initialized ? (
              <h1 className="text-4xl font-bold text-center filter drop-shadow md:text-5xl">
                {gameInfo.title}
              </h1>
            ) : null}

            {/* Current Scenario in the story */}
            <div
              className={`${
                textShown ? "backdrop-blur-sm rounded-xl" : ""
              } p-3 relative`}
            >
              {textShown ? (
                <div className="bg-black bg-opacity-50 p-2 rounded-xl text-center">
                  {currentMessage.plot
                    ? currentMessage.plot
                    : currentMessage.end
                    ? currentMessage.end
                    : gameInfo.plot}
                </div>
              ) : null}
              {/* (Toggle text) */}
              <div className="hide-text flex justify-center items-center">
                <button
                  className="my-2 text-md"
                  onClick={() => setTextShown(!textShown)}
                >
                  <img
                    src={
                      textShown
                        ? "https://www.svgrepo.com/show/474227/eye-open.svg"
                        : "https://www.svgrepo.com/show/474231/eye-close.svg"
                    }
                    className="mr-2"
                  />
                </button>
              </div>
            </div>

            {/* Initialize the story, this must be successful at least once */}
            {!initialized && !generating ? (
              <div className="grid gap-11">
                <button
                  className="btn-gradient"
                  onClick={() => {
                    // Generate the initial response to start the story
                    generate([
                      ...messages,
                      { role: "user", content: `${gameInfo.plot}` },
                    ]);
                  }}
                >
                  Begin Your Journey
                </button>
                {/*  */}
                <button
                  className="btn-gradient"
                  onClick={() => {
                    // Cancel
                    window.location.reload();
                  }}
                >
                  Go Back
                </button>
              </div>
            ) : null}

            {/* Choices */}
            {currentMessage.choices && !generating ? (
              <div className="bottom-20 flex flex-col gap-5">
                {currentFocusedNode === story.length - 1
                  ? currentMessage.choices.map((choice, index) => (
                      <div
                        key={crypto.randomUUID()}
                        className="gameplay-choice bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm p-3 rounded-xl flex gap-5 cursor-pointer"
                        onClick={() => {
                          // Update progress bar
                          let count = choicesCount + 1;
                          setChoicesCount(count);

                          // Set the messages state and generate.
                          let m_messages;
                          if (count < gameInfo.maxChoices) {
                            m_messages = [
                              ...messages,
                              { role: "user", content: choice },
                            ];
                          } else {
                            m_messages = [
                              ...messages,
                              { role: "user", content: `${choice} <end/>` },
                            ];
                          }
                          // Generate a new response to progress through the story
                          generate(m_messages);
                        }}
                      >
                        <b>{index + 1}.</b>
                        <p>{choice}</p>
                      </div>
                    ))
                  : null}
              </div>
            ) : generating ? (
              // Loading icon (while generating a new response)
              <div className="generating-container flex items-center gap-5 backdrop-filter backdrop-blur-sm py-5 px-10">
                {" "}
                <img
                  src="https://www.svgrepo.com/show/274034/loading.svg"
                  className="loading w-10"
                />
                <b className="generating-text">Generating...</b>
              </div>
            ) : null}
          </div>

          {/* Story Nodes, allows players to revisit previous choices */}
          <ul className="story-scrollview overflow-x-scroll flex text-center justify-between">
            {story.map((node, i) => (
              <li
                className={`w-full cursor-pointer bg-primary ${
                  currentFocusedNode === i
                    ? "text-primary active"
                    : "text-white"
                }
                `}
                key={crypto.randomUUID()}
                onClick={() => {
                  setCurrentFocusedNode(i);
                  setCurrentMessage(story[i]);
                }}
              >
                <b>{node.end ? "Ending" : i == 0 ? "Beginning" : i}</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
