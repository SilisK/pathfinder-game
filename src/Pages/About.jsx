function About() {
  return (
    <div className="text-white max-w-7xl m-auto h-screen flex flex-col items-center justify-center">

      <div className="w-3/5 mb-24">
        <h2 className="text-4xl mb-4 tracking-wider">What is <span className="text-blue-300">PATHFINDER</span> Exactly</h2>
        <p className="leading-relaxed text-base">
          PathFinder is a gaming web app that uses ChatGPT and Dall-E to create dynamic story-telling experiences.
          <br></br><br></br>
          Through the power of AI, we seek to solve the problem of statically programmed scenarios in games.
          Every decision the player makes can change the trajectory of the story.
        </p>
      </div>

      <div className="">
        <h2 className="text-3xl text-center tracking-wider mb-8">MEET THE TEAM</h2>
        <div className="flex justify-center gap-12">

          <div className="">
            <div className="bg-blue-300 w-48 h-56 mb-2 "></div>
            <div className="text-center">
              <p className="uppercase text-base">Berlin</p>
            </div>
          </div>

          <div className="">
            <div className="bg-blue-300 w-48 h-56 mb-2"></div>
            <div className="text-center">
              <p className="uppercase text-base">Frantz</p>
            </div>
          </div>

          <div className="">
            <div className="bg-blue-300 w-48 h-56 mb-2"></div>
            <div className="text-center">
              <p className="uppercase text-base">Wai</p>
            </div>
          </div>

          <div className="">
            <div className="bg-blue-300 w-48 h-56 mb-2"></div>
            <div className="text-center">
              <p className="uppercase text-base">Sillis</p>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default About;
