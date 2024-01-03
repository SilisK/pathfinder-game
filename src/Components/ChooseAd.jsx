function ChooseAd({ handleAdventureClick, adventures }) {
  return (
    <div className="w-full min-h-screen grid place-items-center text-center py-24 gap-11">
      <h1 className="text-5xl font-bold px-5 text-primary">Choose Your Adventure</h1>
      <div className="w-full grid place-items-center gap-11 p-10 z-40 lg:w-11/12 md:grid-flow-col md:justify-between md:overflow-x-scroll">
        {adventures.map((adventure, i) => (
          <div
            className="adventure-preview cursor-pointer "
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
  );
}

export default ChooseAd;
