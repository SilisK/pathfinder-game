import { useEffect } from "react";

function ChooseAd({ handleAdventureClick, adventures, setShowModal }) {
  return (
    <div className="w-full min-h-screen grid place-items-center text-center py-24 gap-11">
      <div className="grid place-items-center gap-16 text-center px-5">
        <h1 className="text-2xl text-primary font-semibold md:text-5xl">
          Choose Your Adventure
        </h1>
        <button
          className="btn-gradient w-max"
          onClick={() => setShowModal(true)}
        >
          How To Play
        </button>
      </div>
      <div className="w-11/12 grid place-items-center">
        <h2 className="w-full text-3xl font-bold py-2 md:text-left">
          Story Examples
        </h2>
        <div className="w-full grid place-items-center py-2 gap-6 z-40 md:grid-flow-col md:justify-between md:overflow-x-scroll">
          {adventures.map((adventure, i) => (
            <div
              className="adventure-preview cursor-pointer"
              key={i}
              onClick={() => handleAdventureClick(i)}
            >
              <img src={adventure.image} className="" />
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
