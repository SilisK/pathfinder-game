const API_URL = "http://localhost:3001";
// const API_URL = "https://pathfinder-game-api.onrender.com";

/**
 * A story node is a portion of the overall story generated from ChatGPT.
 */
export default async function storyNode(m_messages, setMessages, setStory, finish_callback) {
  try {
    let m_error;
    // Generates a valid JSON object in this format:
    // {
    //   content: "https://example.com/image.png";
    // }
    var imagePrompt = "";
    for(let i = m_messages.length -2; i < m_messages.length; i++){
      if(i === 0) continue;
      imagePrompt += m_messages[i].content;
    }
    
    // loading image
    let tempImageUrl = "";
    
    fetch(API_URL + "/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content:imagePrompt
      })
    })
      .then((response) => response.json())
      .then((data) => {
        
        setStory(pv => {
          pv[pv.length-1].image_url = data.content;
          const story = JSON.parse(JSON.stringify(pv));
          return story;
        });
        if(finish_callback) finish_callback();

      })
      .catch((error) => {
        console.log(error);
      });

      
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

    // const node = { ...m_currentMessage, image_url: imageRequest.content };
    const node = { ...m_currentMessage, image_url: tempImageUrl };

    return node;
  } catch (error) {
    console.log(error);
    return false;
  }
  
}
