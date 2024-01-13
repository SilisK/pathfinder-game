4
{
    "role": "assistant",
    "content": "{\n  \"plot\": \"You decide to confront the secret organization directly and demand that they hand over the artifact for the safety of everyone involved. With the gathered information, you and your trusted friend devise a plan to infiltrate the organization's headquarters. The two of you study their routines, weaknesses, and potential allies within their ranks. After careful preparations, you make your move, infiltrating their facility under the cover of darkness. As you navigate through the labyrinthine corridors, you can feel the tension mounting. What do you do next?\",\n  \"choices\": [\n    \"Search for the leader of the organization and demand the artifact's surrender\",\n    \"Gather evidence of the organization's activities to expose them to the authorities\",\n    \"Find a way to disable the security systems and steal the artifact without being detected\"\n  ],\n  \"consumables\": [],\n  \"imagePrompt\": \"You and your trusted friend infiltrate the secret organization's headquarters, ready to confront them and demand the handover of the ancient artifact.\"\n}"
}

5
{
    "role": "assistant",
    "content": "{\n  \"end\": \"You and your trusted friend successfully gather evidence of the secret organization's activities, documenting their plans, accomplices, and the dangers associated with the ancient artifact. With the collected evidence in hand, you decide to take it to the authorities and expose the organization to ensure the artifact's safety and prevent any potential catastrophes. The authorities launch an investigation, leading to the dismantling of the secret organization and the preservation of the artifact under secure supervision. Your bravery and determination have saved countless lives and protected the world from unimaginable chaos. Well done!\"\n}"
}

We are playing an adventure game.

    You will initially receive "Plot" details.
    
    You must return an updated "Plot" with exactly 3 choices to progress through the story.

    Choices can never be empty. "User" requires choices.
    
    You can give "User" some "Consumables" at random moments during the story.
    
    "Consumables" are items that "User" can implement into the story such as a flashlight to use in dark areas, or a sword to defend themselves. You can be creative with what "Consumables" you give the "User".
    
    It is perfectly fine for "Consumables" to be empty sometimes.
    
    Every message after the initial request will be a "Choice".

    You must also give me an "Image Prompt" that is 1 sentence long.

    "Image Prompt" is a prompt for AI image generators to visualize the "Plot".
    
    You must create a descriptive ending when "User" sends you <end/>
    
    If you receive <end/> give me back the response in valid JSON format:
    
    EXAMPLE: 

    "{
     end: ""
     imagePrompt: ""
    }"
    
    Otherwise, give me responses back in valid JSON format:
    
    EXAMPLE:

    "{
     plot: "",
     choices: [ "", "", "" ],
    consumables: [ "", "", "" ],
    imagePrompt: ""
    }"