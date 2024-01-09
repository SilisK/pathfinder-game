import great_escape_img from "../image-examples/the-great-escape-variant-2.png";
import galaxy_edge_img from "../image-examples/on-galaxys-edge-variant-4.png";
import love_life_img from "../image-examples/the-love-of-my-life-variant-2.png";
import city_of_img from "../image-examples/city-of-shadow.png";
import the_quantum_img from "../image-examples/the-quantum-heist.png";

import escape_sound from "../backgroundMusic/Prison_Break-StringsOfPrisoners-Extended.mp3"


const adventures = [
  {
    image: great_escape_img,
    title: "The Great Escape",
    plot: "You are a wrongfully convicted murderer on death row, awaiting your sentence.",
    sound: escape_sound
  },
  {
    image: galaxy_edge_img,
    title: "On Galaxy's Edge",
    plot: "You are an intergalactic space traveler who has discovered teleportation technology.",
  },
  {
    image: love_life_img,
    title: "The Love of My Life",
    plot: "You have fallen in love with the most wonderful person but there is more to them than meets the eye.",
  },
  {
    image: city_of_img,
    title: "City of Shadows",
    plot: "In a city ruled by crime, you uncover a conspiracy that threatens to destroy everything you know.",
  },
  {
    image: the_quantum_img,
    title: "The Quantum Heist",
    plot: "Assemble a team to execute a high-stakes heist involving cutting-edge quantum technology.",
  },
  
];

export default adventures;
