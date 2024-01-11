const API_URL = "https://pathfinder-game-api.onrender.com";

/**
 * A story node is a portion of the overall story generated from ChatGPT.
 */
export default async function storyNode(m_messages, setMessages) {
  let m_error;

  // Generates a valid JSON object in this format:
  // {
  //    plot: "",
  //    choices: [ "", "", "" ],
  //    consumables: [ "", "", "" ],
  //    imagePrompt: ""
  // }

  const textRequest = await fetch(API_URL + "/response", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(m_messages),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      m_error = true;
    });

  if (m_error) {
    return {
      error:
        "Something went wrong when trying to generate text for the story. Please try again.",
    };
  }

  let m_currentMessage = JSON.parse(textRequest.content);

  // Updating the context for ChatGPT
  setMessages([...m_messages, textRequest]);

  const node = { ...m_currentMessage };

  return node;
}

export async function generateImage(prompt, images, setImages) {
  // Generates a valid JSON object in this format:
  // {
  //   content: "https://example.com/image.png";
  // }
  let m_error;
  const imageRequest = await fetch(API_URL + "/image", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: prompt,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      m_error = true;
    });

  if (m_error) {
    return {
      error:
        "Something went wrong when trying to generate the image for the story. Please try again.",
    };
  } else {
    setImages([...images, imageRequest.content]);
  }
}
