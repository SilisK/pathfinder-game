import { useState } from "react";
import { systemInstructions } from "../assets/prompt-engineering/prompt-controller";
import storyNode from "./api";

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
    // console.log(17)
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
    <div className="">
      {/* Progress Bar */}
      <div className="">
        {/* Text Percentage */}
        <p>{((choicesCount / gameInfo.maxChoices) * 100).toFixed()}%</p>
        {/* Fill Percentage */}
        <div className="">
          <div
            className=""
            style={{
              width: `${(choicesCount / gameInfo.maxChoices) * 100}%`,
            }}
          ></div>
          {/* Story Nodes, allows players to revisit previous choices */}
          <div></div>
        </div>
      </div>

      {/* Seed Info and Image */}
      <div className="flex flex-col items-center">
        <div className="">
          <h1 className="text-5xl font-bold my-5 text-center">{gameInfo.title}</h1>

          <img
            src={
              currentMessage.image_url ? currentMessage.image_url : gameInfo.image
            }
            style={{ width: "290px", height: "380px" }}
            className="m-auto"
          />
        </div>
          
        {/* Current Scenario in the story */}
        <div>
          {currentMessage.plot
            ? currentMessage.plot
            : currentMessage.end
            ? "Conclusion: " + currentMessage.end
            : gameInfo.plot}
        </div>

        {/* Initialize the story, this must be successful at least once */}
        {!initialized && !generating ? (
        <div>
          <button
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
        </div>
      ) : null}


        {/* Choices */}
        {currentMessage.choices && !generating ? (
        <div className="">
          {currentMessage.choices.map((choice, index) => (
            <div
              key={crypto.randomUUID()}
              className=""
              onClick={() => {
                // Update progress bar
                let count = choicesCount + 1;
                setChoicesCount(count);

                // Set the messages state and generate.
                let m_messages;
                if (count < gameInfo.maxChoices) {
                  m_messages = [...messages, { role: "user", content: choice }];
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
        <div className="">
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

  );
}