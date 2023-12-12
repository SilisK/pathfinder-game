function Game({ adventure }) {
  return (
    <div className="text-white mx-auto flex flex-col justify-center h-screen px-36 z-40">
      {/* Card image and content */}
      <div className="flex flex-col md:flex-row ">
        <div className="w-1/2 h-fit bg-primary flex items-center justify-center mx-6">
            <span className="text-2xl font-bold">IMAGE</span>
        </div>
        <div className="w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-6">{adventure.title}</h1>
          <p className="leading-loose mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod ullam? Non, quos excepturi! Aperiam aliquam officia voluptas enim non numquam debitis aut ducimus magni ut, ullam praesentium, consequuntur tenetur.
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quod ullam? Non, quos excepturi! Aperiam aliquam officia voluptas enim non numquam debitis aut ducimus magni ut, ullam praesentium, consequuntur tenetur.
          </p>
        </div>
      </div>

      {/* Card buttons */}
      <div className="flex justify-between mt-10">
        <button className="bg-primary text-white uppercase text-lg font-bold py-5 px-24 mx-6 rounded">Choice A</button>
        <button className="bg-primary text-white uppercase text-lg font-bold py-5 px-24 mx-6 rounded">Choice B</button>
        <button className="bg-primary text-white uppercase text-lg font-bold py-5 px-24 mx-6 rounded">Choice C</button>
      </div>
    </div>
  );
}

export default Game;
