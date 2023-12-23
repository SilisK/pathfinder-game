import { useState } from "react";
import { systemInstructions } from "../assets/prompt-engineering/prompt-controller";
import storyNode from "./api";
import "./Gameplay.css";

export default function Gameplay({ gameInfo }) {
  const [initialized, setInitialized] = useState(false);
  const [choicesCount, setChoicesCount] = useState(0);
  const [messages, setMessages] = useState([
    { role: "system", content: `${systemInstructions.prompt}` },
  ]);
  const [story, setStory] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({});

  // We set the generating state to tell JSX that we are loading a response
  const [generating, setGenerating] = useState(false);
  async function generate(m_messages) {
    setGenerating(true);

    // Returns a story node with an image url
    const node = await storyNode(m_messages, setMessages);

    console.log(node);

    // This is so players can view their entire story and go back to previous choices
    // It might be a good idea to monetize this feature
    setStory([...story, node]);

    // This is either a story node or an error
    setCurrentMessage(node);

    // Only needed for the very first request
    if (!initialized && !node.error) setInitialized(true);

    setGenerating(false);
  }

  return (
    <div className="grid place-items-center min-h-screen py-16 bg-black bg-opacity-40 backdrop-filter backdrop-blur">
      <div className="w-full grid place-items-center gameplay-container">
        {/* Progress Bar */}
        <div className="progress-bar flex gap-5 my-10 w-11/12">
          {/* Text Percentage */}
          <p className="w-min">
            {((choicesCount / gameInfo.maxChoices) * 100).toFixed()}%
          </p>
          {/* Fill Percentage */}
          <div className="w-full">
            <div
              style={{
                width: `${(choicesCount / gameInfo.maxChoices) * 100}%`,
              }}
              className="progress-fill bg-white"
            ></div>
            {/* Story Nodes, allows players to revisit previous choices */}
            <div></div>
          </div>
        </div>

        {/* Seed Info and Image */}
        <div
          className="gameplay-screen px-5 rounded w-full flex flex-col items-center justify-end pb-10 gap-11"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${
              currentMessage.image_url
                ? currentMessage.image_url
                : gameInfo.image
            })`,
          }}
        >
          {!initialized ? (
            <div className="rounded bg-gray-700 bg-opacity-10 backdrop-filter backdrop-blur px-10">
              <h1 className="text-5xl font-bold my-5 text-center">
                {gameInfo.title}
              </h1>
            </div>
          ) : null}

          {/* Current Scenario in the story */}
          <div className="bg-gray-700 bg-opacity-10 backdrop-filter backdrop-blur p-3">
            {currentMessage.plot
              ? currentMessage.plot
              : currentMessage.end
              ? "Conclusion: " + currentMessage.end
              : gameInfo.plot}
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
              {currentMessage.choices.map((choice, index) => (
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
              ))}
            </div>
          ) : generating ? (
            // Loading icon (while generating a new response)
            <div className="flex items-center gap-5 backdrop-filter backdrop-blur py-5 px-10">
              {" "}
              <img
                src="https://www.svgrepo.com/show/274034/loading.svg"
                className="loading w-10"
              />
              <b>Generating...</b>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
