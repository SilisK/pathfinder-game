function Play() {
  return (
    <div className="text-white max-w-7xl m-auto flex flex-col items-center justify-center h-screen">
  
      <h2 className="text-primary text-5xl tracking-wider text-center font-bold mb-12">Choose Your Adventure</h2>
      
      <div className="grid grid-cols-3 gap-4 w-full px-10">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="h-80 w-64 bg-blue-300 flex items-center justify-center">ADVENTURE 1 IMAGE</div>
          </div>
          <p className="uppercase text-lg mt-2">THE GREAT ESCAPE</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="h-80 w-64 bg-blue-300 flex items-center justify-center">ADVENTURE 2 IMAGE</div>
          </div>
          <p className="uppercase text-lg mt-2">ON GALAXY'S EDGE</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-2">
            <div className="h-80 w-64 bg-blue-300 flex items-center justify-center">ADVENTURE 3 IMAGE</div>
          </div>
          <p className="uppercase text-lg mt-2">THE LOVE OF MY LIFE</p>
        </div>
      </div>

    </div>
  );
}

export default Play;
