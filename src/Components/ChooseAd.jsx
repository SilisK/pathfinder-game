function ChooseAd({ handleAdventureClick, adventures, setShowModal }) {
  
  return (
    <div className="w-full min-h-screen grid place-items-center text-center py-24 gap-11">
      <div className="flex gap-2 items-center text-center px-5">
        <img
          src="https://www.svgrepo.com/show/474873/info.svg"
          className="w-5 cursor-pointer md:w-10"
          onClick={() => setShowModal(true)}
        />
        <h1 className="text-2xl font-semibold md:px-5 md:text-5xl">
          Choose Your Adventure
        </h1>
      </div>
      <div className="w-full grid place-items-center">
        <h2 className="w-11/12 text-xl font-bold px-2 md:px-10 md:text-left">
          Story Examples
        </h2>
        <div className="w-full grid place-items-center gap-11 p-10 z-40 lg:rounded-xl lg:w-11/12 md:grid-flow-col md:justify-between md:overflow-x-scroll">
          {adventures.map((adventure, i) => (
            <div
              className="adventure-preview cursor-pointer"
              key={i}
              onClick={() => handleAdventureClick(i)}
            >
              <img src={adventure.image} className="w-full " />
              {/* backdrop-filter */}
              <section className="adventure-info w-full py-5 backdrop-blur-md ">
                <b className="text-xl">{adventure.title}</b>
              </section>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseAd;
