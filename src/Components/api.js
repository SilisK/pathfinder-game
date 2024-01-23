// const API_URL = "https://pathfinder-game-api.onrender.com";
// const API_URL = "https://pathfinder-game-api-wai.onrender.com";
const API_URL = "http://localhost:3001";

/**
 * A story node is a portion of the overall story generated from ChatGPT.
 */
export default async function storyNode(
  m_messages,
  setMessages,
  setStory,
  finish_callback
) {
  try {
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

    // const imageRequest = await fetch(API_URL + "/image", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     content: m_currentMessage.imagePrompt
    //       ? m_currentMessage.imagePrompt
    //       : m_currentMessage.plot,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     return data;
    //   })
    //   .catch((error) => {
    //     m_error = true;
    //   });

    // if (m_error) {
    //   return {
    //     error:
    //       "Something went wrong when trying to generate the image for the story. Please try again.",
    //   };
    // }

    // Updating the context for ChatGPT
    setMessages([...m_messages, textRequest]);
    let tempImageUrl =
      "https://media2.giphy.com/media/RgzryV9nRCMHPVVXPV/giphy.gif?cid=ecf05e47vfyqaob415hcdlmao20nu7jgs9yfigy7ml21s0t5&ep=v1_gifs_search&rid=giphy.gif&ct=g";
    // const node = { ...m_currentMessage, image_url: imageRequest.content };
    const node = { ...m_currentMessage, image_url: tempImageUrl };

    return node;
  } catch (error) {
    console.log(error);
    return false;
  }
}
export async function generateImage(
  prompt,
  images,
  setImages,
  finish_callback
) {
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
  if (finish_callback) finish_callback();
}
