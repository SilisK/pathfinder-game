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
  const [textShown, setTextShown] = useState(true);
  const [currentFocusedNode, setCurrentFocusedNode] = useState();

  // We set the generating state to tell JSX that we are loading a response
  const [generating, setGenerating] = useState(false);
  async function generate(m_messages) {
    // console.log(17)
    setGenerating(true);

    // Returns a story node with an image url
    const node = await storyNode(m_messages, setMessages);

    console.log(node);

    // Only needed for the very first request
    if (!initialized && !node.error) setInitialized(true);

    // This is so players can view their entire story and go back to previous choices
    // It might be a good idea to monetize this feature
    const updatedStory = [...story, node];
    setCurrentFocusedNode(updatedStory.length - 1);
    setStory(updatedStory);

    // This is either a story node or an error
    setCurrentMessage(node);

    setGenerating(false);
  }

  return (
    <div className="grid place-items-center min-h-screen py-16 bg-black bg-opacity-40 backdrop-filter backdrop-blur">
      <div className="w-full flex flex-col place-items-center gameplay-container">
        
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
              className="progress-fill"
            ></div>
          </div>
        </div>



        {/* --Revisit previous choices-- and --Seed Info and Image--*/}
        <div className="gameplay-card w-full">

          {/* Story Nodes, allows players to revisit previous choices */}
          <ul className="story-scrollview my-2 p-3 overflow-x-scroll flex flex-col ">

            {story.map((node, i) => (
              <li
                className={`w-full cursor-pointer ${
                  currentFocusedNode === i ? "text-primary" : "text-white"
                }
                `}
                key={crypto.randomUUID()}
                onClick={() => {
                  setCurrentFocusedNode(i);
                  setCurrentMessage(story[i]);
                }}
              >
              <b>{node.end ? "Ending: " : i == 0 ? "Beginning: " : i + ". "}</b>
              <span className="font-light">
                {node.plot
                  ? node.plot.substring(0, 18) + "..."
                  : node.end
                  ? node.end.substring(0, 26) + "..."
                  : null}
              </span>
              </li>
            ))}

              {/* Control panel (Toggle text, audio) */}
              <div className="hide-text flex md:p-0">
                <button
                  className="btn-gradient absolute my-2 flex items-center w-full text-md"
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
                  {textShown ? "Hide" : "Show"} Text
                </button>
              </div>
          </ul>
                    
          {/* Seed Info and Image */}
          <div
            className="gameplay-screen px-5 rounded flex flex-col items-center justify-end pb-10 gap-11 w-screen md:w-full"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${
                currentMessage.image_url
                  ? currentMessage.image_url
                  : gameInfo.image
              })`,
            }}
          >
            {!initialized ? (
              <h1 className="text-5xl font-bold my-5 text-center filter drop-shadow-md">
                {gameInfo.title}
              </h1>
            ) : null}

            {/* Current Scenario in the story */}
            <div
              className={`${
                textShown
                  ? "bg-gray-700 bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl"
                  : ""
              } p-3 relative`}
            >
              {textShown ? (
                <div>
                  {currentMessage.plot
                    ? currentMessage.plot
                    : currentMessage.end
                    ? currentMessage.end
                    : gameInfo.plot}
                </div>
              ) : null}
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
              <div className="flex items-center gap-5 backdrop-filter backdrop-blur-sm py-5 px-10">
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
    </div>
  );
}
