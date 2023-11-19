import { Link } from "react-router-dom";


function Home() {
  return (
    <div className="text-white max-w-7xl h-screen m-auto flex flex-col items-center justify-center ">
  
      <h1 className="text-primary text-7xl tracking-wider text-center font-bold mb-4">DYNAMIC <br></br>STORY TELLING</h1>
      <p className="text-lg tracking-widest mb-16">Experience the future of gaming.</p>
      
      <div className="grid grid-cols-3 gap-11 mb-10">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="story-seed"></div>
          </div>
          <p className="uppercase text-sm">Story Seed</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="ai-processing"></div>
          </div>
          <p className="uppercase text-sm">Ai Processing</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="user-choice"></div>
          </div>
          <p className="uppercase text-sm">User Choice</p>
        </div>
      </div>

      <div className="flex justify-center gap-8">

      <Link to="/login"><button className="bg-primary text-white hover:bg-blue-700 rounded transition-colors uppercase font-semibold py-3 px-14 rounded">Login</button></Link>
        <Link to="/play"><button className="bg-primary text-white hover:bg-blue-700 uppercase font-semibold py-3 px-8 rounded">Play as Guest</button></Link>
      </div>

    </div>
  );
}

export default Home;
